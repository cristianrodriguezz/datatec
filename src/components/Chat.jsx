import { useCallback, useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = useMemo(() => io('wss://chatdamatecc.fly.dev/'), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessages((prev) => [...prev, message]);
    setMessage('');
  };

  const handleChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  console.log("render");

  useEffect(() => {
    const handleSocketMessage = (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    };

    socket.on('message', handleSocketMessage);

    return () => {
      socket.off('message', handleSocketMessage);
      socket.disconnect();
    };
  }, [socket]);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-96'>
      <input value={message} type="text" onChange={handleChange} />
      <button className='bg-red-300' type='submit'>Enviar</button>
      {messages.map((message, index) => (
        <div key={index}>
          <p className='text-white'>{message}</p>
        </div>
      ))}
    </form>
  );
};

export default Chat;
