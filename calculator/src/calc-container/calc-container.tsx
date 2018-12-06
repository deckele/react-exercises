import * as React from "react";
import "./calc-container.css";
import { Screen } from "./screen/screen";
import { Button } from './button/button';
import { buttonsConfig } from './calc-constants';

interface CalcContainerProps {

}
interface CalcContainerState {
    result: string;
}

export class CalcContainer extends React.Component<CalcContainerProps, CalcContainerState> {
    constructor(props: CalcContainerProps) {
        super(props);
        this.state = { result: "" }
    }

    private evalCalcResult = (): string => {
        try {
            return String(eval(this.state.result));
        } catch(e) {
            return "ERR: SYNTAX!!!";
        }
    }

    handleButtonClicked = (input: string) => {
        switch (input) {
            case "=":
                this.setState({
                    result: this.evalCalcResult()
                });
                break;
            case "C":
                this.setState({ result: "" })
                break;
            default:
                this.setState({
                    result: this.state.result.concat(input)
                });
        }
    }

    renderButtons = (): JSX.Element[] => {
        const buttons = buttonsConfig.map((buttonConf) => (
            <Button 
                label={buttonConf} 
                onClick={() => this.handleButtonClicked(buttonConf)}
                key={buttonConf}
            />)
        );
        return buttons;
    }

    render() {
        return (
            <div className="calc-container">
                <Screen result={this.state.result} />
                {this.renderButtons()}
            </div>
        );
    }
}