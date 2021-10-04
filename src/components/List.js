import React from "react";
import ListItem from "./ListItem";

function List(props) {
  
  return (
    <>
      {props.dataArr.map((e) => {
          return (
              <ListItem data={e} />
          )
      })}
    </>
  );
}

export default List;
