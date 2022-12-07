import React from "react";

function ProjectSection(props) {
    return (
        <div className="card componentSection">
            <h1>Projects</h1>
            {props.projects ? (
                <>
                    {props.projects.map((project, index) => {
                        return (
                            <div className="card dataItem" key={index}>
                                <h4>
                                    {project.projectName} ({project.year})
                                </h4>
                                <ul>
                                    {project.description ? (
                                        <>
                                            {project.description.map(
                                                (descriptionPoint, index) => {
                                                    return (
                                                        <li>
                                                            {descriptionPoint}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </ul>
                                <h6>Tech Stacks:</h6>
                                <ul>
                                    {project.techStacks ? (
                                        <>
                                            {project.techStacks.map(
                                                (techStack, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {techStack}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </ul>
                                <h6>Project Links:</h6>
                                <ul>
                                    {project.links ? (
                                        <>
                                            {project.links.map(
                                                (links, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {
                                                                links.projectLinkName
                                                            }
                                                            :
                                                            {
                                                                links.projectLinkUrl
                                                            }
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </ul>
                                <h6>Project Components:</h6>
                                <ul>
                                    {project.links ? (
                                        <>
                                            {project.components.map(
                                                (component, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {
                                                                component.componentName
                                                            }
                                                            :
                                                            {
                                                                component.componentLink
                                                            }
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default ProjectSection;
