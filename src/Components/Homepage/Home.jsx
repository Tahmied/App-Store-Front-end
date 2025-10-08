import { Suspense } from 'react';
import Loader from '../Loading';
import Hero from './Hero';
import States from './States';
import Trending from './Trending';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <States></States>
            <Suspense fallback={<Loader></Loader>}>
                <Trending></Trending>
            </Suspense>
        </>
    );
};

export default Home;