import React, { useState } from "react";
import Modify from "./Modify";
function Topic(props) {
  const [visibility, setVisibility] = useState("none");
  const [buttonText, setButtonText] = useState("Edit");
  return (
    <li className="list-group-item ">
      <div style={{ display: visibility === "none" ? "block" : "none" }}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.title}</h5>
          <small>{props.time}</small>
        </div>
        <p className="mb-2">{props.description}</p>
      </div>
      <button
        type="button"
        className="btn btn-dark btn-sm"
        onClick={() => {
          props.delete({
            title: props.title,
            time: props.time,
            desc: props.description,
            id: props.id
          });
        }}
      >
        ✖
      </button>
      <button
        type="button"
        className="btn btn-dark btn-sm ms-1"
        onClick={() => {
          if (visibility === "none") {
            setVisibility("block");
            setButtonText("Cancel");
          } else {
            setVisibility("none");
            setButtonText("Edit");
          }
        }}
      >
        {buttonText}
      </button>
      <Modify
        visibility={visibility}
        setVisibility={setVisibility}
        add={props.add}
        title={props.title}
        time={props.time}
        desc={props.description}
        index={props.id}
        modify={props.modify}
        setButtonText={setButtonText}
      />
    </li>
  );
}
export default Topic;
