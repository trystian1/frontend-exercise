const render = (target, html) => {
  target.innerHTML = html;
}

const createElement = (elementTag, props = {attributes: {}, innerHTML: null}) => {

  const propsArray = Object.keys(props.attributes),
        element = document.createElement(elementTag);

  propsArray.forEach((key, prop) => {

    if (props.attributes[key]) {
      element.setAttribute(key, props.attributes[key]);
    }

  });

  element.innerHTML = props.innerHTML ? props.innerHTML : '';

  return element;

}

export { render };
export { createElement };