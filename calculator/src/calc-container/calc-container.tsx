import React, { FC, useState, useCallback } from "react";
import "./calc-container.css";
import { Screen } from "./screen/screen";
import { Button } from './button/button';
import { buttonsConfig } from './calc-constants';

export const CalcContainer: FC = () => {
    
    const [ result, setResult ] = useState("");
    const [ , setResetNextClick ] = useState(false);

    const evalCalcResult = useCallback((currentResult: string): string => {
        if (!currentResult) {
            return currentResult;
        }
        try {
            return String(eval(currentResult));
        } catch(e) {
            return "ERR: SYNTAX!!!";
        }
    }, [])

    const handleButtonClicked = useCallback((input: string): void => {
        switch (input) {
            case "=":
                setResetNextClick(true);
                setResult(prevResult => evalCalcResult(prevResult));
                break;
            case "C":
                setResetNextClick(false);
                setResult("");
                break;
            default:
                setResetNextClick(prevResetNextClick => {
                    if (prevResetNextClick) {
                        setResult(input);
                    } else {
                        setResult(prevResult => prevResult + input);
                    }
                    return false;
                });
        }
    }, [])

    function renderButtons(): JSX.Element[] {
        const buttons = buttonsConfig.map((buttonConf) => (
            <Button 
                label={buttonConf} 
                onClick={handleButtonClicked}
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