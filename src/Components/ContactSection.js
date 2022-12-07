import React from "react";

function ContactPage(props) {
    return (
        <div className="card componentSection">
            <h1>Contact me at:</h1>
            {props.contacts ? (
                <>
                    {props.contacts.map((contact,index) => {
                        return (
                            <div className="card dataItem" key = {index}>
                                {contact.contactName}: {contact.contact}
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

export default ContactPage;
