import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Nav from "./Nav";
import Employee from "./Employee";
import "../Home.css"; // Import custom CSS file

const Home = () => {
    return (
        <div className="container">
            <Nav />
            <h1 className="text-center">Welcome to the Feline Employee Directory</h1>
            {/* Funny intro card */}
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Welcome to PurrfectTemp!</h5>
                    <p className="card-text">Welcome to PurrfectTemp - where feline finesse meets human needs! At PurrfectTemp, we pride ourselves on being the ultimate purr-viders of skilled cat-employees for all your odd job needs. From mouse-catching to keyboard snoozing, our paw-some team of whisker-twitching experts is here to ensure every task is completed with utmost precision and a sprinkle of cat-titude.</p>
                    <p className="card-text">Join us in embracing the power of purr-suasion and let our talented kitties make your life fur-tastic!</p>
                </div>
            </div>
            {/* Career prediction text box */}
            <div className="row">
                <div className="col-md-8 img-column"> {/* Changed from col-md-9 to col-md-8 and added img-column class */}
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Looking for a specific employee? Easily search our comprehensive directory by name, department, job title, or location to find the right purr-son for your needs. Our advanced search filters ensure you quickly locate the individual you're seeking within our organization. No more chasing shadows - our directory is the cat's meow!</p>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className="col-md-4 d-flex align-items-stretch img-column"> {/* Changed from col-md-3 to col-md-4 and added img-column class */}
                    <div className="img-container"></div>
                </div>
            </div>
            {/* Second set of containers */}
            <div className="row mt-3">
                {/* Image */}
                <div className="col-md-4 d-flex align-items-stretch img-column"> {/* Changed from col-md-3 to col-md-4 and added img-column class */}
                    <div className="img-container-2"></div>
                </div>
                <div className="col-md-8 img-column"> {/* Changed from col-md-9 to col-md-8 and added img-column class */}
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"><p className="card-text">Considering hiring out your own feline friend? Our innovative Career Predictor Tool is here to assist you. Predict your potential salary based on your desired location and job role. Simply input your preferred job title and the location you're interested in, and let our tool provide you with valuable insights into salary expectations. With our tool, you'll be making informed career decisions faster than a cat can pounce on a laser pointer!</p></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 style={{ color: "white" }}>Contact Us</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: "2rem", color: "white" }} /></a></li>
                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2rem", color: "white" }} /></a></li>
                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: "2rem", color: "white" }} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
