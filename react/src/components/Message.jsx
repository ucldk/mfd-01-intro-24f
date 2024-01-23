import {
  useEffect,
  useState,
} from "react";

export default function  Message({ onCustomChange }) {
  const [ message, setMessage ] = useState('Hello world');

  useEffect(() => {
    console.log('Message updated', message);
    onCustomChange(message);
  }, [message]);

  return (
    <div>
      <p>{message}</p>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}
