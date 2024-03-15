import React from "react";
import { useDrag } from "react-dnd";
import { Typography } from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function ItemComponent({ name, list, core, skills, creative, handleReturn }) {
    const [{ isDragging }, drag] = useDrag({
        type: "item",
        item: { name, list },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
  
      let activeClass;
  
      if (core.includes(name)) {
        activeClass = 'coreContent'
      } else if (skills.includes(name)) {
        activeClass = 'specialContent'
      } else if (creative.includes(name)) {
        activeClass = 'creativeContent'
      }
  
      return (
        <div
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: "move"
          }}
        >
          <div className={activeClass} style={{ display: 'flex', justifyContent: 'space-between', margin: '7px' }}>
            <Typography style={{ fontSize: '18px' }}>{name}</Typography>
            {(list === "school" || list === "home") && (
              <div onClick={() => handleReturn(name, list)}>
                <DisabledByDefaultIcon />
              </div>
            )}
          </div>
        </div>
      );
}
