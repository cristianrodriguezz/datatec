import {  useEffect, useMemo, useRef, useState } from 'react';
import io from 'socket.io-client';
import InputField from './InputField';
import { getHoraNow } from '../utils/getHoraNow';

const Chat = () => {

  const [messages, setMessages] = useState([]);

  const ref = useRef()
  const form = useRef()

  const socket = useMemo(() => io('wss://chatdamatecc.fly.dev/'), []);



  const handleSubmit = (e) => {
    e.preventDefault();
    const formu = new FormData(form.current)

    const message = formu.get('messageInput')

    socket.emit('message', message);
    setMessages((prev) => [...prev, message]);

    document.getElementById('messageInput').value = ''

  };
  const scrollDown = () => {
    console.log(ref.current.scrollHeight );
    console.log(ref.current.scrollTop );
    ref.current.scrollTop = ref.current.scrollHeight

  }

  console.log("render");

  useEffect(() => {
    scrollDown()

    const handleSocketMessage = (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    };

    socket.on('message', handleSocketMessage);

    return () => {
      socket.off('message', handleSocketMessage);

    };
  }, [messages.length, socket]);

  return (
    <div className='flex justify-center items-start mt-10 h-screen'>
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col flex-grow w-full max-w-xl h-[300px] sm:h-[600px] mb-20 bg-white shadow-xl rounded-lg overflow-hidden">
        <div ref={ref} className="flex flex-col flex-grow h-0 p-4 overflow-auto ">
          {
            messages.map((message, index) => (
              <div key={index} className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">{message}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">{getHoraNow()}</span>
              </div>
            </div>
            ))
          }
        </div>
        <InputField />
    </form>


  </div>
  );
};

export default Chat;
