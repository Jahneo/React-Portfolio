import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {

  return (
    <section className="my-5" >

  
      <h1 id="about">About Me?</h1>
      <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="cover" />
      <div className="my-2">
        </div>
        <p>
        Hi, I am Neil. I am a proud dad and a highly motivated lifelong learner. 
              
              Over the past 30 years, I have kept myself busy by aquiring a bachelors degree in the sciences and later 
               pursued a masters of computer science. 
               
             While studying I have maintained employment in many roles such as quality control, research assistant,
               shipping and logistics and more recently customer relations. 
 
               To keep things interesting, I decided to enrol in a coding boot camp. I believe this will serve as an
               excellent refresher course and I can't wait to learn more!
      </p>
    
    </section>
  )
}

export default About;