import React, { useEffect, useRef } from "react";
import skills from "../data/skills.json";
import "./Skills.css";

export const Skills = () => {
    const skillRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        target.classList.add("drop-in");
                    } else {
                        target.classList.remove("drop-in"); // reset
                    }
                });
            },
            { threshold: 0.2 }
        );

        skillRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            skillRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className="skillsSect" id="skills">
            <div>
                <h1>Skills</h1>
                <div>
                    <div className="skillContainer">
                        {skills.map((skill, id) => (
                            <div
                                key={id}
                                className="user-profile"
                                tabIndex="0"
                                role="button"
                                aria-label={`Skill: ${skill.title}`}
                                ref={(el) => (skillRefs.current[id] = el)}
                                style={{ animationDelay: `${id * 0.1}s` }}
                            >
                                <div className="user-profile-inner skillContent">
                                    <img src={skill.imgSource} alt={skill.title} />
                                    <p>{skill.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
