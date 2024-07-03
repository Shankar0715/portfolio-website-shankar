import "./about.scss";

const About = () => {
    return (
        <div className="root">
            <div className="about">
                <div className="text">
                    <h1>ABOUT ME</h1>
                    <h2>
                        Transforming<span>Visions</span>
                    </h2>
                    <p className="para">
                        I am a passionate data analyst with a knack for extracting
                        meaningful insights from complex datasets. With hands-on
                        experience from an on-site internship, I have honed my skills
                        in data visualization tools like Tableau and Power BI, statistical
                        analysis using Python and R, and database management with SQL, MySQL,
                        and PostgreSQL. Additionally, I have experience in machine learning
                        and deep learning using frameworks like TensorFlow. My goal is to
                        leverage my expertise to create data-driven solutions that drive business
                        growth and deliver exceptional insights.
                    </p>
                </div>
                <div>
                    <img src="/Aboutme.jpg" alt="About Me" className="pic" />
                </div>
            </div>
        </div>
    );
};

export default About;
