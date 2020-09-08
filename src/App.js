import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

function App() {
    return (
        <div className="App">
            <Dashboard />

            <History />

            <AddTransaction />
        </div>
    );
}

export default App;
