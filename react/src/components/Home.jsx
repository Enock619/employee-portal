import React from "react";
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
                    <p className="card-text">Looking for a specific employee? Easily search our comprehensive directory by name, department, job title, or location to find the right purr-son for your needs. Our advanced search filters ensure you quickly locate the individual you're seeking within our organization. No more chasing shadows - our directory is the cat's meow!</p>
                    <p className="card-text">Considering hiring out your own feline friend? Our innovative Career Predictor Tool is here to assist you. Predict your potential salary based on your desired location and job role. Simply input your preferred job title and the location you're interested in, and let our tool provide you with valuable insights into salary expectations. With our tool, you'll be making informed career decisions faster than a cat can pounce on a laser pointer!</p>
                    <p className="card-text">Join us in embracing the power of purr-suasion and let our talented kitties make your life fur-tastic!</p>
                </div>
            </div>
            {/* Career prediction text box */}
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="jobRole">Job Role</label>
                                <input id="jobRole" type="text" className="form-control" placeholder="Enter Job Role" disabled />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="location">Location</label>
                                <input id="location" type="text" className="form-control" placeholder="Enter Location" disabled />
                            </div>
                            <div className="form-group mb-3 d-flex justify-content-center">
                                <button className="btn btn-primary mt-3" disabled>Predict Salary</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className="col-md-3 d-flex align-items-stretch">
                    <img src="https://via.placeholder.com/500" alt="Career Image" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Home;
