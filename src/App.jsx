import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://json.link/Gc2UUPz0w1.json')
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        setError('Error fetching data');
        console.error('Error fetching data: ', err);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="app-container" className="white-black-theme">  
      
      {/* <h1>Axios Tutorial</h1> */}
      {userData && (
        <>
          <h2>{userData.first_name} {userData.last_name}</h2>
          {/* <h2>{userData.last_name}</h2> */}
          <p>Email: {userData.email}</p>
          <p>Mobile Number: {userData.mobile_number}</p>
          <p>Country: {userData.country}</p>
          <p>State: {userData.state}</p>
          <p>City: {userData.city}</p>
          <p>Zip Code: {userData.zip_code}</p>
          <p>Address Line 1: {userData.address_line_1}</p>
          <p>LinkedIn URL: {userData.linkedin_url}</p>
          <p>Years of Experience: {userData.years_of_experience}</p>
          <p>About Me: {userData.about_me}</p>
          <h3>Skills:</h3>
          <ul>
            {userData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3>Education:</h3>
          <ul>
            {userData.education.map((edu, index) => (
              <li key={index}>
                <p>University Name: {edu.university_name}</p>
                <p>Degree: {edu.degree}</p>
                <p>Course: {edu.course}</p>
                <p>Start Month/Year: {edu.start_month_year}</p>
                <p>End Month/Year: {edu.end_month_year}</p>
                <p>Country: {edu.country}</p>
                <p>State: {edu.state}</p>
                <p>City: {edu.city}</p>
                <p>Description: {edu.description}</p>
              </li>
            ))}
          </ul>
          <h3>Experience:</h3>
          <ul>
            {userData.experience.map((exp, index) => (
              <li key={index}>
                <p>Company Name: {exp.company_name}</p>
                <p>Designation: {exp.designation}</p>
                <p>Start Month/Year: {exp.start_month_year}</p>
                <p>End Month/Year: {exp.end_month_year}</p>
                <p>Description: {exp.description}</p>
              </li>
            ))}
          </ul>
          <h3>Projects:</h3>
          <ul>
            {userData.project.map((proj, index) => (
              <li key={index}>
                <p>Project Name: {proj.project_name}</p>
                <p>Designation: {proj.designation}</p>
                <p>Start Month/Year: {proj.start_month_year}</p>
                <p>End Month/Year: {proj.end_month_year}</p>
                <p>Description: {proj.description}</p>
              </li>
            ))}
          </ul>
          <h3>Certificates:</h3>
          <ul>
            {userData.certificate.map((cert, index) => (
              <li key={index}>
                <p>Name: {cert.name}</p>
                <p>Provider: {cert.provider}</p>
                <p>Date: {cert.date}</p>
                <p>Certificate URL: {cert.certificate_url}</p>
                <p>Description: {cert.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
