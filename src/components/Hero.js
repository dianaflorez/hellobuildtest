import React from 'react';
import Github from './Github';

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h4>Hello Build Test</h4>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Github/>            
        </section>
    )
}

export default Hero;