import React from "react";
// We need to import ReactDOM since we're using a React Portal
// to connect to the <div id='modal'></div>
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    // onDismiss could some prop like onDismiss={() => history.push('/')}
    // where the user gets back e.g. to the root path and the Modal gets dismissed
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        // stopPropagation stops the event from bubbling up the event chain
        // We need this to stop Modal from closing when the user clicks inside of it.
        // --> only if he/ she clicks outside of it (Modal)
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
