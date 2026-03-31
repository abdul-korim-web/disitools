import React from 'react';
import Hero from '../Components/Hero';
import Calculate from '../Components/Calculate';
import Tools from '../Components/Tools';

const HomeLayout = () => {
    return (
        <div>
            <Hero/>
            <Calculate/>
            <Tools/>
        </div>
    );
}

export default HomeLayout;
