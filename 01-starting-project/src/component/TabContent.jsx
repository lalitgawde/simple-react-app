import React from "react";
import "./TabContent.css";
import { EXAMPLES } from "../data";

function TabContent(props) {
  console.log(props.activeTab)
  return (
    <div id="tab-content">
      <div>
        <h3>{EXAMPLES[props.activeTab].title}</h3>
        <p>{EXAMPLES[props.activeTab].description}</p>
        <pre>
          <code>{EXAMPLES[props.activeTab].code}</code>
        </pre>
      </div>
    </div>
  );
}

export default TabContent;
