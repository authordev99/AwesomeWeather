import { createContext, useState } from "react";

export const ContextState = createContext(null);

function Provider({ children }) {
  const setData = (data) => {
    setState({...state, data: data})
  }

  const resetData = () => {
    setState(initState)
  }

  const initState = {
    user: null,
    setData: setData,
    resetData: resetData,
  }


  const [state, setState] = useState(initState)

  return (
    <ContextState.Provider value={state}>
        {children}
    </ContextState.Provider>
  );
}

export default Provider;
