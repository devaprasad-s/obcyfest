import "./App.css"
import React from "react";


function Eventcard() {

const events = [
    {
      title: "Event 1",
      description:
        "Join us for an unforgettable adventure in Event 1. This event promises a day filled with excitement, entertainment, and thrilling activities for all ages. From engaging games to mind-bending puzzles, there's something for everyone. Be prepared to unleash your inner explorer as you embark on a journey of discovery. Event 1 is the perfect opportunity to make lasting memories with friends and family. Our team has put together a program that combines fun and learning, making it an ideal outing for all. Don't miss out on the chance to be part of this epic experience. We're here to ensure you have a fantastic time. Come and join us for a day of pure joy and adventure.",
      poster: Event1Poster,
    },
    {
      title: "Event 2",
      description:
        "Welcome to Event 2, a celebration of creativity, innovation, and ingenuity. This event is a hub for the latest trends, cutting-edge technologies, and groundbreaking ideas. Join us in exploring the future of technology and design. Engage with experts, attend inspiring workshops, and dive into the world of innovation. Event 2 is a platform for dreamers and doers, where you can turn your ideas into reality. Whether you're a tech enthusiast, an aspiring inventor, or a curious mind, this event offers something for everyone. Get ready to broaden your horizons, network with like-minded individuals, and gain insights that can shape your future. Event 2 is where innovation meets inspiration.",
      poster: Event2Poster,
    },
    {
      title: "Event 3",
      description:
        "Get your adrenaline pumping with Event 3! This action-packed event promises challenges, competitions, and an electrifying atmosphere. Whether you're a thrill-seeker, a competitive spirit, or someone who enjoys pushing boundaries, Event 3 is tailor-made for you. Engage in heart-pounding activities, solve complex puzzles, and outperform the competition. Fantastic prizes await the champions. Be ready to test your limits, show off your skills, and leave a mark as a true competitor. Event 3 is not just about the games; it's about the spirit of sportsmanship, camaraderie, and the pursuit of excellence. Join us in an experience that's sure to leave you breathless and craving for more.",
      poster: Event3Poster,
    },
    {
      title: "Event 4",
      description:
        "Step into a world of possibilities at Event 4. This event is all about exploration, enlightenment, and connection. Discover new opportunities, insights, and innovations as you interact with experts and thought leaders. Event 4 is designed to inspire and empower. Learn from the best, connect with peers, and gain valuable knowledge that can shape your future. This event is not just a gathering; it's a chance to expand your horizons, enrich your understanding, and engage with the brightest minds in the industry. Whether you're a student, a professional, or an enthusiast, Event 4 promises to be an enlightening and unforgettable experience.",
      poster: Event4Poster,
    },
    // Add more event data as needed
  ];
<div class="container">
 <div class="wrapper">
   <div class="banner-image"> </div>
   <h1> Toyota Supra</h1>
   <p>Lorem ipsum dolor sit amet, <br/>
     consectetur adipiscing elit.</p>
  </div>
  <div class="button-wrapper"> 
  <button class="btn outline">DETAILS</button>
  </div>
    </div>


      {showEventDetails && (
        <EventDetails
          onClose={closeEventDetails}
          title={selectedEvent.title}
          description={selectedEvent.description}
          poster={selectedEvent.poster} // Pass the poster image
        />
      )}
      
}

export default Eventcard;
