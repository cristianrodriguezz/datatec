import  { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000/'); // Change to your server URL

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const newPosition = { x: e.clientX, y: e.clientY };
    setPosition(newPosition);
    socket.emit('mouseMove', newPosition);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit('requestPosition');

    }, 2000);

    socket.on('mouseMove', (newPosition) => {
      setPosition(newPosition);
    });

    return () => {
      clearInterval(interval);
      socket.off('requestPosition',handleMouseMove)
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x - 25}px`,
        top: `${position.y - 25}px`,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'red',
        cursor: 'none',
      }}
    ></div>
  );
};

export default MouseFollower;
