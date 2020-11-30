
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Andrei Ilici",
  title: "Hi all, I'm Andrei",
  subTitle: emoji("Aspiring Data Engineer, experienced in creating Python application deployed on AWS. Problem solver interested in answering business questions using data."),
  resumeLink: "https://drive.google.com/file/d/1nsmFetvImOfeZmGpWrfE02AAm1WFR4Gn/view"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Andrei-Ilici",
  linkedin: "https://www.linkedin.com/in/andrei-ilici/",
  gmail: "andrei.ilici29@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/6199864/andrei-ilici"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji("⚡ Clean large datasets and process data to analyse"),
    emoji("⚡ Start-to-end AWS infrastructure build"),
    emoji("⚡ Interested in Data Visualisation")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python", 
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "SQL databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "far fa-snowflake"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-mountain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-copyright"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Serverless",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Testing",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Linux ",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Loughborough University, United Kingdom",
      logo: require("./assets/images/Lborologo.png"),
      subHeader: "BEng Aeronautical Engineering (Hons)",
      duration: "October 2017 - July 2020",
      desc: "Aeronautical Engineering department (Peer Mentor), Romanian Society (Secretary), LSU Action (Volunteer)",
      descBullets: [
        "Final year project ('Performance analysys of Saab 340B') research conducted using MATLAB",
        "Evaluated data set of various car sensors in MATLAB and proposed alghoritm improvements"
      ]
    },
    {
      schoolName: "Bogdan Petriceicu Hasdeu National College, Romania",
      logo: require("./assets/images/logoHasdeu.jpg"),
      subHeader: "Mathematics and Computer Science with Further English",
      duration: "September 2013 - May 2017",
      desc: "Romanian Baccalaureate (overall 9.13 out of 10) - Romanian language, Mathematics, Physics",
      descBullets: [
        "Participated in a 2-week international exchange in the Netherlands ",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Andrei-Ilici", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Organisations",
  subtitle: "Participant in a 12-week Data Engineering programme organised by Generation and Infinity Works",
  projects: [
    {
      image: require("./assets/images/Generation.jpg"),
      link: "https://uk.generation.org/birmingham/data-engineering/"
    },
    {
      image: require("./assets/images/InfinityWorks.jpg"),
      link: "https://infinityworks.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Main Projects and Certifications "),
  subtitle: "Projects, achievements and some stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Pipeline",
      subtitle: "Team project. Built ETL infrastructure for a cafe chain ingesting 150.000 orders a day via S3 and Kinesis. ETL Lambdas processes and sends it using SQS messages to Redshift database for storage. Business analysis conducted with Quicksight. Monitoring managed with Cloudwatch and Grafana.",
      image: require("./assets/images/pipeline.jpg"),
      footerLink: [
        { name: "Github repo", url: "https://github.com/data-engineering-bir-1/team-3-project" },
        { name: "Website", url: "https://infinityque0.wixsite.com/project" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "iBrew",
      subtitle: "Local Bartender GUI app developed using Python and Tkinter. Built on OOP concepts. Data stored in mySQL database. Matplotlib module graphs consumer purchase behaviour.",
      image: require("./assets/images/bar.png"),
      footerLink: [{ name: "Github repo", url: "https://github.com/Andrei-Ilici/iBrew" }]
    },

    {
      title: "Historic airplane crash data ",
      subtitle: "Evaluates airplane crashes around the world starting 1908. Matplotlib, Pandas and Seaborn modules used for data processing and visualisation.",
      image: require("./assets/images/crashmap.png"),
      footerLink: [
        // { name: "Certification", url: "" },
        { name: "Jupyter notebook (soon)", url: "https://www.kaggle.com/cgurkan/airplane-crash-data-since-1908" }
      ]
    }
  ]
};

// Blogs Section

// Talks Sections

// Podcast Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a career opportunity or just want to say hi? My Inbox is open.",
  number: "+44-7384-745-281",
  email_address: "andrei.ilici29@gmail.com"
};

//Twitter Section

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo};
