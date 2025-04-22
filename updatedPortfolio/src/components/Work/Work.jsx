import React, { useEffect, useRef } from "react";
import workExp from "../data/work.json";
import "./Work.css";

export const Work = () => {
    const expRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        target.classList.add("slide-in-left");
                    } else {
                        target.classList.remove("slide-in-left"); // reset
                    }
                });
            },
            { threshold: 0.2 }
        );

        expRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            expRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="work">
            <div className="workHeader">
                <h1>Work Experience</h1>
            </div>
            <div>
                <div className="expContainer">
                    {workExp.map((work, id) => (
                        <div key={id}>
                            <div
                                className="notification"
                                ref={(el) => (expRefs.current[id] = el)}
                                style={{ animationDelay: `${id * 0.15}s` }}
                            >
                                <div className="notiglow"></div>
                                <div className="notiborderglow"></div>
                                <div className="notititle">
                                    <h2 className="jobTitle">{work.jobTitle}</h2>
                                    <h3>{work.company}</h3>
                                    <p>{work.dateStart} - {work.dateEnd}</p>
                                </div>
                                <div className="notibody">
                                    <ul className="jobDuties">
                                        {work.duties.map((duty, i) => (
                                            <li key={i}>{duty}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
