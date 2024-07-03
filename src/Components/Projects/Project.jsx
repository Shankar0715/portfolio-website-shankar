import React, { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Netflix Data Analysis with Tableau",
        img: "Netflix.png",
        desc: "In this project, I conducted a comprehensive analysis of Netflix's dataset using Tableau. The objective was to uncover insights and trends within the data. I developed an interactive dashboard that visually represents key metrics such as the distribution of content by genre, release year, and user ratings. This dashboard enables users to explore the data dynamically, making it easier to identify patterns and make data-driven decisions."
    },
    {
        id: 2,
        title: "Gym Tracking System",
        img: "gym.jpg",
        desc: "In this project, I developed a Gym Tracking System designed to monitor and record various user exercises, such as push-ups, squats, and other workouts. Utilizing advanced tracking algorithms and user-friendly interfaces, the system provides real-time feedback on exercise performance and progress. This project showcases my skills in software development, data tracking, and user interface design, emphasizing my ability to create practical and efficient solutions for fitness tracking."
    },
    {
        id: 3,
        title: "Weather prediction",
        img: "weather.png",
        desc: "In this project, I developed a weather prediction model leveraging historical daily weather data from Bangalore. The model utilizes machine learning algorithms to forecast future weather patterns with increased accuracy. By analyzing extensive historical data, the model can predict various weather parameters, such as temperature, humidity, and precipitation. This project demonstrates my expertise in data science, machine learning, and time series analysis, highlighting my ability to apply these skills to real-world problems for accurate weather forecasting."
    },
    {
        id: 4,
        title: "Sign Language Translation to Audio Conversion",
        img: "sign-language.webp",
        desc: "In this project, I created a system that translates sign language into audio. Using OpenCV, the system recognizes hand signs and converts them into corresponding text. This text is then transformed into audible speech, facilitating communication for individuals who use sign language. The project integrates computer vision and natural language processing techniques to bridge the gap between sign language users and the broader community"
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref ,});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imagecontainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div  className="textcontainer" style={{ y }} >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Project = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className='project' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Project;
