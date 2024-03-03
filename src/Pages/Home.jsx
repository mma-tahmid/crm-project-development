import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                <Link to={"/sr-page-part-1"}> Sr Page Part 1 </Link>
            </div>

            <div>
                <Link to={"/sr-page-part1-myself"}> Sr Page Part1 Myself </Link>
            </div>

            <div>
                <Link to={"/sr-page-part-2"}> Sr Page Part 2 </Link>
            </div>

            <div>
                <Link to={"/sample"}> Sample </Link>
            </div>
        </>
    );
};

export default Home;