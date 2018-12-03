import Base from "./base.js"
export default class Info extends Base {
  template() {
    return `
      <div>
      <input type="text" name="serverName" value="lis">
      <input type="button" value="新增">
      </div>
    `
  }
  handle() {
    $(this.el).on("click", "input[type='button']", e => {
      const serverName = $("input[name=serverName]").val();
      $.ajax({
        url: "/serveres/addServeres",
        type: "post",
        data: { serverName },
        success(data) {
          console.log(data)
        }
      })
    })

  }
}
