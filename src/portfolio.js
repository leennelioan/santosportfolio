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
  username: "Leennel Ioan",
  title: "Hi, I'm Ioan",
  subTitle: emoji(
    "An aspiring Data Analyst with experience in data cleaning and exploratory data analysis, passionate about transforming raw data into meaningful insights. Eager to apply analytical skills, develop data-driven solutions, and continuously learn new tools and techniques to support informed decision-making."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pBblVeDIIojn14jfyrOl2EGmqLBWq7Sf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/leennelioan",
  linkedin: "https://www.linkedin.com/in/ioansantos/",
  gmail: "saint.leennel@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING DATA ANALYST PASSIONATE ABOUT TURNING DATA INTO ACTIONABLE INSIGHTS",
  skills: [
    emoji(
      "📊 Clean and preprocess raw data to ensure accuracy, consistency, and reliability"
    ),
    emoji("🔍 Perform Exploratory Data Analysis (EDA) to identify trends, patterns, and relationships"),
    emoji(
      "📈 Create data visualizations and dashboards to communicate insights effectively"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "PowerBI",
      fontAwesomeClassname: "fas fa-chart-pie"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
 schools: [
    {
      schoolName: "Lyceum of the Philippines University - Cavite",
      logo: require("./assets/images/lpuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - August 2026",
      desc:  "Developed a strong foundation in programming, data analysis, and database management.",
      descBullets: [
        "EAST WEST IESI - Certified Artificial Intelligence Professional (CAIP)",
        "Certiport IT Specialist - Databases Passer",
        "Cisco - English for IT 1 Completer",
        "Achieved a TOEIC score of 880 (CEFR Level B2).",
        "Dean's Lister for the Academic Year 2025-2026",
        "Served as President for 3 academic years and Secretary for 1 academic year."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & SQL", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Excel",
      progressPercentage: "60%"
    },
        {
      Stack: "Tableau & PowerBI",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quality Assurance Intern",
      company: "NOAH Business Applications",
      companylogo: require("./assets/images/nba.jpg"),
      date: "July 2025 – August 2025",
      desc: "Supported software quality assurance by preparing and executing test cases, validating financial consolidation modules, documenting software defects, and performing re-testing to verify system functionality and compliance with requirements.",
      descBullets: [
        "Executed Business Requirements Testing (BRTS) across 2 financial consolidation systems, validating module functionality and identifying issues in financial reporting and consolidation workflows.",
        "Prepared and updated BRTS test documentation for 4 modules to support systematic software testing.",
        "Identified and documented software defects across multiple modules, supporting issue tracking and resolution.",
        "Performed re-testing and verification of previously tested modules, reviewing test results and updating test documentation to help ensure functionality met the specified requirements."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME INDIVIDUAL PROJECTS I MADE TO SHOW MY LEARNING AND SKILLS",
  projects: [
    {
      image: require("./assets/images/covid.jpg"),
      projectName: "Covid-19 Data Exploration",
      projectDesc: "An analysis of COVID-19 data to understand trends and patterns.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/leennelioan/DataAnalysisProjects/blob/main/SQL%20Projects/CovidProject.sql"
        },
        {
          name: "Tableau Dashboard",
          url: "https://public.tableau.com/app/profile/leennel.ioan.santos/viz/CovidProject_17927423197820/Dashboard1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/layoffs.webp"),
      projectName: "Global Layoffs Data Cleaning",
      projectDesc: "Cleaning and standardizing global layoffs data using MySQL.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "http://https://github.com/leennelioan/DataAnalysisProjects/blob/main/SQL%20Projects/Data%20Cleaning%20Project.sql.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Bitcoin.svg.webp"),
      projectName: "Cryptocurrency API Automation",
      projectDesc: "Automating cryptocurrency data collection using Python and APIs.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/leennelioan/DataAnalysisProjects/blob/main/Python%20Projects/Automating%20Website%20using%20API/Automating%20Crypto%20Website%20API.ipynb"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Amazon_icon.png"),
      projectName: "Amazon Web Scraping",
      projectDesc: "Extracting and tracking product prices using Python web scraping.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/leennelioan/DataAnalysisProjects/blob/main/Python%20Projects/Web%20Scraping/Amazon%20Web%20Scraper%20Project.ipynb"
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
    "Achievements, Certifications, Awards that I have earned during my Academic Years",

  achievementsCards: [
    {
      title: "Certified Artificial Intelligence Professional",
      subtitle:
        "Demonstrated knowledge of Python programming and fundamental Artificial Intelligence concepts.",
      image: require("./assets/images/caip.png"),
      imageAlt: "caip",
      footerLink: [
        {
          name: "Certification",
          url: "https://east-west-iesi.trainercentralsite.com/credential-validation?credentialId=5P3HXA63L3FTV"
        }
      ]
    },
    {
      title: "Certiport IT Specialist Databases",
      subtitle:
        "Demonstrated proficiency in database concepts, SQL, and database management using MySQL.",
      image: require("./assets/images/certiport.png"),
      imageAlt: "certiport",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/540d137f-fcce-4638-a5ed-08d3ef919f06/public_url"
        }
      ]
    },

    {
      title: "Cisco English for IT 1",
      subtitle: "Completed a course that teaches the English language in a specific IT context at the B2 Proficiency Level.",
      image: require("./assets/images/engforit.png"),
      imageAlt: "Cisco English for IT 1",
      footerLink: [
        {name: "Badge", url: "https://www.credly.com/badges/c78dfe39-b744-4c00-bab4-6e753d2a4c6e/public_url"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to Data Analyst opportunities and collaborations. Feel free to reach out!",
  number: "0921 997 7438",
  email_address: "saint.leennel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
