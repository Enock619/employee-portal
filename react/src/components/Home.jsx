import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Employee from "./Employee";
import { Carousel } from "react-bootstrap"; // Import Carousel from React Bootstrap

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

                {/* Carousel with featured employees */}
                <Carousel className="mt-5">
                    {featuredEmployees.map((employee) => (
                        <Carousel.Item key={employee._id}>
                            <Employee data={employee} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Home;
