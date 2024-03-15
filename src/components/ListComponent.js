import React from "react";
import { useDrop } from "react-dnd";
import ItemComponent from './ItemComponent'

export default function ListComponent({ items, list, core, skills, creative, handleReturn, handleDrop }) {
    const uniqueItems = [...new Set(items)];

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "item",
        drop: (item) => handleDrop(item.name, list),
      });
  
      const isActive = canDrop && isOver;
  
      return (
        <div
          ref={drop}
          style={{
            border: isActive ? "2px dashed #000" : "none",
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {uniqueItems.map((item, index) => (
            <ItemComponent key={index} name={item} list={list} handleReturn={handleReturn} core={core} skills={skills} creative={creative} />
          ))}
        </div>
      );
}
