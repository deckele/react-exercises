import React, { FC } from "react";
import "./screen.css";

interface ScreenProps {
    result: string;
}
export const Screen: FC<ScreenProps> = ({ result }) => (
    <div className="calc-screen">{result}</div>
);