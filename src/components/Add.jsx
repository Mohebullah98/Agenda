import React, { useState } from "react";
function Add(props) {
  const [topic, setTopic] = useState({
    title: "",
    time: "",
    desc: ""
  });
  function handleInput(event) {
    const { name, value } = event.target;
    setTopic((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <li className="list-group-item" style={{ display: props.visibility }}>
      <h4 className="text-center">Add Topic</h4>
      <form onSubmit={(e) => e.preventDefault}>
        <input
          placeholder="Title"
          name="title"
          type="text"
          value={topic.title}
          onChange={handleInput}
          className="textBox"
        />
        <input
          placeholder="Duration "
          name="time"
          type="text"
          value={topic.time}
          onChange={handleInput}
          className="textBox"
        />
        <textarea
          placeholder="description"
          name="desc"
          type="text"
          value={topic.desc}
          onChange={handleInput}
          className="textBox form-control"
        />
        <button
          type="button"
          style={{ marginLeft: "5px" }}
          className="btn btn-dark btn-sm ml-1"
          onClick={() => {
            props.add(topic);
            props.setVisibility("none");
            props.setText("⬇");
            setTopic({ title: "", time: "", desc: "" });
          }}
        >
          <span aria-label="Add sign">➕</span>
        </button>
      </form>
    </li>
  );
}
export default Add;
