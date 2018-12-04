export default class ShopEmployee {

    // 获取所有店员信息
    async getShopEmployeeByPageAsync({ curPage, eachPage } = {}){
        return await new Promise(resolve => {
            $.ajax({
                url:"/shopEmployee/getShopEmployeeByPage",
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

    // 新增店员信息
    async addShopEmployeeAsync(data){
        console.log(data)
        return await new Promise(resolve => {
            $.ajax({
                url:"/shopEmployee/addShopEmployee",
                type:"post",
                data,
                success(data){
                    resolve(data)
                }
            })
        })
    }

}