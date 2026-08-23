import { useState } from 'react';
import './App.css';

import Header from './components/layout/Header';
import SideMenu from './components/layout/SideMenu';
import Footer from './components/layout/Footer';
import Banner from './pages/Home/components/Banner';
import Quote from './pages/Home/components/Quote';
import LatestPosts from './pages/Home/components/LatestPosts';
import Partners from './pages/Home/components/Partners';

import GoalsModal from './pages/Home/modals/GoalsModal';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header onOpenMenu={() => setIsMenuOpen(true)} />

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <div className="app-container">
                <Banner />
                <Quote onOpenModal={() => setIsModalOpen(true)} />
                <LatestPosts />
                <Partners />
            </div>

            <Footer />

            <GoalsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default App;