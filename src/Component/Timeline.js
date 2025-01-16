import React from 'react';
import './Timeline.css';


const Timeline = () => {
  return (
    <section id="cd-timeline" className="cd-container">


      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture"></div>
        <div className="cd-timeline-content">
          <h2>Cognizant</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
             Security Analyst
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Sep 2023 - Present
            </span>
          </div>
          <p>Contributed to the Identity Access and Governance team to ensure the protection of Identity and Access.</p>
          <ul className="content-skills">
            <li>OKTA</li>
            <li>IAM</li>
            <li>Active directory</li>
            <li>Cyber Ark</li>
            <li>ServiceNow</li>
          </ul>
        </div>
      </div>

      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture"></div>
        <div className="cd-timeline-content">
          <h2>Cognizant</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Cyber Security Intern
            </span>
            <span className="timeline-content-info-date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              May 2023 - Sep 2023
            </span>
          </div>
          <p> Gained Hands on experience in OKTA, which includes SSO,MFA configuration,Life Cycle Management and Etc</p>
          <ul className="content-skills">
            <li>OKTA</li>
            <li>Cyber Secueirty Fundamentals</li>
            <li>Networking</li>
          </ul>
        </div>
      </div>



      

      
    </section>
  );
};

export default Timeline;
