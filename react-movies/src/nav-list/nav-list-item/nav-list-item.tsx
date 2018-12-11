import * as React from "react";

export interface NavListItemProps {
    label: string; 
}
export const NavListItem: React.FC<NavListItemProps> = ({ label }) => <div  className="nav-list-item">{label}</div>;