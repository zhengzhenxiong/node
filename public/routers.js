
import Info from "./module/info.js";

var routes = {
    "/info": {
        on() {
            if (!$(".info-content").legnth) new Info;
        }
    }
};

export default {
    init: () => {
        Router(routes).configure({ recurse: "forward" }).init();
        location.hash = location.hash || "/info"
    }

}