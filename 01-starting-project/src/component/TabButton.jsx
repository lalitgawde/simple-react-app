import React from "react";

function TabButton(props) {
  return (
    <li>
      <button
        onClick={() => props.onClick(props.children)}
        className={props.activeTab === props.children ? "active" : ""}
      >
        {props.children}
      </button>
    </li>
  );
}

export default TabButton;
