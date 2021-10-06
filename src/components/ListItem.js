import React, { useState } from "react";
import "./ListItem.css";

function ListItem(props) {
  const [del, setDel] = useState(false);

  const onClickHandler = (event) => {
    console.log(event);
    setDel(!del);   // toggle strike off and on
  };
  return (
    <div className="item">
      <p className={`${del ? "delete" : ""}`} // dynamically class added
      onClick={onClickHandler}>
        {props.data.title}
      </p>
    </div>
  );
}

export default ListItem;
