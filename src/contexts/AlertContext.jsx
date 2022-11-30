import { createContext, useState } from 'react';

const AlertContext = createContext({
  text: "",
  type: "",
  setAlert: () => { },
});

export const AlertProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = (text, type, time) => {
    setText(text);
    setType(type);
    if (time) {
      setTimeout(() => {
        setText("");
        setType("");
      }, time);
    }
  };

  return (
    <AlertContext.Provider value={{ text, type, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;