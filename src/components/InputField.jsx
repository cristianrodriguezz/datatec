import { memo } from "react";

// eslint-disable-next-line react/prop-types
const InputField = memo(function InputField({ value, onChange }){
  console.log('InputField render');
  
  return (
    <div className="bg-gray-300 p-4 flex gap-2">
      <input
        value={value}
        type="text"
        onChange={onChange}

        className="flex items-center h-10 w-full rounded px-3 text-sm"
        placeholder="Type your message…"
        id="messageInput"
        name="messageInput"
      />
      <button className='text-white bg-victoria-primary p-2 rounded-lg' type='submit'>Enviar</button>
    </div>
  );
});

export default InputField