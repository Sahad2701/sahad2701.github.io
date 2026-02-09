/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const publicUrl = process.env.PUBLIC_URL || "";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false, // Set to true to use Lottie, false for phone mockup + photo
  usePhoneMockup: true, // Show profile image inside phone frame
  // Add your portrait: upload portrait.jpg to src/assets/images/ then use:
  // profileImage: require("./assets/images/portrait.jpg")
  profileImage: null // Fallback: Lottie animation shows until you add portrait
};

const greeting = {
  username: "Sahad Kachhawala",
  title: "Hi, I'm Sahad",
  subTitle: emoji(
    "Senior Flutter & Mobile App Engineer | Clean Architecture & Scalable Apps. I build high-quality, performant mobile applications with Flutter/Dart, focusing on clean architecture, state management (BLoC, MVVM), and CI/CD. Experienced in reducing crash rates, shipping features on time, and leading technical decisions."
  ),
  resumeLink: "resume", // Set to "resume" to show Download button (uses resume.pdf in greeting folder)
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sahad2701",
  linkedin: "https://www.linkedin.com/in/sahad-kachhawala/",
  gmail: "sahad.kachhawala@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MOBILE ENGINEERING • CLEAN ARCHITECTURE • FLUTTER & DART",
  skills: [
    emoji("⚡ Build production Flutter apps with clean architecture and scalable state management (BLoC, MVVM)"),
    emoji("⚡ Integrate Firebase, Stripe, REST APIs and third-party SDKs"),
    emoji("⚡ Set up CI/CD with Codemagic, Fastlane, and GitHub Actions for reliable releases")
  ],

  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Dart", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "BLoC", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-rocket" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Stripe", fontAwesomeClassname: "fab fa-stripe" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Figma", fontAwesomeClassname: "fas fa-palette" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false, // Set true and add your schools when ready
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter / Mobile", progressPercentage: "95%" },
    { Stack: "Architecture & State", progressPercentage: "90%" },
    { Stack: "CI/CD & Tooling", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Flutter Developer",
      company: "Logicrays",
      companylogo: require("./assets/images/codeInLogo.webp"), // Replace with company logo if you have one
      date: "2022 – Present",
      desc: "Lead Flutter development for client apps; introduced clean architecture and CI/CD, improving stability and release velocity.",
      descBullets: [
        "Reduced crash rates by ~50% through better error handling and testing",
        "Introduced CI/CD with Codemagic/Fastlane for automated builds and releases",
        "Mentored junior developers and established Flutter best practices"
      ]
    },
    {
      role: "Flutter Developer",
      company: "Space-O Technology",
      companylogo: require("./assets/images/pwaLogo.webp"), // Replace with company logo if you have one
      date: "2020 – 2022",
      desc: "Built and maintained Flutter apps for global clients; integrated payments and analytics.",
      descBullets: [
        "Shipped multiple apps to Play Store and App Store with high ratings",
        "Integrated Stripe and in-app purchases; implemented Firebase Analytics",
        "Collaborated with design and backend teams in an agile setup"
      ]
    },
    {
      role: "Mobile App Developer",
      company: "Siddhi Infosoft",
      companylogo: require("./assets/images/nextuLogo.webp"), // Replace with company logo if you have one
      date: "2018 – 2020",
      desc: "Developed mobile applications using Flutter and native tooling; focused on performance and UX.",
      descBullets: [
        "Delivered 3+ production apps used by thousands of users",
        "Improved app startup time and reduced memory footprint",
        "Worked on REST API integration and offline-first features"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true",
  display: false // Set true and set USE_GITHUB_DATA + GITHUB_USERNAME in .env to show GitHub projects
};

// Featured projects (Fyule Video Lab, Bora Bora, etc.)

const bigProjects = {
  title: "Featured Projects",
  subtitle: "APPS AND PRODUCTS I'VE BUILT AND SHIPPED",
  projects: [
    {
      image: `${publicUrl}/images/fyule-video-lab.png`, // Upload to public/images/
      projectName: "Fyule Video Lab",
      projectDesc: "Educational video creation app for students and teachers. Flutter app with video editing, templates, and sharing. Integrated with backend APIs and media pipelines.",
      footerLink: [
        { name: "App / Demo", url: "https://play.google.com/store/apps/details?id=com.fyule.videolab" },
        { name: "GitHub", url: "https://github.com/Sahad2701" }
      ]
    },
    {
      image: `${publicUrl}/images/bora-bora.png`, // Upload to public/images/
      projectName: "Bora Bora",
      projectDesc: "Travel and discovery app with maps, bookings, and local experiences. Built with Flutter, Firebase, and clean architecture for scalability.",
      footerLink: [
        { name: "Visit / Demo", url: "#" },
        { name: "GitHub", url: "https://github.com/Sahad2701" }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Impact 🏆"),
  subtitle: "Key results and improvements I've driven in products and teams",

  achievementsCards: [
    {
      title: "Stability & Quality",
      subtitle: "Reduced crash rates by ~50% in production apps through better error handling, testing, and monitoring.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Quality",
      footerLink: []
    },
    {
      title: "User Growth",
      subtitle: "Contributed to ~35% user growth in a flagship app via performance improvements and new features.",
      image: require("./assets/images/developerActivity.svg"),
      imageAlt: "Growth",
      footerLink: []
    },
    {
      title: "CI/CD & Releases",
      subtitle: "Introduced CI/CD with Codemagic/Fastlane; cut release time and improved deployment reliability.",
      image: require("./assets/images/jsFramework.svg"),
      imageAlt: "CI/CD",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Thoughts on Flutter, mobile architecture, and shipping apps.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "Talks",
  subtitle: emoji("Speaking and sharing knowledge"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  number: "",
  email_address: "sahad.kachhawala@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Open for opportunities

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
