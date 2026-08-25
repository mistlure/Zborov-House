import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import SideMenu from './components/layout/SideMenu';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <Header onOpenMenu={() => setIsMenuOpen(true)} />

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>
    );
}

export default App;