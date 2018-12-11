import * as React from "react";
import { NavListItem } from "./nav-list-item/nav-list-item";
export const NavList: React.FC = () => (
    <div className="nav-list">
        <NavListItem label="List" />
        <NavListItem label="Info" />
    </div>);