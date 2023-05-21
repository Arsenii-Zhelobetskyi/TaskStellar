import React from "react";
import "./_trashIcon.scss";

function TrashIcon({ deleteTask }) {
  return (
    <div className="trash-icon" onClick={() => deleteTask()}>
      <svg viewBox="400 500 1230 1100" xmlns="http://www.w3.org/2000/svg">
        <g className="bucket">
          <path d="M1554.9,602.8H508.2a45,45,0,0,0,0,90h84.1l64.9,768.3a156,156,0,0,0,155.3,142.7h438.1a155.8,155.8,0,0,0,155.3-142.7l64.9-768.3h84.1a45,45,0,0,0,0-90Z" />
          <path d="M1155.4,536.2H907.7a45,45,0,1,1,0-90h247.7a45,45,0,0,1,0,90Z" />
        </g>
        <g className="lines-on-bucket">
          <path d="M929.8,1422.6a45,45,0,0,1-44.8-41L840.8,876.4a45,45,0,0,1,89.6-7.8l44.3,505.1a45.1,45.1,0,0,1-40.9,48.8Z" />
          <path d="M1133.3,1422.6h-3.9a45,45,0,0,1-40.9-48.8l44.2-505.1a45,45,0,0,1,89.7,7.8l-44.3,505.2A44.9,44.9,0,0,1,1133.3,1422.6Z" />
        </g>
      </svg>
    </div>
  );
}

export default TrashIcon;
