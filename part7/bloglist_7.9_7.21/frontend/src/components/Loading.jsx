import React from 'react';
import { BounceLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 flex justify-center items-center">
            <div className="text-center">
                <BounceLoader color="#36d7b7" />
            </div>
        </div>
    );
}
