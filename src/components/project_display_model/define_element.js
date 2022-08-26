// 在使用的module的頁面或最高層父階引入此檔案並呼叫

const define_element = () => {
  class custom_p extends HTMLElement {
    get content() {
      return this.getAttribute("content");
    }

    set content(val) {
      this.setAttribute("content", val);
    }
  }
  window.customElements.define("custom-p", custom_p);
};

export { define_element };
