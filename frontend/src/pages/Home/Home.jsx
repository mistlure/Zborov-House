import { useState } from 'react';

import Banner from './components/Banner';
import Quote from './components/Quote';
import LatestPosts from './components/LatestPosts';
import Partners from './components/Partners';
import GoalsModal from './modals/GoalsModal';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Banner />
            <Quote onOpenModal={() => setIsModalOpen(true)} />
            <LatestPosts />
            <Partners />

            <GoalsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}