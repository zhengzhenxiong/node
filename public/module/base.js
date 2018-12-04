export default class {
  constructor(props = {}) {
    this.el = props.el || "#root"
    Promise.resolve().then(() => this.init())
  }

  init() {
    this.clear()
    this.render()
    $.parser.parse();
    this.mounted();
    this.handle()
  }

  clear() {
    $(this.el).off()
  }

  render() {
    $(this.el).html(this.template());
  }

  template() {}

  mounted() {}

  handle() {}

}