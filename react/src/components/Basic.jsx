import { useState } from "react";

export default function Basic() {
  const [message, setMessage] = useState("Hello World");
  return (
    <div>
      <p>{ message }</p>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}
