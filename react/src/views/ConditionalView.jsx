import './ConditionalView.css';
import { useState } from "react";

export default function ConditionView() {
  const [ active, setActive ] = useState(false);

  return (
    <>
      <h1>Conditional View</h1>

      <button onClick={() => setActive(!active)}>Toggle Active</button>

      { active && <p>Active</p> }
      { !active && <p>Not Active</p> }

      <p className={active ? 'active' : 'not-active'}>Style Binding</p>
    </>
  );
}
