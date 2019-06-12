import React from "react";

const Like = ({ liked, onLikeToggle }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      className={classes}
      onClick={onLikeToggle}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
