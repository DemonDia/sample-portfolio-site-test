import React from "react";

function ExperienceSection(props) {
    return (
        <div className="card componentSection">
            <h1>Experience</h1>
            {props.experiences ? (
                <>
                    {props.experiences.map((experience, index) => {
                        return (
                            <div className="card dataItem" key={index}>
                                <h5>
                                    {experience.companyName} -
                                    <i>
                                        {experience.roleName} (
                                        {experience.starting}-
                                        {experience.ending})
                                    </i>
                                </h5>
                                <ul>
                                    {experience.details ? (
                                        <>
                                            {experience.details.map(
                                                (detail, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {detail}
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

export default ExperienceSection;
