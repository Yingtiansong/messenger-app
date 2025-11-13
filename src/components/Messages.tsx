import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { channelId } = useParams();
  const { username } = location.state || {};

  useEffect(() => {
    axios.get('https://messenger-ae5085.gitlab.io/messages.json')
      .then(response => {
        const data = response.data;
        // Filter messages for the current channel
        const channelMessages = data.channels?.find(c => c.id === channelId)?.messages || [];
        setMessages(channelMessages);
      })
      .catch(error => console.error('Error fetching messages:', error));
  }, [channelId]);

  const handleBackClick = () => {
    navigate('/channels');
  };

  return (
    <div className="messages-container">
      <button onClick={handleBackClick}>Back</button>
      <h2>Messages</h2>
      <ul>
        {messages.map((msg: any) => (
          <li key={msg.id} className={msg.sender === username ? 'right' : 'left'}>
            {msg.sender !== username && <span>{msg.sender}: </span>}
            <span>{msg.text}</span>
            <span className="time">{msg.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
