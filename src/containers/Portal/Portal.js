import { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = props => {
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);
    return function close() {
      el.remove();
    };
  }, []);

  return ReactDOM.createPortal(props.children, el);
};

export default Portal;
