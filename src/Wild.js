// add a style tag with class name

// cache that classname using a hash generated function
const cache = new Map();
let counter = 1;

const appendStyle = (css) => {
  const style = document.createElement("style");
  style.innerText = css;
  document.head.appendChild(style);
};

const getClassName = (props, css, values) => {
  const interpolated = css.reduce((acc, chunk, index) => {
    const interpolation = values[index];

    if (typeof interpolation === "function") {
      acc += chunk + interpolation(props) ?? "";
      return acc;
    }

    return acc + chunk;
  }, "");

  if (!cache.get(interpolated)) {
    const className = `wild-${++counter}`;
    cache.set(interpolated, className);
    const actualCSS = `.${className} {
      ${interpolated}
    }`;
    appendStyle(actualCSS);
    return className;
  }
  return cache.get(interpolated);
};

export const Wild = (Tag) => (css, ...values) => (props) => {
  console.log(cache);
  const name = props.className + " " + getClassName(props, css, values);
  return <Tag {...props} className={name} />;
};
