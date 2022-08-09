import React, { useState } from "react";
import Topic from "./Topic";
import Add from "./Add";
function AgendaCard(props) {
  const [visibility, setVisibility] = useState("none");
  const [text, setText] = useState("⬇");
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Agenda</h5>
        <h6 className="card-subtitle mb-2 text-muted">Today's Topics</h6>
        {props.topics.map((topic, i) => (
          <Topic
            title={topic.title}
            time={topic.time}
            description={topic.desc}
            id={i}
            key={i}
            delete={props.delete}
            modify={props.modify}
          />
        ))}
        <div class="d-grid">
          <button
            className="btn btn-dark btn-sm"
            onClick={() => {
              if (visibility === "none") {
                setVisibility("block");
                setText("⬆");
              } else {
                setVisibility("none");
                setText("⬇");
              }
            }}
          >
            {text}
          </button>
        </div>
        <Add
          purpose={"Add"}
          add={props.add}
          index={-1}
          visibility={visibility}
          setVisibility={setVisibility}
          setText={setText}
        />
      </div>
    </div>
  );
}
export default AgendaCard;
