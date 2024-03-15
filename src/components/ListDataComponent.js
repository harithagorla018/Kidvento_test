import React from "react";
import { useDrop } from "react-dnd";
import ItemComponent from './ItemComponent'

export default function ListDataComponent({items, list, core, skills, creative, handleReturn, handleDrop, handleHome, handleSchool }) {
    const uniqueItems = [...new Set(items)];

    const [{ canDrop, isOver }, drop] = useDrop({
      accept: "item",
      drop: (item) => handleDrop(item.name, list),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const isActive = canDrop && isOver;

    return (
      <div
        ref={drop}
        style={{
          border: isActive ? "0px dashed #000" : "none",
          height: "300px",
          overflow: 'auto'
        }}
      >
        {uniqueItems.map((item, index) => (
          <ItemComponent key={index} name={item} list={list} handleReturn={handleReturn} core={core} skills={skills} creative={creative} handleHome={handleHome} handleSchool={handleSchool} />
        ))}
      </div>
    );
}
