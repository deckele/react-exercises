import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { topics } from "./constants/data";

export const App: React.FC = () => {
    return (
      <div className="App">
        <BrowserRouter>
          Dynamic Routing!
        </BrowserRouter>
      </div>
    );
}
