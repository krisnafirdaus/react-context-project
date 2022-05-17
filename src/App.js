import React, { createContext, useState } from "react";
import Grader from "./component/Grader";
import Memo from "./component/Memo";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("summer");
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {/* <ToolBar />
      <WeatherReaction /> */}
      {/* <Grader /> */}
      <Memo />
    </ThemeContext.Provider>
  );
}

export default App;
