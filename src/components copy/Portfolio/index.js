import React from 'react';

function Portfolio () {
    return (

    <section class="page-section" id="work">
      <h2>My Work</h2>
      <div class="grid-container">
    <p>!--Horiseon Solution Refactor--</p>
        <a href="https://Jahneo.github.io/Neil-Horiseon-Refactor-repo/" class="grid-item refactor">
          <div>
            <h3>Horiseon Solutions Refactor</h3>
            <span>CSS & HTML</span>
          </div>
        </a>
        <p>!--  Interactive Front-End Project Projects done with HTML, and CSS --</p>
        <a href="https://team4project1.github.io/Bored/" class="grid-item github">
          <div>
            <h3>Bored!!! Interactive Front-End Project</h3>
            <span>HTML,Bulma,JavaScript, Jquery, Free FrontEnd CSS</span>
          </div>
        </a>
        <p>!-- Boot Cammp Project Fan Page --</p>
        <a href="./assets/images/fan.page.html  " class="grid-item fan">
          <div>
            <h3>Fan Page</h3>
            <span>HTML, Favicon</span>
          </div>
        </a>

        <p>!--Interactive Full-Stack Project # 4 Squid Store--</p>
        <a href="https://thesquidstore.herokuapp.com/" class="grid-item project">
          <div>
            <h3>Interactive Full-Stack Project # 4 Squid Store</h3>
            <span>MongoDB and the Mongoose ODM GraphQL API with a Node.js and Express.js server Squid Store</span>
          </div>
        </a>
      
         <p>-- Interactive Full-Stack Project # 2 The Sneaker Collector--</p>
         <a href="https://peaceful-fortress-81224.herokuapp.com/ " class="grid-item project">
          <div>
            <h3>The Sneaker Collector Interactive Full- Stack Project # 2 </h3>
            <span>HTML,Node.js,bcrypt,dotenv,express packages(handlebars,session),Sequelize,connect-session-sequelize,MySql2 and others</span>
          </div>
        </a>
       </div>
    </section>

    );
    }
    export default Portfolio;