import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Employee from "./Employee";

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [featuredEmployees, setFeaturedEmployees] = useState([]);

    useEffect(() => {
        // Fetch employees from the backend when the component mounts
        fetchEmployees();
    }, []);

    // Fetch employees from the backend
    const fetchEmployees = () => {
        fetch("/api/employees")
            .then((response) => response.json())
            .then((data) => {
                setEmployees(data);
                // Select 3 random employees to be featured
                const randomEmployees = getRandomEmployees(data, 3);
                setFeaturedEmployees(randomEmployees);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
            });
    };

    // Function to select random employees
    const getRandomEmployees = (employees, count) => {
        const shuffledEmployees = employees.sort(() => 0.5 - Math.random());
        return shuffledEmployees.slice(0, count);
    };

    return (
        <>
            <Nav />
            <div className="container">
                {/* Carousel */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Replace these placeholders with actual images and captions */}
                        <div className="carousel-item active">
                            <img src="https://placekitten.com/800/400" className="d-block w-100" alt="Cat 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://placekitten.com/800/401" className="d-block w-100" alt="Cat 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        {/* Add more carousel items as needed */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Page content */}
                <h1>Welcome to the Feline Employee Directory</h1>
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
            </div>
            {/* Import Bootstrap JavaScript at the bottom */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </>
    );
};

export default Home;
