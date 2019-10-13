import React, { useState, Fragment } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, toggleModal] = useState(false);

  const renderActions = () => {
    return (
      <Fragment>
        {/* When the user clicks 'Okay' we should do whatever this component was intended to do.
          Right here, we'll just close the Modal. */}
        <button
          onClick={() => toggleModal(false)}
          className="ui button primary"
        >
          Okay
        </button>
        {/* If the user clicks the 'Cancel' option, we should redirect them to the appropriate route.
          Right here, we don't have no other option so I'll use the 'toggleModal' method, again.
        */}
        <button
          onClick={() => toggleModal(false)}
          className="ui button negative"
        >
          Cancel
        </button>
      </Fragment>
    );
  };

  const renderContent = () => {
    return (
      <Fragment>
        <p>Are you sure you want to proceed with this action: </p>
        <b>Some dynamic action</b>
      </Fragment>
    );
  };

  return (
    <div className="ui grid middle aligned  ">
      <div className="ui text container segment inverted">
        <h3 className="content">
          Hi, I am the background{" "}
          <span role="img" aria-label="Modal">
            {" "}
            🤗
          </span>
        </h3>
        <p>If you want to close the Modal - Click anywhere outside of it!</p>
        <br /> <hr /> <br />
        <button className="ui button grey" onClick={() => toggleModal(!isOpen)}>
          Open Modal
        </button>
        {isOpen === true ? (
          <Modal
            title="Univerasl Modal"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => toggleModal(!isOpen)} // if the user clicks on the background
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
