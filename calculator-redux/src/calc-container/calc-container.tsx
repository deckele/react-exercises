import React, { FC } from "react";
import { buttonsConfig } from './calc-constants';
import { ScreenContainer } from './screen/screen-container';
import { ButtonContainer } from './button/button-container';
import "./calc-container.css";

export const CalcContainer: FC = () => {

    function renderButtons(): JSX.Element[] {
        const buttons = buttonsConfig.map((buttonConf) => (
            <ButtonContainer 
                label={buttonConf}
                key={buttonConf}
            />)
        );
        return buttons;
    }

    return (
        <div className="calc-container">
            <ScreenContainer />
            {renderButtons()}
        </div>
    );
}
