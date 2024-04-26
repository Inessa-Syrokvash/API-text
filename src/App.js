import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");

  //! Способ №1
  /*
  useEffect(() => {
    getText();
  }, [])

  const getText = async () => {
    const response = await fetch(`https://api.quotable.io/random`);
    const data = await response.json();
     // console.log(data.content);
    setText(data.content);
  }
  */

    //! Способ №2
    /*
    useEffect(() => {
      const getText = async () => {
        const response = await fetch(`https://api.quotable.io/random`);
        const data = await response.json();
        // console.log(data.content);
        setText(data.content)
      }
      getText();
    }, [])
    */

  
    //! Способ №3
    const getText = useCallback(async () => {
      const response = await fetch(`https://api.quotable.io/random`);
      const data = await response.json();
      // console.log(data.content);
      setText(data.content)
    }, [])

    useEffect(( )=> {
      getText();
    }, [getText])


  return (
    <div className="App">
      <p>{content}</p>
    </div>
  );
}

export default App;
