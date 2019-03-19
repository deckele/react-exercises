import React, { FC } from "react";
import "./button.css";
interface ButtonProps {
    label: string;
    onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ onClick, label }) => (
    <button onClick={onClick} className="calc-button">
        {label}
    </button>
);