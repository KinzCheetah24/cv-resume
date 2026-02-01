import { useState } from "react";
import "../styles/EducationalInfo.css";

function EducationalInfo() {
  const [isEditing, setIsEditing] = useState(true);

  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "",
    title: "",
    date: "",
    graduationYear: "",
  });

    function handleChange(event) {
        const { name, value } = event.target;

        setEducationalInfo({ ...educationalInfo, [name]: value });
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
            <div className="educational-info/editing">
                <h2>Educational Information</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="schoolName"
                        placeholder="School Name"
                        value={educationalInfo.schoolName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title of Study"
                        value={educationalInfo.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date of Study"
                        value={educationalInfo.date}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="graduationYear"
                        placeholder="Graduation Year"
                        value={educationalInfo.graduationYear}
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="educational-info/displaying">
                <h2>Educational Information</h2>
                <p>School Name: {educationalInfo.schoolName}</p>
                <p>Title of Study: {educationalInfo.title}</p>
                <p>Date of Study: {educationalInfo.date}</p>
                <p>Graduation Year: {educationalInfo.graduationYear}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
        );
    }
}

export default EducationalInfo