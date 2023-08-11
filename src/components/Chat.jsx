import {  useEffect, useMemo, useRef, useState } from 'react';
import io from 'socket.io-client';
import InputField from './InputField';
import { MESSAGE} from '../utils/consants';
import { getHourNow } from '../utils/getHourNow';

const Chat = () => {

  const [messages, setMessages] = useState([]);

  const ref = useRef()
  const form = useRef()

  const socket = useMemo(() => io('http://localhost:3000/'), []);



  const handleSubmit = (e) => {
    e.preventDefault();
    const formu = new FormData(form.current)
    const message = formu.get('messageInput')
    if(message.trim() === '') return
    
    const messageComplet = {
      body: message,
      hour: getHourNow(),
      user: MESSAGE.ME,
      avatar: null
    }

    socket.emit('message', JSON.stringify(messageComplet));
    setMessages((prev) => [...prev, messageComplet]);

    document.getElementById('messageInput').value = ''

  };
  const scrollDown = () => {
    ref.current.scrollTop = ref.current.scrollHeight
  }

  console.log("render");

  useEffect(() => {
    scrollDown()

    const handleSocketMessage = (newMessage) => {
      const message = JSON.parse(newMessage)
      const incomingMessage = {
        body: message.body,
        hour: message.hour,
        user: MESSAGE.YOU,
        avatar: null
      }
      setMessages((prev) => [...prev, incomingMessage]);
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
              message.user === MESSAGE.YOU ?
              <div key={index} className="flex w-full mt-2 space-x-3 max-w-xs">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">{message.body}</p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none">{message.hour}</span>
                </div>
              </div>
            :
              <div key={index} className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">{message.body}</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">{message.hour}</span>
                  </div>
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
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
