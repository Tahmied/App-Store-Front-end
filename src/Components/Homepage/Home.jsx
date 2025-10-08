import { Suspense } from 'react';
import Hero from './Hero';
import States from './States';
import Trending from './Trending';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <States></States>
            <Suspense fallback={<h1>Loading....</h1>}>
                <Trending></Trending>
            </Suspense>

        </>
    );
};

export default Home;