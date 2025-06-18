import React from "react";

function Alerts(props) {
  const tosUpper = (word) => {
    let words = word.toLowerCase();
    return words.charAt(0).toUpperCase() + words.slice(1);
  };

  return (
    <div style={{height:'50px'}}>
      {props.alert &&
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{tosUpper(props.alert.type)}</strong> :{" "}
          <strong>{props.alert.msg}</strong>
        </div>
      </div>}
    </div>
  );
}

export default Alerts;
