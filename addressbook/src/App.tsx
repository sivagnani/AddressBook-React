import React from 'react';
import Main, { APPWithRouter } from './components/Main/main';
import { BrowserRouter} from "react-router-dom";
class App extends React.Component{
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <APPWithRouter/>
      </BrowserRouter>
    );
  }
}

export default App;
