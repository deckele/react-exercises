import * as React from "react";
import "./button.css";
interface ButtonProps {
    label: string;
    onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
    <button onClick={onClick} className="calc-button">
        {label}
    </button>
);