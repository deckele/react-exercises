import React, { FC, useState } from "react";
import "./calc-container.css";
import { Screen } from "./screen/screen";
import { Button } from './button/button';
import { buttonsConfig } from './calc-constants';

export const CalcContainer: FC = () => {
    
    const [ result, setResult ] = useState("");
    const [ resetNextClick, setResetNextClick ] = useState(false);

    function evalCalcResult(): string {
        if (!result) {
            return result;
        } 
        try {
            return String(eval(result));
        } catch(e) {
            return "ERR: SYNTAX!!!";
        }
    }

    function handleButtonClicked(input: string): void {
        switch (input) {
            case "=":
                setResetNextClick(true);
                setResult(evalCalcResult());
                break;
            case "C":
                setResetNextClick(false);
                setResult("")
                break;
            default:
                if (resetNextClick) {
                    setResetNextClick(false);
                    setResult(input);
                } else {
                    setResult(result + input);
                }
        }
    }

    function renderButtons(): JSX.Element[] {
        const buttons = buttonsConfig.map((buttonConf) => (
            <Button 
                label={buttonConf} 
                onClick={() => handleButtonClicked(buttonConf)}
                key={buttonConf}
            />)
        );
        return buttons;
    }

    return (
        <div className="calc-container">
            <Screen result={result} />
            {renderButtons()}
        </div>
    );
}