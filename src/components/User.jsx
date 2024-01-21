import React, { useState } from "react";

function User(props) {
    const [showDetails, setShowDetails] = useState(false);

    const handleDetailsToggle = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li className="user">
            <img src={props.user.picture.medium} alt={`Profile of ${props.user.name.first}`} />
            <h4 className="user-details">
                {props.user.name.first} {props.user.name.last}
            </h4>
            <button onClick={handleDetailsToggle}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <div className="user-info">
                    <p>Email: {props.user.email}</p>
                    <p>Birthday: {new Date(props.user.dob.date).toLocaleDateString()}</p>
                    <p>Address: {`${props.user.location.street.number} ${props.user.location.street.name}, ${props.user.location.city}, ${props.user.location.state}`}</p>
                    <p>Phone: {props.user.phone}</p>
                </div>
            )}
        </li>
    );
}

export default User;
