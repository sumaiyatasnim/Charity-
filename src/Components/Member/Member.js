import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Member.css'
const Member = (props) => {
    // console.log(props);
    const { Name, Email, Country, img, Donation } = props.member;
    //icon
    const element = <FontAwesomeIcon className="icon" icon={faUserPlus} />

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
                <button onClick={() => props.handleAddMember(props.member)} className="add">{element}
                    Add</button>
            </div>
        </div>
    );
};

export default Member;