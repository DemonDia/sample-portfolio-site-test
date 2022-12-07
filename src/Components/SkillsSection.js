import React from "react";

function SkillsPage(props) {
    return (
        <div className="card componentSection">
            <h1>Skills</h1>
            {props.skills ? (
                <>
                    {props.skills.map((skill, index) => {
                        return (
                            <div className="card dataItem" key={index}>
                                {skill.skillName} ({skill.year})
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

export default SkillsPage;
