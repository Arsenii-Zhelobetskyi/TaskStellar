import React, { useState } from "react";

function Filter({ sort, setSort, howToSort }) {
  const [text, setText] = useState(howToSort);
  const toggleList = () => {
    setSort(sort ? "" : howToSort);
    setText(sort ? howToSort : "all");
  };
  return <div onClick={() => toggleList()}>{text}</div>;
}

export default Filter;
