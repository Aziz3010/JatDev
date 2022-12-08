import React from 'react';
import "./Friend.css";

const Friend = ({Person}) => {
  return (
    <div className='friend'>
        <div className="image" style={{border: `1px solid ${Person.bgBorderColor}`}}>
            <img src={Person.image} alt={Person.name} />
        </div>
        <div className="content">
            <h4 className='fri_name'>{Person.name}</h4>
            <h4 className='fri_msg'>{Person.messages}</h4>
        </div>
    </div>
  )
}

export default Friend;