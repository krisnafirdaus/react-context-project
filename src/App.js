import React, { createContext, useState } from "react";
import Grader from "./component/Grader";

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
      <Grader />
    </ThemeContext.Provider>
  );
}

export default App;
