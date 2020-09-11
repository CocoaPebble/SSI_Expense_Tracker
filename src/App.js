import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

function App() {
    return (
        <div className="App">
            <div className="transactionApp">
                <Dashboard />
                <History />
                <AddTransaction />
            </div>
        </div>
    );
}

export default React.memo(App);
