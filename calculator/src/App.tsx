import * as React from 'react';
import './App.css';
import { CalcContainer } from './calc-container/calc-container';

class App extends React.Component {
  public render() {
    return (
        <div className="App">
            <CalcContainer />
        </div>
    );
  }
}

export default App;
