import { useState } from "react";
import "../styles/PracticalInfo.css";

function PracticalInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [practicalInfo, setPracticalInfo] = useState({
        companyName: "",
        positionTitle: "",
        mainResponsabilities: "",
        dateOfWork: "",
        untilDate: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        
        setPracticalInfo({ ...practicalInfo, [name]: value });
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
            <div className="practical-info/editing">
                <h2>Practical Information</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={practicalInfo.companyName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="positionTitle"
                        placeholder="Position Title"
                        value={practicalInfo.positionTitle}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="mainResponsabilities"
                        placeholder="Main Responsabilities"
                        value={practicalInfo.mainResponsabilities}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="dateOfWork"
                        placeholder="Date of Work"
                        value={practicalInfo.dateOfWork}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="untilDate"
                        placeholder="Until Date"
                        value={practicalInfo.untilDate}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="practical-info/displaying">
                <h2>Practical Information</h2>
                <p>Company Name: {practicalInfo.companyName}</p>
                <p>Position Title: {practicalInfo.positionTitle}</p>
                <p>Main Responsabilities: {practicalInfo.mainResponsabilities}</p>
                <p>Date of Work: {practicalInfo.dateOfWork}</p>
                <p>Until Date: {practicalInfo.untilDate}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
        );
    }
}

export default PracticalInfo;