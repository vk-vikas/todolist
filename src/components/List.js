import React from "react";
import ListItem from "./ListItem";

function List(props) {
  
  return (
    <>
      {props.dataArr.map((e) => {
        // e is for every element in that array
          return (
              <ListItem key={e.id} data={e} />
          )
      })}
    </>
  );
}

export default List;
