
export default class {
    constructor(props = {}) {
      this.el = props.el || "#root"
      Promise.resolve().then(() => this.init())
    }
  
    render() {
      $(this.el).html(this.template());
    }
  
    handle() {
  
    }
  
    clear() {
      $(this.el).off()
    }
  
    mounted() {
  
    }
  
    template() {}
  
    init() {
      this.clear()
      this.render()
      // $.parser.parse();
      this.mounted();
      this.handle()
    }
  }