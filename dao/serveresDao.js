// 持久层
const mongoose = require("mongoose");
// 新增
module.exports.addServeres = async (server) => {
  return await mongoose.model("serveres").create(server)
}
// 渲染
module.exports.getServeresByPage = async ({ curPage, eachPage }) => {
  const result = {
    curPage: Number(curPage),
    eachPage: Number(eachPage)
  };
  const serveresModel = mongoose.model("serveres");
  result.total = await serveresModel.count();     //获取数据库的数据，给result身上创建一个total的属性并赋值给result.total   统计总数
  result.maxPage = Math.ceil(result.total / result.eachPage);  //总页数
  result.rows = await serveresModel
    .find()
    // populate("classes")
    .skip((result.curPage - 1) * result.eachPage)   //从哪里开始查
    .limit(result.eachPage)    //查询多少条
    .sort({        //升序
      _id: 1
    })
  return result;
};

// 修改
module.exports.updateById = async ({ _id, serviceName, serviceType, serviceSchedule, serviceCanFor, serviceDetial, serviceTime, serviceLevel, servicePrice, serviceImg
  }) => {
  return await mongoose
    .model("serveres").update({
      _id
    }, {
      $set: {
        serviceName, serviceType, serviceSchedule, serviceCanFor, serviceDetial, serviceTime, serviceLevel, servicePrice, serviceImg
      }

    })
};
// 删除
module.exports.delById = async (server) => {
  return await mongoose.model("serveres").remove(server)
};
// 查询
module.exports.seachServeresByPage = async ({ searchText, curPage, eachPage }) => {
  const result = {
    curPage: Number(curPage),
    eachPage: Number(eachPage)
  };
  const searchArr = []
  let reg = new RegExp(searchText, "g");
  const sarchserveresModel = await mongoose.model("serveres").find();  //查询到所有数据
  sarchserveresModel.map(item => {
    if (reg.test(item)) {
      searchArr.push(item)
    }
  })
  result.rows=searchArr;
  result.total=searchArr.length;
  result.maxPage= Math.ceil(result.total / result.eachPage);
  return result;
};

