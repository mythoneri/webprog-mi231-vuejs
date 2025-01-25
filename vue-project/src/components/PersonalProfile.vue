<template>
  <template>
  <div class="section" id="aboutMe">
    <h2>About Me</h2>
    <div class="text-image-container">
      <p class="custom-paragraph">
        Hi! I'm <b>Nerimiah Jay Ato</b>, also known as <b>Mito</b>! I am a perceptive and introverted individual. Depending on the social group, I may be silent or outgoing. In addition, I enjoy listening to a variety of musical styles, including pop, jazz, classical, and others.
      </p>
      <img src="images/my profile.png" alt="Profile" class="custom-image">
    </div>

    <h2>Hobbies & Interests</h2>
    <p>My interests include reading, listening to many genres, and playing several musical instruments. Additionally, sports include volleyball, table tennis, basketball, and badminton. Lastly, being a mobile photographer. I love capturing memorable moments of my friends and loved ones.</p>

    <h2>Goals in Life</h2>
    <p>I aspire to succeed in my profession and work as a front-end developer or UI/UX designer. In addition to my job, I want to teach kids how to play an instrument and provide financial support for my family.</p>
  </div>

  <div class="section" id="education">
    <h2>Education & Achievements</h2>
    <p>
      I attended <b><i>Sen. Renato "Compañero" Cayetano Memorial Science and Technology High School.</i></b> <br>
      I have been a two-year consecutive With Honors recipient. <br>
      <hr>
      <p>
        Currently, I am a second-year student at <b><i>Asia Pacific College</i></b> pursuing a Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technology.
      </p>

    <h2>IT Experience</h2>
    <p>
      I've coded in Python, Java, HTML, and CSS. I have also acquired skills in sound system operation and delivered lessons on Microsoft Sway.
    </p>
  </div>

  <div class="section gallery" id="gallery">
    <h2>Picture Gallery</h2>
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 mb-3">
        <img src="images/msc.jpg" alt="Music" class="gallery-image">
      </div>
      <div class="col-md-4 mb-3">
        <img src="images/photography.jpg" alt="Photography" class="gallery-image">
      </div>
      <div class="col-md-4 mb-3">
        <img src="images/strings.jpg" alt="Instruments" class="gallery-image">
      </div>
      <div class="col-md-4 mb-3">
        <img src="images/mi231.jpg" alt="College" class="gallery-image">
      </div>
      <div class="col-md-4 mb-3">
        <img src="images/family.jpg" alt="Family" class="gallery-image">
      </div>
      <div class="col-md-4 mb-3">
        <img src="images/gmrc.jpg" alt="Community" class="gallery-image">
      </div>
    </div>
  </div>
</template>
</template>


<script></script>
<style>
/* Keyframes for Animations */
@keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes buttonBounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  @keyframes hoverGlow {
    0% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: 0 4px 15px rgba(88, 129, 87, 0.7);
    }
  }
  
  h1 {
    text-align: left;
    color: #ffffff;
    font-family:'Poppins', sans-serif ;
    background-color: #344e41;
    padding: 3px;
    border-radius: 5px;
    margin: 5px auto;
    animation: fadeIn 1s ease-out;
  }
  
  header {
    background: #344e41;
    color: #dad7cd;
    font-family:'Poppins', sans-serif ;
    text-align: center;
    border-radius: 10px;
    margin: 5px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1.5s ease-in-out;
  }
  
  body {
    background-color: #a3b18a;
    color: #333;
    animation: fadeIn 1.2s ease-out;
  }
  
  h2 {
    color: #ffffff;
    font-family:'Poppins', sans-serif ;
    background-color: #344e41;
    padding: 15px;
    border-radius: 5px;
    animation: fadeIn 1s ease-out;
  }
  
  p {
    font-family:'Poppins', sans-serif ;
    margin: 15px;
    padding: 3px;
    font-size: 20px;
    animation: fadeIn 1.5s ease-in-out;
  }
  
  li {
    font-family:'Poppins', sans-serif ;
    margin: 1px 2px 2px 40px;
    padding: 1px;
    font-size: 20px;
    animation: fadeIn 2s ease-out; 
  }
  
  .section {
    margin: 30px 5%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s ease-out;
  }
  
  .gallery img {
    margin: 5px;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #000;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .gallery img:hover {
    transform: scale(1.05);
    animation: hoverGlow 0.3s forwards;
  }
  
  .btn-custom {
    background-color: #344e41;
    color: #fff;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-custom:hover {
    background-color: #588157;
    animation: buttonBounce 0.3s ease-in-out;
  }
  
  .btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .btn-container a {
    margin: 10px;
    padding: 15px 30px;
    text-decoration: none;
    color: #fff;
    background-color: #344e41;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .social-buttons-container {
    text-align: center;
    margin: 20px;
  }
  
  .social-buttons-container a {
    margin: 0 10px;
    display: inline-block;
  }
  
  .social-buttons-container img {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    cursor: pointer;
  }
  
  .social-buttons-container img:hover {
    transform: scale(1.1);
  }
  
  .rate-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .custom-button {
    background-color: #344e41;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .custom-button:hover {
    background-color: #3f5d4a;
  }
  
  .text-image-container {
    display: flex;
    flex-wrap: wrap; 
    align-items: center; 
    justify-content: space-between; 
    gap: 20px; 
    margin: 20px 0;
  }
  
  .custom-paragraph {
    font-size: 20px;
    margin: 20px;
    flex: 1; 
    text-align: justify; 
  }
  
  .custom-image {
    width: 300px;
    height: auto;
    border-radius: 5px;
    flex-shrink: 0; 
    margin-bottom: 7px;
    border: 2px solid #000;
    object-fit: cover; 
  }
  
</style>