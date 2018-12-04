export default class Outlets {

    constructor({ _id, /* shopName, shopLicenceNum, shopAdd, shopLicenceImg, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopMoney, shopEmployee*/ } = {}){
        this._id = _id
        // this.shopName = shopName,
        // this.shopLicenceNum = shopLicenceNum,
        // this.shopAdd = shopAdd,
        // this.shopLocation = shopLocation,
        // this.shopCorporate = shopCorporate,
        // this.shopTel = shopTel,
        // this.shopFeature = shopFeature,
        // this.shopMoney = shopMoney,
        // this.shopEmployee = shopEmployee,
        // this.shopImg = shopImg,
        // this.shopLicenceImg = shopLicenceImg
    }

    // 获取所有门店信息
    async getOutletsByPageAsync({ curPage, eachPage } = {}){
        return await new Promise(resolve => {
            $.ajax({
                url:"/outlets/getOutletsByPage",
                type:"get",
                data:{
                    curPage,eachPage
                },
                success(data){
                    resolve(data)
                }
            })
        })
    }

    // 获取所有门店 ID
    async getOutletsByIdAsync(){
        const [data] = await new Promise(resolve => {
            $.ajax({
                url:"/outlets/getOutletsById",
                type:"get",
                data:{
                    _id:this._id
                },
                success(data){
                    resolve(data)
                }
            })
        })
        Object.assign(this,data)
        return data;
    }

    // 新增门店信息
    async addOutlets(data){
        return await new Promise(resolve => {
            $.ajax({
                url:"/outlets/addOutlets",
                type:"post",
                data,
                success(data){
                    resolve(data)
                }
            })
        })
    }

    // 修改、更新门店信息
    async updateOutletsById(data){
        console.log(data)
        return await new Promise(resolve => {
            $.ajax({
                url:"/outlets/updateOutletsById",
                type:"post",
                data,
                success(data){
                    resolve(data)
                }
            })
        })
    }

    // 获取门店图片信息
    async getOutletsImgsById() {
        let outletsId = this._id;
        return await new Promise(resolve => {
            $.ajax({
                url: "/outlets/getOutletsImgsById",
                type: "get",
                data: { outletsId },
                success(msg) {
                    resolve(msg)
                }
            })
        })
    }

    // 上传门店图片信息
    async OutletsFileUpload(data){
        return await new Promise(resolve => {
            $.ajax({
                url:"/outlets/OutletsFileUpload",
                type:"post",
                data,
                success(data){
                    resolve(data)
                }
            })
        })
    }

}