import React, { FC, useCallback, memo } from "react";
import "./button.css";
interface ButtonProps {
    label: string;
    onClick: (label: string) => void;
}
export const Button: FC<ButtonProps> = memo(({ onClick, label }) => {
    const handleClick = useCallback(() => onClick(label), [onClick, label]);
    return (
        <button onClick={handleClick} className="calc-button">
            {label}
        </button>
    );
})
