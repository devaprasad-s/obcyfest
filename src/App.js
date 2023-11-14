import Mascot1 from "./assets/images/Mascot1.webp";
import Mascot2 from "./assets/images/Mascot2.webp";
import Mascot3 from "./assets/images/Mascot3.webp";
import Mascot4 from "./assets/images/Mascot4.webp";
import PatternPrintingPoster from "./assets/images/Event1poster.webp";
import BattleOfBrainsPoster from "./assets/images/Event2poster.webp";
import FindTheKeyPoster from "./assets/images/Event3poster.webp";
import TechnicalDebatePoster from "./assets/images/Event4poster.webp";
import FIFAPoster from "./assets/images/Event5poster.webp";
import FilmManiaPoster from "./assets/images/Event6poster.webp";
import BGMIPoster from "./assets/images/Event7poster.webp";
import SketchZonePoster from "./assets/images/Event8poster.webp";
import TypeChallengePoster from "./assets/images/Event9poster.webp";
import NFSPoster from "./assets/images/Event10poster.webp";
import Acumen2Poster from "./assets/images/Event11poster.webp";
import AIPalettePoster from "./assets/images/Event12poster.webp";
import TwistYourBrainPoster from "./assets/images/Event13poster.webp";
import HopOnPoster from "./assets/images/Event14poster.webp";
import PromptMasterPoster from "./assets/images/Event15poster.webp";
import logoimg from "./assets/images/logo.webp";
import React, { useEffect, useState } from "react";
import "./App.css"; // Import your CSS
import useTextTransition from "./useTextTransition";
import Navigation from "./components/Navigation"; // Import the Navigation component // Import the Mascots component
import EventDetails from "./EventDetails";
import Aos from "aos";
import LoadingScreen from "./LoadingScreen";
import 'aos/dist/aos.css';
import sponsor from "./assets/images/sponsor.webp"
import partner1 from "./assets/images/partner1.webp"
import partner2 from "./assets/images/partner2.webp"
import { Analytics } from '@vercel/analytics/react';
function App() {
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadDuration, setImageLoadDuration] = useState(0);
  const initialText = "08cyF357 e78f";
  const finalText = "ObCyFest 2023";

  const duration = 3000; // Transition duration in milliseconds
  const scores=["0","15","45","80"]






  const [imagesLoaded, setImagesLoaded] = useState(false);

  
  // Simulate image loading with a delay


  useEffect(() => {
    
    const images = [
      Mascot1,
      Mascot2,
      Mascot3,
      Mascot4,
      logoimg,
      ...events.map((event) => event.poster),
    ];
  
    const startTime = performance.now();
  
    // Simulate image loading
    const imagePromises = images.map((image) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image;
      img.onload = resolve;
      img.onerror = reject;
    }));
  
    Promise.all(imagePromises)
      .then(() => {
        const endTime = performance.now();
        const loadDuration = Math.max(2000, endTime - startTime); // Minimum duration of 2000 milliseconds
        setTimeout(() => {
          setIsLoading(false);
          setContentLoaded(true);
        }, loadDuration);
      })
      .catch((error) => {
        console.error('Image loading failed:', error);
        setIsLoading(false);
      });
  }, []);












  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  useEffect(() => {
    // Simulate content loading with a delay
    setTimeout(() => {
      setContentLoaded(true);
    }, 3000); // Adjust the delay as needed
  }, []);

  

  const text = useTextTransition(initialText, finalText, duration);

  // Sample event data
  // Sample event data
  // Sample event data
  const events = [
    {
      title: "Pattern Printing",
      googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSct2I4xyNy-pgpLGippqFkXd1TIH5qHmqbZiXA-HNUvR3MtjQ/viewform",
      description: (
        <div>
          <p>
            <b>✨Unleash Your Creative Imagination!</b>
          </p>
          <p>
            Join the <b>pattern printing challenge</b> and let your imagination run wild with patterns ! 🎨
          </p>
          <p>
            <b>Competition Details</b>
          </p>
          <p>No. of levels: <b>3</b></p>
          <p>Level 1 info: <i>Easy Question</i></p>
          <p>Level 2 info: <i>Intermediate Question</i></p>
          <p>Level 3 info: <i>Hard Question</i></p>
          <p>
            <b>📋Rules:</b>
          </p>
          <ul>
            <li>Participants will receive a question.</li>
            <li>They can choose either Java or C.</li>
            <li>Each round grants <b>10 minutes</b> to solve the problem.</li>
            <li>The winners will be determined based on the following criteria:</li>
          </ul>
          <ul>
            <li><b>Completion time</b>: Preference is given to those who finish first.</li>
            <li><b>Code quantity</b>: Fewer lines of code are preferred.</li>
            <li><b>Time taken</b>: Less time used is preferred.</li>
          </ul>
          <p>
            <b>Event Details:</b>
          </p>
          <p>🗓️ Date: <b>13/11/2023</b></p>
          <p>📍 Venue: <b>Lab 2</b></p>
          <p>
            Immerse yourself in the world of patterns 🎨 and bring your extraordinary vision to life.
          </p>
          <p>🏆Grab your prizes for the most captivating patterns.</p>
          <p>🥇Challenge your creativity with unique projects</p>
          <p>
            <b>📝Registration:</b>
          </p>
          <p>Ready to compete? Secure your spot now! Contact event coordinators:</p>
          <ul>
            <li><i>Abhishek</i></li>
            <li><i>Alfred</i></li>
          </ul>
          <p>📞 Contact Number: <b>7907247909</b></p>
        </div>
      ),
      poster: PatternPrintingPoster,
    },
    
    
    
    {
      title: "Battle of Brains",
      googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSe7dBaNBCfoWy6VFgJbysBcprWCMZwVLkAEUEojAoILNa4XTQ/viewform",
      description: (
        <div>
          <p>
            <b>🧠 Battle of Brains: Where Minds Collide! 🚀</b>
          </p>
          <p>
            Prepare for the ultimate showdown of intellect, knowledge, and wit! "Battle of Brains" is the grand culmination of a series of mind-boggling events, where the best and brightest have risen to the challenge.
          </p>
          <p>
            This isn't just any competition; it's an all-out war of wits, where champions from various fields converge to claim the title of the ultimate brainiac.
          </p>
          <p>
            <b>🚀 TECH TRIVIA Challenge: Where Geeks Become Legends! 🧠</b>
          </p>
          <p>
            Calling all tech aficionados and problem-solving masters! Get ready for a high-voltage showdown in the "Technical Trivia Challenge." This epic five-round competition is designed to push your knowledge, skills, and quick thinking to the limit, culminating in the crowning of the next Technical Trivia Champion.
          </p>
          <p>
            <b>🎉 Join the Ultimate LOGO QUIZ Challenge! 🧐</b>
          </p>
          <p>
            Are you a branding genius, a logo enthusiast, or just love a good challenge? We've got an exciting event that's tailor-made for you – the Logo Quiz Challenge! 🚀
          </p>
          <p>
            Unleash Your Inner Logo Detective! <b>🕵️‍♂️</b>
          </p>
          <p>
            Put your logo recognition skills to the test and dive into the vibrant world of branding. Can you identify famous brands just by looking at their logos? It's time to find out!
          </p>
          <p>
            <b>🧠 BRAIN TEASE: Unleash Your Tech Genius 🤖</b>
          </p>
          <p>
            Prepare to be mind-boggled in this individual event that adds a twist to traditional quizzing. BRAIN TEASE isn't your average quiz; it's a journey through technology and problem-solving that's as fun as it is challenging!
          </p>
          <p>
            <b>🧠 BRAIN OUT: Crack the Code Challenge! 🚀</b>
          </p>
          <p>
            Get ready to immerse yourself in the ultimate code-breaking experience! "BRAIN OUT" is not your typical event; it's a high-stakes journey through puzzles, ciphers, and technical challenges.
          </p>
          <p>
            🚀<b>TECHPUZZ: Unleash Your Tech Brilliance!💡</b> Join us for an electrifying journey through three thrilling rounds of brain-bending riddles, acronym deciphering, and futuristic predictions. Are you up for the challenge? TechPuzz awaits your genius!
          </p>
          <p>
            Registration Fee: <b>60</b>
          </p>
          <p>
            Jackpot: <b>1000</b>
          </p>
          <p>
            📅Date: <b>13/11/2023 - 14/11/2023</b>
          </p>
          <p>
            📍Venue: <b>Lab 1 & Project Lab</b>
          </p>
          <p>
            Coordinators:
          </p>
          <ul>
            <li><i>Jane</i></li>
            <li><i>Matsun</i></li>
            <li><i>Kailas</i></li>
            <li><i>Adwaith</i></li>
            <li><i>Rahul</i></li>
          </ul>
          <p>
            📞Contact: <b>9947941342</b>
          </p>
        </div>
      ),
      poster: BattleOfBrainsPoster,
    },
    
    {
      title: "Find the Key",
      googleFormURL: "https://docs.google.com/forms/d/e/1FAIpQLSe4bykOLc5YcKr_jsQvbE3dH0UAX2mRbeqwtVJn977--vYwog/viewform",
      description: (
        <div>
          <p>
            <b>🔑 Find the Key: Unlock the Challenge! 🔐</b>
          </p>
          <p>
            Join the adventure in "<b>Find the Key</b>," a thrilling word-finding event where your skills and teamwork will unlock the mysteries hidden within blank spaces!
          </p>
          <p>
            <b>🌟 Event Overview 🌟</b>
          </p>
          <ul>
            <li><b>🔹 Multiple Rounds:</b> The competition unfolds in multiple rounds, each more challenging than the last.</li>
            <li><b>🔹 Team Play:</b> Gather your dynamic duo! Teams consist of <b>2 members</b>.</li>
            <li><b>🔹 Batch Battles:</b> Up to <b>25 teams</b> compete, with one winner per batch.</li>
            <li><b>🔹 The Final Showdown:</b> Batch winners go head-to-head in the ultimate final round to decide the champion.</li>
          </ul>
          <p>
            <b>🏆 Competition Details 🏆</b>
          </p>
          <p>
            <b>Round 1 – The Clue Chase:</b> 🕵️‍♂️🔍
          </p>
          <ul>
            <li>Teams decode the blank spaces to find the hidden words.</li>
            <li>The top team in each batch moves forward.</li>
          </ul>
          <p>
            <b>Round 2 – The Ultimate Unscramble:</b> 🧩🥇
          </p>
          <ul>
            <li>Batch winners face off in the final round.</li>
            <li>The first to unlock the grand mystery claims the title!</li>
          </ul>
          <p>
            <b>🚫 Rules: 🚫</b>
          </p>
          <ul>
            <li>Brainpower, teamwork, and quick thinking required.</li>
            <li>No external help or hints allowed.</li>
          </ul>
          <p>
            <b>Tie Breaker:</b> In case of a tie, the time taken to complete the final challenge will be noted to determine the winner.
          </p>
          <p>
            <b>📆 Date: 14/11/2023</b>
          </p>
          <p>
            <b>📍 Venue: Classroom</b>
          </p>
          <p>
            <b>Coordinators: Athira & Ayana</b> 🎤
          </p>
          <p>
            <b>📞 Contact Info: 8301992079</b>
          </p>
          <p>
            <b>📍 Event Venue: S7/S8 classroom</b>
          </p>
        </div>
      ),
      poster: FindTheKeyPoster,
    },
    
    {
      title: "Technical Debate",
      googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSdm9O-ruVqVAhRPJXc1Xwt0QeClzUwXFZ4HGTwxQTaB1cuvPw/viewform",
      description: (
        <div>
          <p>
            <b>🎤 Technical Debate: Where Ideas Clash and Innovations Emerge! 🚀</b>
          </p>
          <p>
            Prepare for a battle of minds, where tech enthusiasts and visionaries go head-to-head in the "Technical Debate." It's not just a debate; it's a platform where innovative ideas collide, and the future takes shape.
          </p>
          <p>
            <b>👥 TEAMS:</b>
          </p>
          <p>
            Gather your dynamic duos! Each class will assemble two teams, each consisting of two members.
          </p>
          <p>
            <b>🔥 ROUNDS:</b>
          </p>
          <p>
            Get ready for three intense rounds of verbal warfare!
          </p>
          <p>
            <b>💡 FORMAT:</b>
          </p>
          <ul>
            <li>Topics revealed with a 5-minute prep time.</li>
            <li>A lottery decides who supports and who opposes.</li>
            <li>Each round is a 10-minute showdown, with 5 minutes for each team to present their points.</li>
          </ul>
          <p>
            <b>🏆 PROGRESSION:</b>
          </p>
          <ul>
            <li>First round: 4 teams selected out of 8.</li>
            <li>Second round: 2 teams advance.</li>
            <li>The final round crowns the ultimate champion.</li>
          </ul>
          <p>
            <b>🎯 SCORING:</b>
          </p>
          <p>
            The winner is determined by points! Each valid point made during a presentation earns your team one point.
          </p>
          <p>
            <b>🤝 ADDITIONAL GUIDELINES:</b>
          </p>
          <ul>
            <li>Respect your team members and their ideas.</li>
            <li>Keep your cool - no raised voices or abusive language allowed.</li>
            <li>Listen to your mentor - they're here to guide you to success.</li>
          </ul>
          <p>
            Don't miss the chance to shine in the spotlight. Join us for an epic battle of words and ideas! 🎤💬 #DebateMasters #WinWithWords
          </p>
          <p>
            <b>📆 Date: 15/11/2023</b>
          </p>
          <p>
            <b>📍 Venue: Library</b>
          </p>
          <p>
            <b>Registration fee: 100</b>
          </p>
          <p>
            <b>🥇1st prize: 1000</b>
          </p>
          <p>
            <b>🥈2nd prize: 500</b>
          </p>
          <p>
            <b>Coordinators: Gayathri & Riksana</b>
          </p>
          <p>
            <b>📞 Contact: 8078851847</b>
          </p>
        </div>
      ),
      poster: TechnicalDebatePoster,
    },
    
    {
      title: "FIFA",
      googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSfazGwV66cIoqaYYFRKGu6H-NR8F3re4vNTOLNIRJZ5Ks2c3Q/viewform",
      description: (
        <div>
          <p>
            <b>👟 🎉 FIFA GAMING ⚽🏃🏼‍♂</b>
          </p>
          <p>
            <b>Football lovers ARISE! ObcyFest'23 is here, to give you a chance to prove your gaming skills in the upcoming FIFA GAMING EVENT 🔥 . So gear up with consoles, come partake in the event and bag the Prizes that awaits you.🏆</b>
          </p>
          
            <p><b>Registration Fee: 40-/</b></p>
            <p><b>First Prize: ₹500</b> </p>
            <p><b>Second Prize: ₹250</b></p>
          <p>
            <b>Instructions:</b>
          </p>
          <ul>
            <li>All matches will be monitored by the coordinators.</li>
            <li>Matches are to be played on the system provided by the coordinators.</li>
            <li>Matches are played in offline co-op mode.</li>
            <li>Matches are conducted in knockout format.</li>
            <li>Tournament will be a 1v1 Competition.</li>
          </ul>
          <p>
            <b>📆 Date: 15/11/2023</b>
          </p>
          <p>
            <b>📍 Venue: Project Lab</b>
          </p>
          
          <p><b>Event Hosts:</b></p>
            <p>Joe Benny - 7736465972</p>
            <p>Jaimon James - 7510739988</p>
        </div>
      ),
      poster: FIFAPoster,
    },
    
    {
      title: "Film Mania",
      googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSf0TVVfWFdAXD6sHeSR7UC9LLVkkHwd1gL2v_GElcc7tFGV_w/viewform",
      description: (
        <div>
          <p>
            <b>🎬🌟 Film Mania 🌟🎬</b>
          </p>
          <p>
            Test your movie knowledge.
            Are you the ultimate film guru? Put your movie expertise to the test in our thrilling
            event. Join us for an epic quiz where you can showcase your movie knowledge, win prizes, and have a real good time! Don't miss out on this blockbuster event.
          </p>
          <p>
            <b>Event details:</b>
          </p>
          <ul>
            <li><b>🗓️ Date:</b> 15/11/2023</li>
            <li><b>📍 Venue:</b> Classroom</li>
          </ul>
          <p>
            <b>Rules:</b>
          </p>
          <ol>
            <li>No electronic devices(including smart watch) are allowed.</li>
            <li>A team of 2 members.</li>
            <li>No discussion across teams: if found doing so, it will result in instant disqualification.</li>
            <li>Bring a pen to the event.</li>
            <li>After the timer expires, questions will not be repeated.</li>
            <li>Decision of the coordinators will be the final verdict.</li>
          </ol>
          <p>
            <b>Contact Information:</b>
          </p>
          <p>
            📱 Parvathy Sunil: 73068 62790
          </p>
          <p>
            📱 Vandana Unni: 96560 95813
          </p>
        </div>
      ),
      poster: FilmManiaPoster,
    },
    
    {
      title: "BGMI",
      googleFormURL: "https://docs.google.com/forms/d/e/1FAIpQLSfsU2c8sS4OVCSERl2k-ZxAzVVOynt-3wGQBPQWFEguIgGofA/viewform",
      description: (
        <div>
          <p>
            <b>🎮 BGMI WARS - Unleash the Legend in You! 🎮</b>
          </p>
          <p>
            <b>🚫 RULES OF ENGAGEMENT 🚫</b>
          </p>
          <ul>
            <li>Zero tolerance for toxic behavior! Keep the game clean and fun.</li>
            <li>No hacks, glitches, or exploits allowed. Fair play is the name of the game.</li>
            <li>Friendly fire? Not friendly at all. Play nice, or you're out.</li>
            <li>It's a team effort. One star player means the whole squad qualifies.</li>
            <li>Tiebreakers? Settle it in epic TDM matches.</li>
            <li>Day 1 and 2 matches will be conducted online, and the last day match will be at college.</li>
          </ul>
          <p>
            <b>🔥 DAY 1: BATTLEGROUND RUMBLE 🔥</b>
          </p>
          <p>
            Three maps, one mission: collect points like a pro. Kills, assists, revives, MVP titles - it all counts!
            Flex your strategy, teamwork, and earn your spot in the finals. Top squads rise to the challenge, not just the first-place finishers.
            Who will earn their way to the semis? 🎯🏆💪
          </p>
          <p>
            <b>🌄 DAY 2: ERANGEL FURY 🌄</b>
          </p>
          <p>
            Day 2 is all about pure gameplay on Erangel. No points, just raw skills, strategy, and instincts.
            Conquer Erangel and etch your name into BGMI Wars history. Can your squad rise above the rest? 💥🏆🌆
          </p>
          <p>
            <b>🔫 DAY 3: TDM THRILLER 🔫</b>
          </p>
          <p>
            It's the ultimate showdown! TDM matches for glory. Firepower, teamwork, and sheer determination are your tools.
            The champions of this day become the legendary BGMI Wars champions! 👑🔥🏆
          </p>
          <p>
            <b>💰 REGISTRATION FEES:</b> Rs 100 for the entire squad
          </p>
          <p>
            <b>📅 EVENT DATE:</b> 15/11/2023 (Online)
          </p>
          <p>
            <b>📞 Contact Phone Numbers:</b>
          </p>
          <ul>
            <li>Karthik H: 8547351305</li>
            <li>Neeraj J: 8281307620</li>
          </ul>
        </div>
      ),
      poster: BGMIPoster,
    },
    
    {
      title: "SketchZone",
      googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSc8KOIPadkMWhKRvsGRY6zWbljXAxqmSi2vmElj8V44w8P6tw/viewform",
      description: (
        <div>
          <p>
            <b>🎨 SketchZone: Unleash Your UI Creativity! 🖌️✏️📱</b>
          </p>
          <p>
            Get ready to dive into the world of UI design in our <b>SketchZone</b> event!
            Sharpen your sketching skills, let your creativity flow, and craft outstanding User Interface designs.
          </p>
          <p>
            <b>🌟 Event Overview 🌟</b>
          </p>
          <ul>
            <li><b>Paper Provided:</b> The college supplies the paper, and students bring the rest of their stationery.</li>
            <li><b>Competition Format:</b> Express your UI design prowess and innovative ideas.</li>
            <li><b>Winner Selection:</b> Award for the best UI design.</li>
          </ul>
          <p>
            <b>🏆 Competition Details 🏆</b>
          </p>
          <p>
            <b>Sketching Marvels: 📝🎨</b>
          </p>
          <ul>
            <li>Put your ideas on paper.</li>
            <li>Let your creativity run wild.</li>
            <li>Judges pick the top design.</li>
          </ul>
          <p>
            <b>🚫 Rules: 🚫</b>
          </p>
          <ul>
            <li>College provides the paper; bring your favorite stationery.</li>
            <li>Originality and innovation are <b>key</b>.</li>
            <li>No digital assistance allowed.</li>
          </ul>
          <p>
            <b>Coordinator: Aswin S Seshadri 🎤</b>
          </p>
          <p>
            📞 Contact Info: <b>6238088681</b>
          </p>
          <p>
            📍 Event Venue: <b>S7/S8 classroom</b>
          </p>
          <p>
            🗓️ Date: <b>16/11/2023</b>
          </p>
        </div>
      ),
      poster: SketchZonePoster,
    },
    
    {
      title: "Type Challenge",
      googleFormURL: "https://docs.google.com/forms/d/e/1FAIpQLSdNd_Fb5pqmLpZjoGK62LkDDCNir2Ngsknf_DwEHxFsjZNqNg/viewform",
      description: (
        <div>
          <p>
            <b>🏆 Type Challenge - Test Your Speed and Precision! 🏆</b>
          </p>
          <p>
            Are you ready for the ultimate typing showdown? Join us in the Typing Challenge, where speed and precision are your allies!
          </p>
          <p>
            <b>🌟 Competition Overview 🌟</b>
          </p>
          <ul>
            <li><b>Three Exciting Levels:</b> Participants will engage in a thrilling typing competition consisting of three levels.</li>
            <li><b>Winners' Criteria:</b> The victors will be determined based on their performance in terms of words typed and the number of errors made.</li>
            <li><b>Time Limit:</b> Contestants will have a challenging five-minute time limit to demonstrate their typing prowess.</li>
            <li><b>Text Editors:</b> Competitors are required to utilize text editors to input the provided paragraph.</li>
            <li><b>Date:</b> 16/11/2023</li>
            <li><b>Venue:</b> Lab 1</li>
            <li><b>Prizes Await:</b> Exciting prizes await those who emerge victorious in this thrilling competition.</li>
          </ul>
          <p>
            🥇 1st Place-₹500<br/>
            🥈 2nd Place-₹250<br/>
          </p>
          <p>
            <b>👥 Coordinators 👥</b>
          </p>
          <ul>
            <li>👤 Abhishek</li>
            <li>👤 Alfred</li>
          </ul>
          <p>
            <b>📞 Contact Info 📞</b>
          </p>
          <p>
            📱 7907247909
          </p>
        </div>
      ),
      poster: TypeChallengePoster,
    }
,    
{
  title: "Need for Speed",
  googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSc9PJQQsCx0b5MyzMOvIf5losWEUyNa9cgVTGw4ssddHBO4CQ/viewform",
  description: (
    <div>
      <p>
        <b>🏁 Need for Speed: Ignite the Thrill! 🚗💨</b>
      </p>
      <p>
        Buckle up and hit the pedal because "Need for Speed" is back, and it's faster and more exhilarating than ever! Get ready to ignite your inner racer in the ultimate high-speed showdown.
      </p>
      <p>
        🔥 <b>Unleash the Power:</b> Feel the rush as you take control of the world's most iconic cars. Customize, modify, and push your ride to the limits.
      </p>
      <p>
        🏆 <b>Dominate the Streets:</b> Prove your street racing prowess in a heart-pounding journey. Outrun the competition, evade the cops, and become the ultimate underground legend.
      </p>
      <p>
        💰 <b>Build Your Empire:</b> Rise through the ranks, build your crew, and own the city's underground racing scene. Your reputation is on the line!
      </p>
      <p>
        🌆 <b>Stunning Urban Landscapes:</b> Immerse yourself in beautifully crafted urban landscapes that come to life with dazzling visuals.
      </p>
      <p>
        <b>📅 Event Date:</b> 16/11/2023<br/>
        <b>🏙️ Event Venue:</b> Lab 2<br/>
        <b>🏆 Amazing Prizes Await!:</b> Win incredible prizes and the admiration of fellow racers.
      </p>
      <p>
        Join us for the ride of your life! "Need for Speed" is more than a game; it's a lifestyle, a passion, and a quest for glory. Get ready to race! 🚗💨🏁
      </p>
    </div>
  ),
  poster: NFSPoster,
}
,
      {
        title: "Acumen 2.0",
        googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSdPW1fqTTLT72lWcYeIZoPuIlbfzsVah58oNULch8Iok15uqQ/viewform",
        description: (
          <div>
            <p>
              <b>🥅 ACUMEN 2.0 ⚽</b>
            </p>
            <p>
              How about a Pro Evolution Soccer game? It's more exciting than ever! Always keep an eye out for the inspirational figures on the pitch to maximize your attacks. ⚽️⚡️ Get your game on and aim for the top spot in the Tournament 🅰️CUMEN⚡️⚪️ by showcasing your skills. So, what are you waiting for? Charge up your phones, boot up your game, and start having a blast to win some exciting prizes! 🎊🏆
            </p>
            <p>
              <b>Date:</b> <b>Nov 16/11/2023 (online)</b>
            </p>
            <p>
              <b>🥇 :</b> <b>Rs 500/-</b>
            </p>
            <p>
              <b>🥈 :</b> <b>Rs 250/-</b>
            </p>
            <p>
              <b>Registration fee:</b> <b>Rs 50/-</b>
            </p>
            <p>
              🛑<b>Note:</b> Only the semifinalists would be invited to the event taking place at college.
            </p>
            <p>
              <b>Rules:</b>
            </p>
            <ul>
              <li>The matches will be held in a 2vs2</li>
              <li>The matches will be conducted in online mode from Monday</li>
              <li>Players are required to be online 10 minutes prior to the match.</li>
              <li>If no player is shown or is late, will be disqualified and others will be given a BYE (advanced to the next level).</li>
              <li>Matches will be of default duration followed by penalties if ended in a tie.</li>
            </ul>
            <p>
              <b>For further inquiries, kindly contact the Coordinators</b>:
            </p>
            <p>
              📱<b>Unnikrishnan A: 62823 91002</b>
            </p>
            <p>
              📱<b>Richin P Varghese: 62825 92507</b>
            </p>
          </div>
        ),
        poster: Acumen2Poster,
      },
      {
        title: "AI Palette",
        googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSdI4v6JwPDojAdEHtlQAJRMd52oiOClJOhHKCmOI24YmbkC6Q/viewform",
        description: (
          <div>
            <p>
              <b>AI Palette</b><br/>
              Dive into the world of AI-generated art with our AI Palette event! Explore the limitless creativity of artificial intelligence as you craft unique artworks based on provided themes and topics. Unleash your AI artistry!
            </p>
            <p>
              <b>Event Overview:</b><br/>
              🔹 <b>AI Art Generation:</b> Create art using an AI tool provided by us.<br/>
              🔹 <b>Themes and Topics:</b> Your canvas is defined by themes and topics provided during the event.<br/>
              🔹 <b>No Plagiarism:</b> Originality is key; no plagiarism allowed.<br/>
              🔹 <b>Evaluation Criteria:</b> Artwork's resemblance to the theme and the quality of the prompt used for AI image generation.
            </p>
            <p>
              <b>Competition Details:</b><br/>
              🔸 <b>Theme Unveiled:</b> 🎨🤯<br/>
              - Receive the theme or topic for your artwork.<br/>
              - Let AI guide your creative process.<br/>
              - Submit your AI-generated artwork.
            </p>
            <p>
              <b>Rules:</b><br/>
              - Use only the provided AI tool; no other software allowed.<br/>
              - Originality and creativity are essential.<br/>
              - Plagiarism is strictly prohibited.
            </p>
            <p>
              <b>Date:</b> <b>17/11/2023</b><br/>
              <b>Venue:</b> Lab 1<br/>
              <b>Coordinators:</b> Ansu & Amala 🎤
            </p>
          </div>
        ),
        poster: AIPalettePoster,
      },
      {
        title: "Twist Your Brain",
        googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSerGWFHSsEUrkOeJvupwgJ8f8uNgrIDgt7adNpghbtBoEu1ug/viewform",
        description: (
          <div>
            <p>
              <b>Twist Your Brain:</b> Where Puzzles and Fun Collide! 🤯🎉
            </p>
            <p>
              Get ready for a mind-bending adventure like no other! "Twist Your Brain" is not your average event; it's a whirlwind of puzzles, riddles, and brain-teasers that'll leave you in awe.
            </p>
            <p>
              🔥 <b>LEVEL 1: Guess the Number</b> 🔥<br/>
              In the first round, we have 20 brilliant minds competing to tackle the enigmatic world of numbers. With just 7 questions, they must think fast and answer accurately. But there's a twist – the first one to raise their hand gets to answer first! It's a battle of wits, where right answers pave the path to glory, and the top 5 will advance.
            </p>
            <p>
              🌈 <b>LEVEL 2: Guess the Color</b> 🌈<br/>
              Level up to the challenge in the second round as we delve into the world of colors. With 10 questions, participants will need to swiftly determine the hues that emerge from mixing two given colors. A vivid test of perception, only the top 3 will continue their colorful journey!
            </p>
            <p>
              📷 <b>LEVEL 3: Guess the Pixelated Image</b> 📷<br/>
              The ultimate showdown! In the final round, participants face pixelated images of animals and famous personalities. With 6 questions and a keen eye, they must decipher the hidden gems within these images. The race to the finish line is on, and the winner will emerge from this thrilling pixelated maze!
            </p>
            <p>
              🏆 <b>Rules for the Brave</b> 🏆<br/>
              1. Silence is golden during Level 1 – no unnecessary sounds allowed!<br/>
              2. Quick hands, sharp minds – Level 2 and 3 will test your reflexes.<br/>
              3. No gadgets, no asking for help – it's an individual battle of wits.<br/>
              4. Our host's decision is the final word. No arguments allowed, just pure brain-twisting fun!
            </p>
            <p>
              Join us for an electrifying competition that will challenge, engage, and entertain. "Twist Your Brain" is more than just a competition; it's a mental adventure that will leave you buzzing with excitement.
            </p>
            <p>
              Who will emerge as the ultimate thinker, the grandmaster of puzzles, and the conqueror of the brain-twisting challenges? Join us and find out! 🎉🧠
            </p>
            <p>
              📆 <b>Date:</b> <b>17/11/2023</b><br/>
              <b>📍Venue:</b> Classroom<br/>
              <b>🥇First:</b> 500<br/>
              <b>🥈Second:</b> 250<br/>
              <b>Registration fee:</b> 20<br/>
              <b>Coordinators:</b> Khulood & Naveen<br/>
              <b>📞Contact:</b> +91 85901 23899
            </p>
          </div>
        ),
        poster: TwistYourBrainPoster,
      },
      {
        title: "Hop On",
        googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSculZOxy0OCcbyGJLfWWJthU9PsrH39_3JTvQANIX-Eo2Ov6A/viewform",
        description: (
          <div>
  <b>HOP ON</b>
  <p>Get ready for the Ultimate Team Challenge! 🎮</p>

  <b>Event Details:</b>
  <p>Date: 18-11-2023</p>
  <p>Location: Outdoors</p>

  <b>Game Rules:</b>
  <p>Two Rounds: Preliminary and Final.</p>
  <p>16 teams can partake in the Preliminary round.</p>
  <p>2 members per team, 8 teams in the final round.</p>
  <p>40-block gameboard to the finish.</p>
  <p>Categories: Riddles and fun type of questions.</p>
  <p>Teamwork is key!</p>

  <b>For inquiries and registration:</b>
  <p>📞 Ardra: +91 62383 93086</p>
  <p>📞 Aadith: +91 94952 68368</p>

  <b>Gameplay:</b>
  <p>Team members who roll the dice should answer the questions.</p>
  <p>Dice roll decides the turn order.</p>
  <p>60-seconds time limit to answer the question.</p>
  <p>Incorrect answers move back, correct answers move forward.</p>
  <p>First to finish or go farthest wins.</p>
</div>

        ),
        poster: HopOnPoster,
      },
      {
        title: "Prompt Master",
        googleFormURL:"https://docs.google.com/forms/d/e/1FAIpQLSd6QGCcv1NS4ZnymnQn4hYj7FJJRuSmF1fsAUfAhGOvt5Q3KA/viewform",
        description: (
          <div>
            <p>
              <b>Prompt Master ✏️:</b> Where Creativity Takes Flight 🚀
            </p>
            <p>
              Unleash your imagination and discover endless writing possibilities with Prompt Master, the ultimate tool for generating captivating prompts. 🧠
            </p>
            <p>
              Welcome to the 🧑‍💻<b>"PROMPT MASTER"</b> competition, where your ability to craft a compelling romp will be put to the test! In this challenge, participants will be tasked with transforming a well-written prompt into a functional website using HTML, CSS.
            </p>
            <p>
              <b>Competition Overview:</b>
            </p>
            <ul>
              <li>
                Participants will receive a question according to the question write prompt in gpt and translate it into a fully functional website using HTML and CSS.
              </li>
              <li>
                Creativity in design and functionality is highly encouraged.
              </li>
            </ul>
            <p>
              📝<b>Rules:</b>
            </p>
            <ul>
              <li>
                All submitted prompts and website code must be original and not copied from existing sources.
              </li>
              <li>
                All content must comply with legal and ethical standards. Offensive, discriminatory, content will result in disqualification.
              </li>
              <li>
                Judges' decisions are final and binding.
              </li>
            </ul>
            <p>
              <b>Event Details:</b>
            </p>
            <ul>
              <li>
                🗓️ Date: 18/11/2023
              </li>
              <li>
                📍 Venue: Lab 1
              </li>
            </ul>
            <p>
              <b>Judges' decisions are final and binding.</b>
            </p>
            <p>
              🏆<b>Grab your prizes!</b>
            </p>
            <ul>
              <li>
                1st Place: 500/-
              </li>
              <li>
                2nd Place: 250/-
              </li>
            </ul>
            <p>
              📝<b>Registration:</b>
            </p>
            <p>
              Ready to compete? Secure your spot now! Entry Fee: 20/-
            </p>
            <p>
              For further details, contact event coordinators:
            </p>
            <ul>
              <li>
                Justin James: 8075512624
              </li>
              <li>
                Nandhana A: 8590058476
              </li>
            </ul>
          </div>
        ),
        poster: PromptMasterPoster,
      },
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
      {contentLoaded ?
      /*{contentLoaded ? */ //Render LoadingScreen or the content based on contentLoaded state
        (
        <>
      <header >
        <Analytics/>
      
        <Navigation scores={scores}/> {/* Include the Navigation component here */}
        <section className="obcy-head" data-aos="fade-up" style={{ marginTop: '-5%',marginBottom: '-12%' }}>
        <h1> <img src={logoimg} alt={text} /></h1>
        </section>
        
        {/* Add more content, event details, and sections as needed */}
      </header>
      <section className="mascot-introduction" data-aos="fade-up">
        <h2>Our Mascots</h2>
        <p>
          Meet our majestic mascots, each with a unique personality and
          incredible talents. These four extraordinary creatures are the heart
          and soul of Obcyfest 2023, and they can't wait to share their stories
          with you.
        </p>
      </section>
      <section className="mascots">
      <div className="mascotmega"data-aos="fade-right">
      <div className="mascot" >
        <h2>Points:{scores[0]}</h2>
          <h2>S1</h2>
        
          <img src={Mascot1} alt="Mascot 1" />
          
          <p className="explanation" >
            <p>
              I am Raptorix, the first year mascot. I love to fly high and hack
              into new domains. Learning and exploring are my passions. I am
              always up for some fun and friendship, but don’t underestimate me.
              I can be fierce and competitive when it comes to achieving my
              goals.
            </p>
          </p>
        </div>
      </div>
        
        <div className="mascotmega" data-aos="fade-right">
        <div className="mascot" >
          <h2>Points:{scores[1]}</h2>
          <h2>S3</h2>
         
          <img src={Mascot2} alt="Mascot 2" />
          
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
        </div>
        
        <div className="mascotmega" data-aos="fade-left">
        <div className="mascot" >
          <h2>Points:{scores[2]}</h2>
          <h2>S5</h2>
          
          <img src={Mascot3} alt="Mascot 3" />
          
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
        </div>
        
        <div className="mascotmega" data-aos="fade-left">
        <div className="mascot" >
          <h2>Points:{scores[3]}</h2>
          <h2>S7</h2>
          <img src={Mascot4} alt="Mascot 4" />
          
          
          <p className="explanation">
            <p>
              I am Wyrmix, the fourth year mascot. I love to lead with wisdom
              and inspire with magic. Leading and inspiring are my gifts. I am
              noble and majestic in my presence, but I also care for kindness
              and generosity. I can be a mentor and a guardian for all.
            </p>
          </p>
        </div>
        </div>
        
      </section>
      <br></br>
      
      <br></br>
      <br></br>
      <section id="events" data-aos="fade-up"></section>
      <br></br>
      <br></br>
      <br></br>
      
      <section className="events-intro" data-aos="fade-up">
        <h2>Our Events</h2>
        <p>Take a look at our various events for this year's Obcyfest 2k23.</p>
      </section>
      <section className="event-posters" >
        {events.map((event, index) => (
          <div className="poster" key={index} data-aos="fade-up">
            <img
              src={event.poster}
              alt={`Event Poster ${index}`}
              onClick={() => openEventDetails(event)}
            />
            <div className="register-button1" onClick={() => openEventDetails(event)}><h3 >{event.title}</h3></div>
          </div>
        ))}
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="sponsors" data-aos="fade-up">
        <h2>Thank You!</h2>
        <p>A huge thank you for making this event possible. <br></br>We extend our heartfelt gratitude to our sponsor,TechKnowFactory<br></br> and partners,IEDC and IIC <br></br>for their invaluable support and contributions.</p>

        
          <div className="sponsorclass" data-aos="fade-up"><h2>Our Sponsor</h2><br></br><br></br><img src={sponsor} alt="Sponsor" /></div>
          <br></br>
          <br></br>
          <div className="partnerclass" data-aos="fade-up" ><h2>Our Partners</h2><div className="partner-logo1" data-aos="fade-up">
      <img src={partner1} alt="Partner 1" />
    </div>
    <div className="partner-logo2" data-aos="fade-up">
      <img src={partner2} alt="Partner 2" />
    </div></div>
  
      </section>

      {showEventDetails && (
        <EventDetails
          onClose={closeEventDetails}
          title={selectedEvent.title}
          description={selectedEvent.description}
          poster={selectedEvent.poster} // Pass the poster image
          googleFormURL={selectedEvent.googleFormURL}
        />
      )}


<footer>&copy; 2023 Obcydians CCET</footer>
</>
) : (
  <LoadingScreen />
  )}
    </div>
  );
}

export default App;