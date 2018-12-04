import Base from "./base.js";

export default class extends Base {

  template() {
    return `
      <div class="easyui-layout" style="height:800px;">
        <div data-options="region:'west',split:true" title="操作管理" style="width:200px;">
          <ul class="easyui-tree">
            <li>
              <span>用户管理</span>
              <ul>
                <li><a href="#">用户列表</a></li>
                <li><a href="#">新增用户</a></li>
              </ul>
            </li>
            <li>
              <span>宠主管理(平台管理员)</span>
              <ul>
                <li><a href="#">宠主列表</a></li>
                <li><a href="#">新增宠主</a></li>
              </ul>
            </li>
            <li>
              <span>宠物管理</span>
              <ul>
                <li><a href="#">宠物列表</a></li>
                <li><a href="#">新增宠物</a></li>
              </ul>
            </li>
            <li>
              <span>门店管理(门店管理员)</span>
              <ul>
                <li><a href="#/info/outletsList">门店列表</a></li>
                <li><a href="#/info/addOutlets">新增门店</a></li>
              </ul>
            </li>
            <li>
              <span>商品管理(门店管理员)</span>
              <ul>
                <li><a href="#">商品列表</a></li>
                <li><a href="#">新增商品</a></li>
              </ul>
            </li>
            <li>
              <span>服务管理(门店管理员)</span>
              <ul>
                <li><a href="#">服务列表</a></li>
                <li><a href="#">新增服务</a></li>
              </ul>
            </li>
            <li>
              <span>订单管理</span>
              <ul>
                <li><a href="#">订单列表</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="info-container" data-options="region:'center',title:'详情',iconCls:'icon-ok'"></div>
      </div>
    `
  }
}