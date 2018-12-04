const mongoose = require("mongoose")

module.exports.getOutletUsersByPage = async ({curPage, eachPage }) => {
    const result = {
        curPage:Number(curPage),
        eachPage:Number(eachPage),
    };

    const outletsModel = mongoose.model("outletUsers");
    result.total = await outletsModel.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await outletsModel
        .find()
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({_id:1})
    return result;
}

module.exports.getOutletUsersById = async _id => {
    return await mongoose.model("outletUsers").find({_id})
}