import { useState } from 'react';
import './App.css';
import AccountNumber from "./components/AccountNumber";

function App() {

  return (
    <content className="content">
        <div className="up-side">
            <div className="account-number-box">
                <p id="p-account-number">Total number of accounts</p>
                <p id="account-number"><AccountNumber/></p>
            </div>
            <div className="adress-search">
                <input type="text" id="adress-field" placeholder="Enter adress" name="adress-field-name" autoComplete="on"/>
                <input type="button" id="adress-button" value="Send"/>
            </div>
        </div>
        <div className="down-side">
            <table className="Token-section-output"> </table>
        </div>
        
    </content>
    
  );
}

export default App;