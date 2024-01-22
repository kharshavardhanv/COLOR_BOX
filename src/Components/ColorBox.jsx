import React from 'react';
import { useState } from 'react';
import './Colors.css';
import './Grid.jsx';
function ColorBox({colors}) {
  const idx=()=>
  {
    let i=Math.floor(Math.random()*colors.length);
    return colors[i];
  }
  const [color,setcolor]=useState(idx);
  const chng=()=>
  {
    setcolor(idx);
  }
  return (
    <div className="colr" onClick={chng} style={{backgroundColor:color}}>
        </div>
      );
}
export default ColorBox;