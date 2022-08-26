const custom_element = () => {

  function customTag(tagName, fn) {
    Array.from(document.getElementsByTagName(tagName)).forEach(fn);
  }

  function myElementHandler(element) {
    // element.textContent = element.content;
    element.innerHTML = element.content;
  }

  customTag("custom-p", myElementHandler);
};

export { custom_element };
