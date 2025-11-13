import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ChannelList from './components/ChannelList';
import Messages from './components/Messages';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/channels" element={<ChannelList />} />
        <Route path="/messages/:channelId" element={<Messages />} />
      </Routes>
    </Router>
  );
};

export default App;
