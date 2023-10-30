import Mascot1 from "./assets/images/Mascot1.png";
import Mascot2 from "./assets/images/Mascot2.png";
import Mascot3 from "./assets/images/Mascot3.png";
import Mascot4 from "./assets/images/Mascot4.png";
import Event1Poster from "./assets/images/Event1Poster.jpeg";
import Event2Poster from "./assets/images/Event2Poster.jpeg";
import Event3Poster from "./assets/images/Event3Poster.jpeg";
import Event4Poster from "./assets/images/Event4Poster.jpeg";

import React, { useState } from "react";
import "./App.css"; // Import your CSS
import useTextTransition from "./useTextTransition";
import Navigation from "./components/Navigation"; // Import the Navigation component // Import the Mascots component
import EventDetails from "./EventDetails";

function App() {
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const initialText = "08cyF357 e78f";
  const finalText = "ObCyFest 2023";
  const duration = 5000; // Transition duration in milliseconds

  const text = useTextTransition(initialText, finalText, duration);

  // Sample event data
  // Sample event data
  // Sample event data
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

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  const closeEventDetails = () => {
    setShowEventDetails(false);
  };

  return (
    <div id="home" className="container">
      <header>
        <Navigation /> {/* Include the Navigation component here */}
        <section className="obcy-head">
          <h1>{text}</h1>
        </section>
        {/* Add more content, event details, and sections as needed */}
      </header>
      <section className="mascot-introduction">
        <h2>Our Mascots</h2>
        <p>
          Meet our lovable mascots, each with a unique personality and
          incredible talents. These four extraordinary creatures are the heart
          and soul of Obcyfest 2023, and they can't wait to share their stories
          with you.
        </p>
      </section>
      <section className="mascots">
        <div className="mascot">
          <img src={Mascot1} alt="Mascot 1" />
          <h2>Raptorix</h2>
          <p className="explanation">
            <p>
              I am Raptorix, the first year mascot. I love to fly high and hack
              into new domains. Learning and exploring are my passions. I am
              always up for some fun and friendship, but don’t underestimate me.
              I can be fierce and competitive when it comes to achieving my
              goals.
            </p>
          </p>
        </div>
        <div className="mascot">
          <img src={Mascot2} alt="Mascot 2" />
          <h2>Metalix</h2>
          <p className="explanation">
            <p>
              {" "}
              I am Metalix, the second year mascot. I love to transform myself
              and engineer new solutions. Creating and improving are my skills.
              I am cool and confident in what I do, but I also value loyalty and
              support. I can be a great ally and a reliable partner.
            </p>
          </p>
        </div>
        <div className="mascot">
          <img src={Mascot3} alt="Mascot 3" />
          <h2>Blackspix</h2>
          <p className="explanation">
            <p>
              I am Blackspix, the third year mascot. I love to challenge myself
              and overcome any obstacle. Challenging and overcoming are my
              strengths. I am bold and charismatic in my actions, but I also
              respect humility and gratitude. I can be a leader and a role model
              for others.
            </p>
          </p>
        </div>
        <div className="mascot">
          <img src={Mascot4} alt="Mascot 4" />
          <h2>Wyrmix</h2>
          <p className="explanation">
            <p>
              I am Wyrmix, the fourth year mascot. I love to lead with wisdom
              and inspire with magic. Leading and inspiring are my gifts. I am
              noble and majestic in my presence, but I also care for kindness
              and generosity. I can be a mentor and a guardian for all.
            </p>
          </p>
        </div>
      </section>
      <br></br>
      <section id="events"></section>
      <br></br>
      <br></br>
      <br></br>
      <section className="events-intro">
        <h2>Our Events</h2>
        <p>Take a look at our various events for this year's Obcyfest 2k23.</p>
      </section>
      <section className="event-posters">
        {events.map((event, index) => (
          <div className="poster" key={index}>
            <img
              src={event.poster}
              alt={`Event Poster ${index}`}
              onClick={() => openEventDetails(event)}
            />
            <h3>{event.title}</h3>
          </div>
        ))}
      </section>

      {showEventDetails && (
        <EventDetails
          onClose={closeEventDetails}
          title={selectedEvent.title}
          description={selectedEvent.description}
          poster={selectedEvent.poster} // Pass the poster image
        />
      )}
      <footer>&copy; 2023 Obcydians CCET</footer>
    </div>
  );
}

export default App;
