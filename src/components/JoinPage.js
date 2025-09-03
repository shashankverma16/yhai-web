import React from 'react';
import './JoinPage.css';

const JoinPage = () => {
    return (
        <div className="join-page-container">
            <div className="card-container">
                <div className="card">
                    <h2>Camp Leader</h2>
                    <p>Eligibility & Application Steps</p>
                    <button className="apply-btn">Apply for Camp Leader</button>
                    <ul className="eligibility-list">
                        <li>Must be 21 years or older</li>
                        <li>Previous experience in leadership</li>
                        <li>Strong communication skills</li>
                        <li>Ability to work in challenging conditions</li>
                        <li>Basic first aid knowledge</li>
                        <li>Physically fit for outdoor activities</li>
                        <li>Availability for the entire duration</li>
                        <li>Recommendation from a credible authority</li>
                        <li>Fluency in the local language is a plus</li>
                        <li>Submit the application by the deadline</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Medical Officer</h2>
                    <p>Eligibility & Application Steps</p>
                    <button className="apply-btn">Apply as Medical Officer</button>
                    <ul className="eligibility-list">
                        <li>Medical degree (MBBS or equivalent)</li>
                        <li>Registered medical practitioner</li>
                        <li>Experience in emergency care</li>
                        <li>Ability to work in remote locations</li>
                        <li>Basic knowledge of outdoor medicine</li>
                        <li>Ability to work under pressure</li>
                        <li>Strong decision-making skills</li>
                        <li>Willingness to travel</li>
                        <li>Availability during camp period</li>
                        <li>Submit the application before the deadline</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;
