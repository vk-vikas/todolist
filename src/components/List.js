import React from "react";
import ListItem from "./ListItem";

function List(props) {
  
  return (
    <>
      {props.dataArr.map((e) => {
          return (
              <ListItem key={e.title} data={e} />
          )
      })}
    </>
  );
}

export default List;
