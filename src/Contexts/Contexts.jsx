import React, { createContext, useState } from 'react';
export const FriendProvider = createContext()

const Contexts = ({ children }) => {
    const [call, setCall] = useState([])
    const [text, setText] = useState([])
    const [video, setVideo] = useState([])
    const data = {
        call, setCall,
        text, setText,
        video, setVideo
    }
    return (
        <FriendProvider.Provider value={data}>{children}</FriendProvider.Provider>
    );
};

export default Contexts;