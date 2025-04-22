import React from "react";
import projects from "../data/projects.json";
import "./Projects.css";

export const Projects = () => {
    return (
        <section id="projects">
            <div>
                <div className="projHeader">
                    <h1>Projects</h1>
                </div>
                <div>
                    <div className="projContainer">{
                        projects.map((project, id) => {
                            return (
                                <div key={id}>
                                    <a href={project.sourceURL} target="_blank" rel="noopener noreferrer" className="card">
                                        <img src={project.imgSrc} alt={project.title} />
                                        <div className="card__content">
                                            <p className="card__title">{project.title}</p>
                                            <p className="card__description">{project.description}</p>
                                            <ul>
                                                {project.skills.map((skill, id) => (
                                                    <li key={id}>{skill}</li>
                                            ))}</ul>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    );
}