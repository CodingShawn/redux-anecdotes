import React, { useEffect } from "react";
import { removeNotification } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Notification = (props) => {
  const notification = props.notification;

  function timer() {
    return setTimeout(props.removeNotification, 5000);
  }

  useEffect(() => {
    let timerID = timer();
    return () => clearTimeout(timerID);
  });

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  if (!notification) {
    return <div></div>;
  }

  return <div style={style}>{notification}</div>;
};

function mapStateToProps(state) {
  return {
    notification: state.notifications,
  };
}

const mapDispatchToProps = {
  removeNotification,
};

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps)(Notification);

export default ConnectedNotification;
