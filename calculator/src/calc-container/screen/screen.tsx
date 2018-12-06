import * as React from "react";
import "./screen.css";

interface ScreenProps {
    result: string;
}
export const Screen: React.FC<ScreenProps> = (props) => (
    <div className="calc-screen">{props.result}</div>
);