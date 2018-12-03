const mongoose =require("mongoose")
require("./model/outletUsers.js")



// 注册门店管理用户
module.exports.regOutlet = async (outletUsers) => {
   
    const { userAcount, userPwd,userPhone,userMail,userName,userType,userStatus } = outletUsers;
    const data = await mongoose.model("outletUsers").find({ userAcount });   //通过username查询数据库里是否有这个用户
  
    if (data.length === 1) {
        return {
            code:false
        }
    } else if (data.length === 0) {
        await mongoose.model("outletUsers").create({  userAcount, userPwd,userPhone,userMail,userName,userType,userStatus })
        return {
            code:true
        }
    }
}
// 登录
module.exports.getAlloutletUsers = async (outletUsers) => {
   
    let id = 0;
    const data = await mongoose.model("outletUsers").find(outletUsers);
    if (data.length === 1) {
        id = data[0];

    } else {
        id = false;
    }
    return id;
}