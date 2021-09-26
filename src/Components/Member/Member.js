import React from 'react';
import './Member.css'
const Member = (props) => {
    const { Name, Email, Country, img, Donation } = props.member;
    return (
        <div className="member-container">
            <div>
                <img className="member-img" src={img} alt="" />
            </div>
            <div>
                <h3>Name: {Name}</h3>
                <p>Email: {Email}</p>
                <p>Country: {Country}</p>
                <p>Donation: ${Donation}</p>
            </div>
        </div>
    );
};

export default Member;