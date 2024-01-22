import React from 'react';
import ColorBox from './ColorBox';
import './Gridy.css';
export default function Grid({colors}) {
    const nums = [];
      for(let i=0;i<105;i++)
      {
        nums.push(<ColorBox colors={colors}/>);
      }
      // console.log(nums);
  return (
    <div className='Grid'>
        {nums}
    </div>
  )
}
