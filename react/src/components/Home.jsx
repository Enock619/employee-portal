
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../Home.css"; // Import the CSS file



const Home = () => {

    return (
        <section className="main-home">
            <Nav />
            
                {/* Page content */}
                <h1 className="title">Welcome to the Feline Employee Directory</h1>
                <div>
                <p>Welcome to PurrfectTemp - where feline finesse meets human needs! At PurrfectTemp, 
                    we pride ourselves on being the ultimate purr-viders of skilled cat-employees for 
                    all your odd job needs. From mouse-catching to keyboard snoozing, our paw-some 
                    team of whisker-twitching experts is here to ensure every task is completed with 
                    utmost precision and a sprinkle of cat-titude.</p>

                <p>Looking for a specific employee? Easily search our comprehensive directory by name, 
                    department, job title, or location to find the right purr-son for your needs. Our 
                    advanced search filters ensure you quickly locate the individual you're seeking 
                    within our organization. No more chasing shadows - our directory is the cat's meow!</p>

                <p>Considering hiring out your own feline friend? Our innovative Career Predictor Tool 
                    is here to assist you. Predict your potential salary based on your desired location 
                    and job role. Simply input your preferred job title and the location you're interested 
                    in, and let our tool provide you with valuable insights into salary expectations. 
                    With our tool, you'll be making informed career decisions faster than a cat can pounce 
                    on a laser pointer!</p>

                <p>Join us in embracing the power of purr-suasion and let our talented kitties make your 
                    life fur-tastic!</p>
             </div>
             <div className="img-container">
            <div className="paw"><img className="home-img"src="https://cdn.pixabay.com/photo/2021/01/05/22/01/paw-5892565_1280.png" alt="" /></div>
            <div className="paw"><img className="home-img"src="https://cdn.pixabay.com/photo/2021/01/05/22/01/paw-5892565_1280.png" alt="" /></div>
             </div>
           
            {/* Import Bootstrap JavaScript at the bottom */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </section>
    );
};

export default Home;
