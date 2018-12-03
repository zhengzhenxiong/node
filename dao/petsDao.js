// 持久层
const mongoose = require("mongoose");

// 商品列表
module.exports.getPets = async ({ curPage, eachPage }) => {
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    };
    const petsModel = mongoose.model("pets");
    result.total = await petsModel.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await petsModel
        .find()
        // populate("petss")
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({
            _id: 1
        })
    return result;
}

// 删除
module.exports.deletePetsById = async (pets) => {
    await mongoose.model("pets").remove(pets, function (err) {
        console.log(err)
    })
}
// 新增
module.exports.addPets = async (pets) => {
    await mongoose.model("pets").create(pets)
}
// 搜索
module.exports.searchPets = async (conditions) => {
    const {searchText,curPage, eachPage}=conditions
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    };
    const searchArr = [];
    let reg=new RegExp(searchText,"g");
   const data=await mongoose.model("pets").find()
  
    data.map(item => {
        if(reg.test(item)){
            searchArr.push(item)
        } 
    })
    result.rows=searchArr
    result.total = searchArr.length;
    result.maxPage = Math.ceil(result.total / result.eachPage);
    return result

};
// 修改
module.exports.updateById = async ({
     _id, 
    petsName,
    petsType, 
    petsProvenance,
    petsMainColors,
    petsCharacter,
    petsPrice,
    petsShape,
    petsIntro,
    petsImg }) => {
    const data = await mongoose
        .model("pets")
        .update({
            _id
        }, {
            $set: {
                petsName,
                petsType,
                petsProvenance,
                petsMainColors,
                petsCharacter,
                petsPrice,
                petsShape,
                petsIntro,
                petsImg
            }
        })
    if (data.nModified === 1) {
        return true
    } else {
        return false
    }
}
