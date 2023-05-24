import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  const navi = useNavigate();
  function closedHandler() {
    navi("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closedHandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
