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
    <>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow w-full max-w-xl h-[300px] sm:h-screen mb-20 bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {
            messages.map((message, index) => (
              <div key={index} className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">{message}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
              </div>
            </div>
            ))
          }

        </div>
        <div className="bg-gray-300 p-4">
          <input value={message} type="text" onChange={handleChange}  className="flex items-center h-10 w-full rounded px-3 text-sm"  placeholder="Type your message…"/>
          <button className='bg-red-300' type='submit'>Enviar</button>
        </div>
    </form>


  </>
  );
};

export default Chat;
