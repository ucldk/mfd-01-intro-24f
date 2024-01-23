import {
  useState,
} from "react";
import Basic from '../components/Basic.jsx';
import Message from '../components/Message.jsx';

export default function HomeView() {
  const [ parentMsg, setParentMsg ] = useState('');

  return (
    <div>
      <h1>Home</h1>
      <Basic />
      <hr />
      <p><strong>Parent:</strong> { parentMsg? parentMsg : 'Nothing written' }</p>
      <Message onCustomChange={(value) => setParentMsg(value)} />
    </div>
  );
}
