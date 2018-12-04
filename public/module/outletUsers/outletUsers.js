export default class OutletUsers {

    constructor({ _id, userAcount, userPwd, userPhone, userMail, userName, userType, userStatus } = {}){
        this._id = _id,
        this.userAcount = userAcount,
        this.userPwd = userPwd,
        this.userPhone = userPhone,
        this.userMail = userMail,
        this.userName = userName,
        this.userType = userType,
        this.userStatus = userStatus
    }

    async getOutletUsersByPageAsync({ curPage, eachPage } = {}){
        return await new Promise(resolve => {
            $.ajax({
                url:"/outletUsers/getOutletUsersByPage",
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

    async getOutletUsersByIdAsync(){
        const [data] = await new Promise(resolve => {
            $.ajax({
                url:"/outletUsers/getOutletUsersById",
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

}