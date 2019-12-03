import React, { useRef, useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [ textInput, setTextInput ] = useState("");
  const [ isChecked, setIsChecked ] = useState(false);

  useEffect(
    () => {
      textInputRef.current && textInputRef.current.focus();
    },
    []
  );
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Form submitted!!");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextInput(e.target.value);
    textInputRef.current && textInputRef.current.onchange
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={textInputRef} type="text" value={textInput} onChange={handleInputChange} />
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        <button type="Submit">Submit me!!</button>
      </form>
    </div>
  );
}

export default App;
