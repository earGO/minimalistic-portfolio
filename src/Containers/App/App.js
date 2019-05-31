import React from 'react';
import './App.scss';
import CardPrimary from "../../Components/CardPrimary/CardPrimary";
import CardSecondary from "../../Components/CardSecondary/CardSecondary";
import WrapperSecondary from "../../Components/WrapperSecondary/WrapperSecondary";
import WrapperTertiary from "../../Components/WrapperTertiary/WrapperTertiary";


function App() {
  return (
    <div className="App">
        <CardPrimary/>
        <WrapperSecondary>
            <CardSecondary/>
            <CardSecondary/>
        </WrapperSecondary>
        <WrapperTertiary>
            <CardSecondary/>
            <CardSecondary/>
        </WrapperTertiary>
    </div>
  );
}

export default App;
