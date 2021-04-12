import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { removeNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector(({ notifications }) => notifications);
  const dispatch = useDispatch();

  function handleRemoveNotification() {
    dispatch(removeNotification());
  }

  function timer() {
    return setTimeout(handleRemoveNotification, 5000);
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

  return <div style={style}>{notification}</div>;
};

export default Notification;
