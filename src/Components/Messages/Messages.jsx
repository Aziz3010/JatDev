import React from 'react';
import "./Messages.css";
import Friend from '../../Components/Friend/Friend';
import { Friends } from "../../Assets/Data/Data";

const Messages = () => {
    return (
        <div className="messages">
            <h3 className='title'>messages</h3>
            {Friends.map((Person, index) => (
                <Friend key={index} Person={Person} />
            ))}
        </div>
    )
}

export default Messages;