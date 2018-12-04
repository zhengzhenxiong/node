import Info from "./module/info.js";  //主页

import OutletsList from "./module/outlets/outletsList.js";

var routes = {
  // "/login": () => new Login(),
  // "/_login/:username": username => new Login({ username }),
  // "/reg": () => new Reg(),
  "/info": {
    // "/addOutlets": () => new AddOutlets({ el: ".info-container" }),
    "/outletsList": () => new OutletsList({ el: ".info-container" }),
    on: () => { if (!$(".info-container").length) new Info }
  }
};

export default {
  init: () => {
    Router(routes).configure({ recurse: 'forward' }).init();
    location.hash = location.hash || "/info"
  }
}

