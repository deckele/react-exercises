import * as React from 'react';
import './App.css';
import { CalcContainer } from './calc-container/calc-container';

interface AppState {
  isCalcShowing: boolean;
}
class App extends React.Component<{}, AppState> {
  constructor (props: object) {
    super(props);
    this.state = { isCalcShowing: false };
  }
  handleShowButtonClick = () => {
    this.setState({ isCalcShowing: !this.state.isCalcShowing });
  }
  public render() {
    return (
        <div className="App">
            <button onClick={this.handleShowButtonClick}>Show Calculator?</button>
            {/* <div style={{ display: this.state.isCalcShowing ? "" : "none" }}>
              <CalcContainer />
            </div> */}
            {/* <div className={this.state.isCalcShowing ? "showing" : "hidden" }>
              <CalcContainer />
            </div> */}
            {
              this.state.isCalcShowing 
                ? <CalcContainer /> 
                : null
            }
        </div>
    );
  }
}

export default App;
