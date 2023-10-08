/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AbhiDev",
  title: "Hi all, I'm Abhishek",
  subTitle: emoji(
    "A passionate Data Science Engineer 🚀  with an insatiable curiosity for uncovering hidden insights. I embark on each data set like a treasure hunt, seeking the gems of knowledge buried within. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ARWmfLb8nfpmZvhk_BEgPHWf2j90EVCD/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abhisheks-Workspace",
  linkedin: "https://www.linkedin.com/in/abhishek-sharma-b3b965178/",
  gmail: "abhishekjps168@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100006304566851",
  medium: "https://medium.com/@abhishekjps168",
  stackoverflow: "https://stackoverflow.com/users/21421408/abhishek-sharma",
  kaggle: "https://www.kaggle.com/abhiiisheksharma",
  instagram: "https://www.instagram.com/the_abhi_factor",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DATA SCULPTOR, MOLDING RAW DATA INTO INTRICATE WORKS OF ANALYTICAL ART.",
  skills: [
    emoji(
      "⚡ Craft data-driven solutions with advanced techniques, enhancing your applications."
    ),
    emoji("⚡ Data science mastery: from machine learning to actionable insights."),
    emoji(
      "⚡ Expert in analyzing data, building predictive models, and uncovering valuable insights."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Jupyter Notebook",
      fontAwesomeClassname: "fa fa-book"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fa fa-table"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fa fa-file"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fa fa-file-excel"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "SCSS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Web Scraping",
      fontAwesomeClassname: "fa fa-globe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr. Babasaheb Ambedkar Technological University, Lonere",
      logo: require("./assets/images/dbatuLogo.png"),
      subHeader: "B.Tech degree in Electronics and Telecommunication Engineering",
      duration: "February 2020 - March 2024",
      desc: "Current CGPA: 8.34",
      descBullets: [
        "Runner-up of 15th Maharashtra State Inter-University Reseacrch Convention i.e AAVISHKAR 2023 held at Savitribai Phule Pune University",
        "Winner of POSCO Asia Fellowship, 2023",
        "GDSC Lead appointed by Google for DBATU, Lonere.",
      ]
    },
    {
      schoolName: "Jindal Vidya Mandir, Salav",
      logo: require("./assets/images/jvmLogo.png"),
      subHeader: "HSC and SSC",
      duration: "2018 - 2020",
      desc: "Completed my HSC and SSC from CBSE Board with 85% and 76.2% respectively.",
      descBullets: ["Secured AIR 1 in International Level Essay Competetetion and also got full sponsorship towards my travel for the National Space Science Conference to be held in NASA, Kennedy Space Centre, USA."]
    }
  ]
};

// Your top 3 proficient Data Science related experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis and Visualization", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Statistical Analysis and Hypothesis Testing",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "DBATU Forum of Innovation and Incubation Enterprise (DFIIE)",
      companylogo: require("./assets/images/dfiie.png"),
      date: "Aug 2023 – Sept 2023",
      desc: "Led the design and development of a feature-rich React.js website, prioritizing user experience. Implemented SEO strategies, boosting organic traffic. Managed end-to-end hosting, ensuring optimal performance. Collaborated with teams to align projects with goals and proactively enhanced user engagement through data-driven improvements.",
      descBullets: [
        <a href="https://dbatuiiec.com">Website Link of DFIIE</a>,
        <a href="https://drive.google.com/file/d/1AT2GNwoeplLDcGerZiShjIT809TGs9Jp/view?usp=sharing">Recommendation Letter</a>
      ]
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Fizito Digital Services",
      companylogo: require("./assets/images/fizitoLogo.jpeg"),
      date: "May 2013 – July 2023",
      desc: " I played a pivotal role in bringing an EdTech Startup Website to life. I orchestrated server-side functionality using Node.js and Express.js while employing MongoDB for robust database storage. Simultaneously, I crafted a user-friendly interface with React to enhance the platform's usability.",
      descBullets: [
        <a href="https://www.fizitodigital.com/">Website Link of Fizito</a>,
        <a href="https://drive.google.com/file/d/1BxecVW_wUNlKmT6CgowtmS1V2PP6hzwc/view?usp=sharing">Completetion Certificate</a>
      ]
    },
    {
      role: "Data Science Intern",
      company: "MAHATRANSCO Ltd.",
      companylogo: require("./assets/images/mahaLogo.png"),
      date: "Dec 2022 – Jan 2023",
      desc: "Applied Data Science to enhance a 220 kV substation. Analyzed real-time sensor data, reducing downtime and improving grid reliability. Developed predictive maintenance models, saving costs and ensuring uninterrupted power supply. Leveraged data insights to optimize energy distribution for efficiency gains.",
      descBullets: [
        <a href="https://drive.google.com/file/d/1ByvvhRbenw90uc2yvJSbArTfgw6XnS4n/view?usp=sharing">Completetion Certificate</a>
      ]
    },
    {
      role: "Python Developer Intern",
      company: "TechEdu",
      companylogo: require("./assets/images/techLogo.jpg"),
      date: "Nov 2021 – Dec 2022",
      desc: "Thrived as a Python Developer Intern, crafting elegant solutions and contributing to real-world projects. Collaborated closely with the team, honed coding skills, and applied Python prowess to create efficient, innovative solutions that added value to the organization.",
      descBullets: [
        <a href="https://drive.google.com/file/d/14q436-xMsAOi66bHQykLStNaxONNPZNz/view?usp=sharing">Completetion Certificate</a>
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dfiie.png"),
      projectName: "DBATU Forum of Innovation and Incubation Website",
      projectDesc: "Developed and delivered a Front-end Website to the DBATU Forum of Innovation and Incubation Enterprise, Lonere which is a Section-8 Company.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dbatuiiec.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/beneLogo.jpeg"),
      projectName: "Benefactars: Your Learning Companion",
      projectDesc: "Developed and delivered a Front-end Website to an Ed-Tech Startup named as Benefactars: Your Learning Companion which is officialy registered under MSME.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Abhisheks-Workspace/Fizito-EdTech-Website"
        }
      ]
    },
    {
      image: require("./assets/images/gas.jpg"),
      projectName: "Gas Leakage Detection and Alerting System",
      projectDesc: "A project that uses an Arduino microcontroller, a gas sensor, a buzzer, and an LCD display to detect the presence of combustible gases, alert the user with sound and visual signals.",
      footerLink: [
        {
          name: "Project Video",
          url: "https://drive.google.com/file/d/1BzGUVjCj0BXBPOkqkLmMiVxSeKQQK2J6/view?usp=sharing"
        },
        {
          name: "Project Report",
          url: "https://drive.google.com/file/d/1BzOwdkVPocN0eYuMffW6srXaIhCY6Bnt/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wildlife.jpg"),
      projectName: "Mitigating Train Collisions with Wildlife: The Efficacy of Alerting Devices",
      projectDesc: "A project that uses an Arduino microcontroller to detect the presence of animals on railway tracks using an infrared sensor and alert the train driver with a buzzer sound.",
      footerLink: [
        {
          name: "Project Video",
          url: "https://drive.google.com/file/d/1C3k55SVswKVTIlIkJlI9QNeHqkFlf4rY/view?usp=sharing"
        },
        {
          name: "Project PPT",
          url: "https://drive.google.com/file/d/1C4HNd7dqYu6fX3KGw26PNRNdH4ZkyXge/view?usp=sharing"
        },
        {
          name: "Project Report",
          url: "https://drive.google.com/file/d/1C03ZbO4oZJyLq8_wgScc58Cm3RAKnrl7/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Winner of AAVISHKAR, 2023",
      subtitle:
        "Runner-up of 15th Maharashtra State Inter-University Research Convention held at Savitribai Phule Pune University.",
      image: require("./assets/images/aavishkar.jpg"),
      imageAlt: "Aavishkar Winner Pic",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14n7pAiw0QnrdVJlsYHxAlF7e3fN1YLCu/view?usp=sharing"
        },
        {
          name: "Gallery",
          url: "https://drive.google.com/drive/folders/1C4em0Q7YgBVFTg_NxkxmP7LPDOGR2hMp?usp=drive_link"
        },
        {
          name: "About Project",
          url: "https://drive.google.com/file/d/1C7QuKInsdjHLFJ1G26KaQWZ4D9evQh_l/view?usp=sharing"
        }
      ]
    },
    {
      title: "Winner of Technoxian: World Robotics Championship (Sr. Innovation Level)",
      subtitle:
        "Secured Second Position for best Innovation at International Level at Indhira Gandhi Stadium, New Delhi.",
      image: require("./assets/images/technoxian.jpg"),
      imageAlt: "Technoxian Winner Photo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/150idE0iavd9cPevVZKsT0athUhEg48HX/view?usp=sharing"
        }
      ]
    },

    {
      title: "Winner of Stratical-The Startup Battle, 2022",
      subtitle: "Secured All India Rank 2 in National Level Inter College Startup Battle Competetion, Gujrat.",
      image: require("./assets/images/stratical.jpeg"),
      imageAlt: "Stratical Winner Photo",
      footerLink: [
        {name: "Certification", 
         url: "https://drive.google.com/file/d/1BOuSiOd45xwHuSAGOw-I2xUQH-E4Y3lY/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "Winner of Earn and Learn Scholarship, 2022 by DBAA",
      subtitle:
        "Provided by DBATU Alumni Association, Winner of Earn and Learn Scholarship, 2022. Represnting them as a DBAA Laureate acting as a bridge between the University and the Alumni Association.",
      image: require("./assets/images/laureate.jpg"),
      imageAlt: "Winner Photo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1517v6IFTM1GTD6jPu8bMGCU2HvEClY8l/view?usp=sharing"
        }
      ]
    },
    {
      title: "GDSC Lead at DBATU, Lonere",
      subtitle:
        "Appointed as Google Developer Student Community Lead by Google at Dr. Babasaheb Ambedkar Technological University, Lonere.",
      image: require("./assets/images/gdsc.png"),
      imageAlt: "GDSC Appointment Letter",
      footerLink: [
        {
          name: "GDSC Profile Link",
          url: "https://g.dev/abhishek11sharma"
        },
        {
          name: "GDSC, DBATU Page",
          url: "https://gdsc.community.dev/dr-babasaheb-ambedkar-technological-university-lonere/"
        }
      ]
    },
    {
      title: "Winner of POSCO Asia Fellowship, 2023",
      subtitle:
        "Awarded the POSCO Asia Fellowship by the POSCO TJ Park Foundation for outstanding academic performance and leadership potential in natural sciences and engineering.",
      image: require("./assets/images/posco.png"),
      imageAlt: "POSCO Winner Photo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.postf.org/en/asia/purpose"
        },
      ]
    },
    {
      title: "Winner of International Space Essay Competetion,2019",
      subtitle:
        "Secured All India Rank 1 in the International Level Essay Competetion and also got full sponsorship towards my travel for the National Space Science Conference to be held in NASA, Kennedy Space Centre, USA.",
      image: require("./assets/images/go4guru.jpg"),
      imageAlt: "Go4Guru Winner Photo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1BTFZcRL-bNhqrBiGjaogD6naD7HHMpB6/view?usp=sharing"
        },
      ]
    },
    {
      title: "Winner of Multiple University Level Competetions",
      subtitle:
        "Winner of University Level Elocution Competetion, Essay Writing Competetion-2022, Paper Presentation Competetion",
      image: require("./assets/images/trophy.webp"),
      imageAlt: "University Level Winner Photo",
      footerLink: [
        {
          name: "Drive Link of Certificates",
          url: "https://drive.google.com/drive/folders/1BUaCXbVdR_9tasoQ5Sru8RZSRjkLUSsL?usp=drive_link"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Innovation based Projects",
  subtitle: emoji(
    "I LOVE TO SHARE MY ABSURD INNOVATIVE IDEAS😅"
  ),

  talks: [
    {
      title: "Plasttastic: Recyled Plastic Shoes",
      subtitle: "Waste Plastic🍶 to Fantastic Shoes👟",
      slides_url: "https://drive.google.com/file/d/1C7QuKInsdjHLFJ1G26KaQWZ4D9evQh_l/view?usp=sharing",
      event_url: "https://drive.google.com/file/d/1CIqjrEGg7XlumoLhaZbtjMaCVZgBiQPd/view?usp=sharing"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7776099647",
  email_address: "abhishekjps168@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AbhishekJPS168", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
