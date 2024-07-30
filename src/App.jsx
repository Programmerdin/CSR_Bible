import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Bank_draft_canadian from './pages/bank_draft_canadian/bank_draft_canadian';
import Bank_draft_foreign_currency from './pages/bank_draft_foreign_currency/bank_draft_foreign_currency';
import NavigateToPageButton from './components/NavigateToPageButton';
import Procedure from './components/Procedure';

function App() {
    return (
        <Router>
            <div>
                <NavigateToPageButton targetPath="/" buttonText="Home" />
                <NavigateToPageButton targetPath="/bank_draft_canadian" buttonText={"Bank Draft Canadian"} />
                <NavigateToPageButton targetPath="/bank_draft_foreign_currency" buttonText={"Bank Draft Foreign Currency"} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bank_draft_canadian" element={<Bank_draft_canadian />} />
                    <Route path="/bank_draft_foreign_currency" element={<Bank_draft_foreign_currency />} />
                </Routes>
                <Procedure procedureNumber={"0001"}/>
            </div>
        </Router>
    );
}

export default App;