import { Suspense } from 'react';
import Loader from '../Loading';
import Applications from './Applications';
import Appshero from './Appshero';

const Apps = () => {
    return (
        <>
        <Appshero></Appshero>
        <Suspense fallback={<Loader></Loader>}>
            <Applications></Applications>
        </Suspense>
        </>
    );
};

export default Apps;