import React, { useEffect, useRef } from "react";
import "./About.css";

export const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const about = aboutRef.current;
            if (!about) return;
            const rect = about.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;

            if (inView) {
                about.classList.add("animate");
            } else {
                about.classList.remove("animate");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className="aboutSect" id="about">
            <div className="aboutHeader">
                <h1>About</h1>
            </div>
            <div className="aboutContainer" ref={aboutRef}>
                <img src={"/ThaiPicture.jpg"} alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id porta augue, eu pretium magna. Nulla facilisi. Nulla facilisi. Ut at ante nec arcu vestibulum viverra. Sed ut consectetur justo. Nullam porttitor fringilla ex nec blandit. Aliquam cursus lobortis ex sed tincidunt. Sed tempus euismod dui, vel auctor quam ornare a. Ut mi justo, convallis at nunc vitae, tempor mattis enim.
                    <br /><br />
                    Suspendisse tempor, elit quis pharetra porta, ligula nisi vestibulum nisl, sed vestibulum metus sapien sit amet odio. Mauris pulvinar hendrerit eros, quis rutrum neque cursus eget. Maecenas et facilisis erat. Fusce euismod eu metus a facilisis. Aliquam sit amet tortor ac justo consectetur ultricies at a lacus. Vivamus mollis ligula in vehicula rhoncus. Maecenas fermentum convallis neque vel consectetur. Quisque laoreet sodales velit, ac eleifend lectus. Suspendisse a ligula a lorem scelerisque hendrerit. Integer congue vitae diam eget luctus. In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    );
};
