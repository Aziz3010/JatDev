import React from 'react';
import "./FriendsImages.css";

const FriendsImages = ({ FriendsOnCall }) => {
    return (
        <div className="friendsImages">
            {
                FriendsOnCall.map((FriendOnCall, index) => (
                    FriendOnCall.image !== null ?
                        <img key={index} src={FriendOnCall?.image} alt={FriendOnCall?.name} />
                        :
                        <span key={index}>{FriendOnCall.name.slice(0, 1)}</span>
                ))
            }
        </div>
    )
}

export default FriendsImages;