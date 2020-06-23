import { useState, useEffect } from 'react';

const HistoryToggleHook = (initialState) => {
  const [historyToggle, setHistoryToggle] = useState(initialState);
  
  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log("useEffect" , historyToggle);
  }, [historyToggle]);

  const myFunction = () => {
    console.log("hello World")
  }
  return {
    historyToggle,
    setHistoryToggle, 
    myFunction 
  };
}

export default HistoryToggleHook