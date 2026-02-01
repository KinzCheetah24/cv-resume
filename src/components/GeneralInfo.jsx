import { useState } from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setGeneralInfo({...generalInfo, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    if (isEditing) {
        return (
            <div className="general-info/editing">
                <h2>General Information</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={generalInfo.firstName} 
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={generalInfo.lastName} 
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={generalInfo.email} 
                        onChange={handleChange}
                    />
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="Phone Number" 
                        value={generalInfo.phoneNumber} 
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="general-info/display">
                <h2>General Information</h2>
                <p><strong>First Name:</strong> {generalInfo.firstName}</p>
                <p><strong>Last Name:</strong> {generalInfo.lastName}</p>
                <p><strong>Email:</strong> {generalInfo.email}</p>
                <p><strong>Phone Number:</strong> {generalInfo.phoneNumber}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
        );
    }
}

export default GeneralInfo;