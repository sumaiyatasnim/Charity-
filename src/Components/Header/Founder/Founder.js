import React, { useEffect, useState } from 'react';
import Member from '../../Member/Member';
import './Founder.css'
const Founder = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className="founder-container">
            <div className="donor">
                <h1>Members: {members.length}</h1>
                <div className="members">
                    {
                        members.map(member => <Member
                            key={member.Id}
                            member={member}>

                        </Member>)
                    }
                </div>
            </div>
            <div className="count">
                <h1>Count</h1>
            </div>
        </div>
    );
};

export default Founder;