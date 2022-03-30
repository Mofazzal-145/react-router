import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const{friendId} = useParams();
    return (
        <div>
            <h3>The Friend Detail:{friendId}</h3>
            {/* <h3>The Friend Detail:{params.friendId}</h3> */}
        </div>
    );
};

export default FriendDetail;