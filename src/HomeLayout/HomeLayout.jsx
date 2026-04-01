import React from 'react';
import Hero from '../Components/Hero';
import Calculate from '../Components/Calculate';
import Tools from '../Components/Tools';
import Guite from '../Components/Guite';
import Priceing from './../Components/Priceing';
import Workflow from '../Components/Workflow';

const HomeLayout = () => {
    return (
        <div>
            <Hero/>
            <Calculate/>
            <Tools/>
            <Guite/>
            <Priceing/>
            <Workflow/>
        </div>
    );
}

export default HomeLayout;
