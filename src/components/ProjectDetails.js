import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProjectDetails.css';
import CalendarView from './CalendarView';


function ProjectDetails() {

    const location = useLocation(); // Get state from location
    const { image, title, cost, unit } = location.state || {};
    const [selectedBatch, setSelectedBatch] = useState(null);
    const schedule = [
        {
          day: "Day 1",
          activities: [
            "Report at Transit Camp Youth Hostel, Miramar, Panaji, Goa – Before 14:00 hrs.",
            "Transfer to Base Camp by Bus at 15:00 hrs.",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Trek to Hivre Khurd.",
            "Trek from Moshacho Vazar to Hivre Vazar (2 Waterfalls) - 10 km.",
            "After lunch, trek to Base Camp - 3 km.",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Trek to Pali Waterfall.",
            "After lunch, proceed to Base Camp - 10 km.",
          ],
        },
        {
          day: "Day 4",
          activities: [
            "Trek to Shelop Budruk Village - 8 km.",
            "Trek to Sulsulo, Shelpecho Vazar (4 Waterfalls).",
            "Return to Base Camp - 8 km.",
          ],
        },
        {
          day: "Day 5",
          activities: [
            "Trek to Charavane - 8 km.",
            "Return to Base Camp.",
            "Valedictory Function at Night.",
          ],
        },
        {
          day: "Day 6",
          activities: [
            "Check out after breakfast.",
            "Transfer to Panaji by bus at 9 AM.",
          ],
        },
      ];
    
      // Scroll to top when component mounts
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleBatchSelect = (batch) => {
        setSelectedBatch(batch);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    // Handle accordion toggle
    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the accordion if it's already open
        } else {
            setActiveIndex(index); // Open the selected accordion
        }
    };

    return (
        <div className="project-details">
            <div className="header-image">
                <img src={image} alt="Trek" className="trek-header-img"/>
                <h1>{title}</h1>
                <h3>{unit}</h3>
            </div>

            <div className="info-section">
                <div className="info-item">
                    <img src="../img/location.png" alt="Location" className="info-icon"/>
                    <p>Location: Thane School Ground, Dongurvada, Goa</p>
                </div>
                <div className="info-item">
                    <img src="../img/hourglass.png" alt="Duration" className="info-icon"/>
                    <p>Duration: 5 days</p>
                </div>
                <div className="info-item">
                    <img src="../img/speedometer.png" alt="Reporting" className="info-icon"/>
                    <p>Difficulty Level: Intermediate</p>
                </div>
                <div className="info-item">
                    <img src="../img/calendar.png" alt="Date" className="info-icon"/>
                    <p>Date: 1st - 30th July 2025</p>
                </div>
                <div className="info-item">
                    <img src="../img/trekking.png" alt="Trek Type" className="info-icon"/>
                    <p>Trek Type: Family/Group</p>
                </div>
            </div>

            <div className="details-section">
            <div className="price-card">
  <div className="price-details">
  <CalendarView 
  cost={cost} 
  selectedBatch={selectedBatch} 
  handleBatchSelect={handleBatchSelect} 
/>

  </div>
</div>


            <div className="trek-details">
                    <h2>About the Monsoon Trek</h2>
                    <p style={{ 
    textAlign: "justify", 
    paddingLeft: "20px", 
    lineHeight: "1.6"
}}>
    All these waterfalls are inside the forested Mhadei wildlife sanctuary of Sattari in North Goa. Goa‘s Western Ghats are the repository of the biological wealth. The rich biodiversity of the area provides exciting and enthralling experience to all the adventure and nature lovers. The Moshacho Ozar is in Hivre of Thane Dongurli village Panchayat. During monsoon, one can get a panoramic view of the Mhadei Wildlife Sanctuary.
    <br /><br />
    The two waterfalls in Pali provide a breathtaking view of the lush green forest along with the gushing flow of the river. Shelop - Budruk is blessed by four waterfalls which exhibit the identity through their flow. However, the last one offers a marvelous sight of the waterfall.
    <br /><br />
    Though waterfalls from Charavane are small, they provide the most soothing experience of the lush green facet of Goa.
</p>


                    <h2>Who can Participants?</h2>
                    <p style={{ textAlign: "justify", 
    paddingLeft: "20px", 
    lineHeight: "1.6" }}>Any member of the Association who is physically fit can join the programme. Medical Certificate is a must.
Participants below the age of 10 years will have to submit Indemnity Bond signed by the parents.    <br /><br />
Similarly, participants above the age of 65 years will also have to sign and submit the Indemnity Bond, at the base camp.
                    </p>

                  </div>
            </div>
         <div>
         <h2 style={{ textAlign: "left" }}>How to reach the base camp?</h2>
                    <p style={{ textAlign: "justify", 
    paddingLeft: "20px", 
    lineHeight: "1.6" }}>The base camp is located at THANE – DONGURLI PANCHAYAT BUILDING,   SATERI WADA, DONGURLI, GOA 403505. The nearest railway stations are Thivim ,Karmali  and Margao. State bus service is available. Direct bus service to Panaji is also available from Mumbai, Pune, Bangalore& Mangalore. Direct trains are available from Delhi, Mumbai, Ahmedabad and major cities of India. You can locate this place by typing Thane School ground, Dongurli, Goa in Google maps or click the following link
                         <a href = "https://goo.gl/maps/nSSrMPS5Cc42"> Location </a></p>

                    <p style={{ textAlign: "justify", 
    paddingLeft: "20px", 
    lineHeight: "1.6" }}><b> Special Bus has been arranged to reach Base Camp from Panaji Transit camp situated at Youth Hostel, Miramar,<a href ="https://maps.app.goo.gl/qnJq6ZrBGm7yiuL28"> Location </a> Panaji, Goa at 15.00 hrs. Should you miss this bus , you can reach the base camp by taking bus to Valpoi from Panaji and then onwards to Thane Dongurli Stadium.</b></p>

            </div>

            <div>
            <h2 style={{ textAlign: "left" }}>How to join?</h2>

            <p style={{ textAlign: "justify", 
    paddingLeft: "20px", 
    lineHeight: "1.6" }}> 
            YHAI Members desirous of joining the programme may register online or apply on a prescribed Registration :- <a href="https://yhaindia.org/download/Trekking_Registration_Form_2_min.pdf">Click on  Trekking Registration Form Click For Download</a>  and sent it to Goa State Branch on the below mentioned address. Photocopies of the forms are acceptable. The minimum age for participation is 10. Form should be sent along with draft/ at par payable cheque in favour of - "National Trekking Expedition – Goa" and send it to - "YHAI Goa State Branch,  C/o Joshi Wines, Opp Old Secretariat, Panaji, Goa 403001".
            </p>
            </div>
                      <div className="schedule-container">
      <h2 className="schedule-title">Program Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>
                <ul>
                  {item.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
           

            <div className="faq-section">
                <h2>FAQs</h2>
                <div className="accordion">
                    {/* Accordion Item 1 */}
                    <div className="accordion-item">
                        <button
                            className={`accordion-toggle ${activeIndex === 0 ? 'active' : ''}`}
                            onClick={() => toggleAccordion(0)}
                        >
                            What paticipants should bring along?
                        </button>
                        <div className="accordion-content" style={{ maxHeight: activeIndex === 0 ? '300px' : '0' }}>
                            <p style={{ textAlign: "justify" }}>T-shirts, Half pants, Bedsheet, Monsoon shoes and Bathroom slippers, torch, water bottle, lunch box, soap, towel, medicines (which you normally use at home) Raincoat ( if one wishes to use it) and most IMPORTANTLY a small shoulder bag only for carrying lunch box and water bottle ( Participants will not carry anything other than lunch box and water bottle during treks). Plate, Coffee mug, spoon and bowl will be provided at camp.</p>
                        </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="accordion-item">
                        <button
                            className={`accordion-toggle ${activeIndex === 1 ? 'active' : ''}`}
                            onClick={() => toggleAccordion(1)}
                        >
                            What about Safety and Security?
                        </button>
                        <div className="accordion-content" style={{ maxHeight: activeIndex === 1 ? '300px' : '0' }}>
                            <p style={{ textAlign: "justify" }}>Extensive and painstaking preparation has gone into the planning of trek routes for your safety. Our field staff and experienced camp leaders have been visiting the area to check all details. The Youth Hostels Association of India cannot be held responsible for any accidents, illness and any such unforeseen eventualities. Deviation from the set route of the program is not permitted. If the participant desires to join any other activity, they may do so at their own responsibility and risk only after finishing the trek and checking out. YHAI group insurance cover is for accidental death or permanent disability only. You are advised to take insurance cover for your journey and other related matters..</p>
                        </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="accordion-item">
                        <button
                            className={`accordion-toggle ${activeIndex === 2 ? 'active' : ''}`}
                            onClick={() => toggleAccordion(2)}
                        >
                           What if I want to Cancel the booking?
                        </button>
                        <div className="accordion-content" style={{ maxHeight: activeIndex === 2 ? '300px' : '0' }}>
                            <p style={{ textAlign: "justify" }}>1)  Participants booked online will do online cancellation minimum 10 days prior to reporting date
<br></br>
2) Participants booked offline will inform their cancellation by email to goastateyhai@gmail.com minimum 10 days prior to reporting date.

Only cancellation done as per above method will be eligible for credit shell. The below Cancellation Policy will however not be applicable if the request reaches short of 10 days prior to reporting date and shall not be eligible for credit shell.
<br></br>
Cancellation Policy: 
<br></br>
1) In case you are unable to join the programme due to any reason, you will get a 100% Credit Shell of the participation fees which will be valid till December 2025. No refund will be applicable for any cancellation of seat.
<br></br>
2) If the next programme opted by you is cheaper, you may use the balance amount in any of the Trek till Dec 2025.
<br></br>
3) If the next opted programme is costlier, the trekker has to pay the differential amount.
<br></br>
4) Program opted using the Credit Shell cannot be cancelled again in any condition.
<br></br>
5) You may transfer your seat to your family members and friends also. The seats thus transferred cannot be retransferred or cancelled..</p>
                        </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="accordion-item">
                        <button
                            className={`accordion-toggle ${activeIndex === 3 ? 'active' : ''}`}
                            onClick={() => toggleAccordion(3)}
                        >
                            What about our Accomodation and Food?
                        </button>
                        <div className="accordion-content" style={{ maxHeight: activeIndex === 3 ? '300px' : '0' }}>
                            <p>Accommodation will be at Panchayat Building Hall and we will provide the participants Home cook Goan food Delicacies,  Veg & Non Veg.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
