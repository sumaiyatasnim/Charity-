import React, { useEffect, useState } from 'react';
import AddMember from '../../AddMember/AddMember';
import Member from '../../Member/Member';
import './Founder.css'
const Founder = () => {
    const [members, setMembers] = useState([]);
    const [addMember, setAddMember] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    const handleAddMember = (member) => {
        const newMember = [...addMember, member]
        setAddMember(newMember);
    }
    return (
        <div className="founder-container">
            <div className="donor">
                <h1 className="total-members">Total Members: {members.length}</h1>
                <div className="members">
                    {
                        members.map(member => <Member
                            key={member.Id}
                            member={member}
                            handleAddMember={handleAddMember}
                        >

                        </Member>)
                    }
                </div>
            </div>
            <div className="addMember-container">
                <AddMember
                    addMember={addMember}
                ></AddMember>

            </div>
        </div>
    );
};

export default Founder;