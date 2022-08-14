import React from "react";

const Badge = (props) => {
  return (
    <>
      <h6>{props.att.name}</h6>
      <h6>{props.att.age}</h6>
      <h6>{props.att.prof}</h6>
      <img src={props.att.photo} alt="jhjhghj" width="50" height="50"></img>
    </>
  );
};

export default Badge;
