import React, { useState } from "react";
import AgendaCard from "./AgendaCard";

function App() {
  let example = {
    title: "Introduction",
    time: "5 Minutes",
    desc:
      "Go over a brief overview of yesterday's voting scenario. Discuss potential blockers."
  };
  const [topics, setTopics] = useState([example]);
  function addTopic(item) {
    setTopics((prevTopics) => [...prevTopics, item]);
  }
  function deleteTopic(item) {
    setTopics((prevTopics) => prevTopics.filter((top, i) => i !== item.id));
  }
  function editTopic(item, index) {
    setTopics((prevTopics) =>
      prevTopics.map((topic, i) => (index === i ? item : topic))
    );
  }
  return (
    <div className="resultContainer">
      <AgendaCard
        topics={topics}
        delete={deleteTopic}
        add={addTopic}
        modify={editTopic}
      />
    </div>
  );
}

export default App;
