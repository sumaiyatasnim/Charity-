import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './AddMember.css'
const AddMember = (props) => {
    const { addMember } = props;
    //icon
    const element = <FontAwesomeIcon className="icon2" icon={faUserCheck} />
    let total = 0;
    for (const donation of addMember) {
        total = total + donation.Donation
    }
    // let names = '';
    // for (const name of names) {
    //     names = names + name.Name
    // }
    return (
        <div>
            <div className="addMember-conatainer">
                <div className="addMember-count">
                    <h3 id="addMember-title">Add Members To Create a Project in "Y" location</h3>
                    <h3>{element} : {props.addMember.length}</h3>
                    <br />
                    <p>Total: {total}</p>
                </div>
                <div className="names">
                    {addMember.map(addmembr => <li key={addmembr.Id}> {addmembr.Name}</li>)}
                </div>
            </div>
        </div>
    );
};

export default AddMember;