

export default class outletUsers {
    //登陆
    async getAlloutletUsersAsync(userAcount,userPwd){
        console.log(123);
        
        return await new Promise(resolve=>{
            $.ajax({
                url:'/outletUsers/getAlloutletUsers',
                type:'get',
                data:{userAcount,userPwd},
                success: function(data) {
                    resolve(data)
                }
            })
        })
    }
    // 注册
    async regOutletAsync(userAcount,userPwd,userPhone,userMail,userType,userStatus){
        return await Promise(()=>{
        $.ajax({
            url:"/outletUsers/regOutlet",
            type:"post",
            data:{userAcount:userAcount,userPwd:userPwd,userPhone:userPhone,
                userMail:userMail,userType:userType,userStatus:userStatus},
            success(data){
                if(data){
                    console.log(data);
                    
                }
            }
        })
        })
    }
}