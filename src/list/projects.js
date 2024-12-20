const projectPath = "/projectScreenshot/";

const projects = [
  {
    id: 1,
    name: "Forumium",
    thumbnail: "/projectThumbnail/Forumium.png",
    tools: "React, Tailwind, React Query, Supabase",
    type: "Full Stack",
    description:
      "Designed and developed a forum application using React, Tailwind CSS, Supabase Database and many react libraries, enabling users to create posts, comments, profiles and building communities.",
    github: "https://github.com/Root1-2/Forumium-React-Version-",
    live: "https://forumium.vercel.app/",
    screenshots: `${projectPath}forumium1.png|${projectPath}forumium2.png|${projectPath}forumium3.png|${projectPath}forumium4.png|${projectPath}forumium5.png|${projectPath}forumium6.png`,
    created: "August 7th, 2024",
    features:
      "User Authentication/Creating a Post/Replying to post/Editing a post/Deleting a post/Edit replies/Delete replies/Realtime Posts & Replies",
    category: "full",
  },
  {
    id: 15,
    name: "Hotel Management",
    thumbnail: "/projectThumbnail/hotelMan.png",
    tools: "Next.Js, Tailwind, Auth.Js(Google Provider), Supabase",
    type: "Full Stack",
    description:
      "Designed and manufactured a hotel management website using Next.Js, Tailwind CSS, Supabase Database, Auth.Js and various React & Next.Js libraries, enabling users to create reservation, edit their reservatoin, delete reservation before their booking dates.",
    github: "https://github.com/Root1-2/hotel-management-0.1",
    live: "https://hotelmanage.vercel.app/",
    screenshots: `${projectPath}hotelMan1.png|${projectPath}hotelMan2.png|${projectPath}hotelMan3.png|${projectPath}hotelMan4.png|${projectPath}hotelMan5.png|${projectPath}hotelMan6.png|${projectPath}hotelMan7.png`,
    created: "October 12th, 2024",
    features:
      "User Authentication/Creating a reservation/Edit a Reservation/Delete a reservation/All changes only applicable before booking data/Edit Profile/Mobile Responsive Design",
    category: "full",
  },
  {
    id: 1532,
    name: "Workium",
    thumbnail: "/projectThumbnail/workium.jpg",
    tools: "Laravel, Blade, Alpine.js, Tailwind, PostgreSQL",
    type: "Full Stack",
    description:
      "Designed and manufactured a simple yet efficient job finding platform where user can find various jobs suitable for his skills. Furthermore, user can add his own job listings for other to find.",
    github: "https://github.com/Root1-2/workium",
    // live: "https://hotelmanage.vercel.app/",
    screenshots: `${projectPath}workium1.jpg|${projectPath}workium2.jpg|${projectPath}workium3.jpg|${projectPath}workium4.jpg|${projectPath}workium5.jpg|${projectPath}workium6.jpg`,
    created: "October 26, 2024",
    features:
      "User Authentication/Creating a Job/Bookmark Jobs/Edit Profile/Apply for a Job/Delete Application (Applicable for job creator)/Search Job/Mobile Responsive Design",
    category: "full",
  },
  {
    id: 2,
    name: "Fast Pizza",
    thumbnail: "/projectThumbnail/Fastpizza.png",
    tools: "React, Tailwind, Redux",
    type: "Front-End",
    description:
      "Developed a pizza ordering system using React, Tailwind CSS and many React Libraries includes Cart System, searching order, creating a temporary account, filtered pizza menus.",
    github: "https://github.com/Root1-2/Fast-React-Pizza",
    live: "https://foodfastpizza.vercel.app/",
    screenshots: `${projectPath}pizza1.png|${projectPath}pizza2.png|${projectPath}pizza3.png|${projectPath}pizza4.png|${projectPath}pizza5.png|`,
    created: "July 27th, 2024",
    features:
      "Username for login/Search Pizzas/Cart/Confirm Order from Cart/Order form/Search order from Order ID/Quantity Manage",

    category: "full",
  },
  {
    id: 221,
    name: "Root Player",
    thumbnail: "/projectThumbnail/rootPlayer.jpg",
    tools: "Electron, React, Tailwind",
    type: "Front-End",
    description:
      "Developed a music player system using React, Electron, Tailwind CSS and many React & Electron Libraries includes queue system for songs, sorting songs by multiple options, dashboard for statistics of songs details such as most played, amount of time played, most favorite arists etc.",
    github: "",
    live: "",
    screenshots: ``,
    created: "",
    features:
      "Music Player/Multiple sorting options/Queue/Equalizer/Dashboard for stats/Search songs/Song ratings",
    unavailable: true,
    category: "full",
  },
  {
    id: 3,
    name: "NexusHealth",
    thumbnail: "/projectThumbnail/Nexus.png",
    tools: "HTML, CSS, JavaScript, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Developed a comprehensive medical system using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL includes Doctor Appointment, Blood Bank, E-Pharmacy, Self-Diagnosis & Admin Panel.",
    github: "https://github.com/Root1-2/NexusHealth/tree/main/NexusHealth",
    // live: "link",
    screenshots: `${projectPath}nexus1.png|${projectPath}nexus2.png|${projectPath}nexus3.png|${projectPath}nexus4.png|${projectPath}nexus5.png|${projectPath}nexus6.png|${projectPath}nexus7.png|${projectPath}nexus8.png|${projectPath}nexus9.png|${projectPath}nexus10.png|${projectPath}nexus11.png|${projectPath}nexus12.png|${projectPath}nexus13.png|${projectPath}nexus14.png`,
    created: "February 28th, 2024",
    features:
      "User Authentication/Forgot Password/Doctor Appointment/Blood Bank/Self-Diagnosis/Med-Corner/E-Pharmacy/Payment Methods/Creating Profile/Admin Panel for Management",
    category: "full",
  },
  {
    id: 4,
    name: "Forumium 0.1",
    thumbnail: "/projectThumbnail/Forumium0.1.png",
    tools: "HTML, CSS, JavsScript, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Designed and developed a forum application using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL enabling users to create posts, comments, profiles and building communities.",
    github: "https://github.com/Root1-2/Forumium-Final",
    // live: "link",
    screenshots: `${projectPath}forum1.png|${projectPath}forum2.png|${projectPath}forum3.png|${projectPath}forum4.png|${projectPath}forum5.png|${projectPath}forum6.png`,
    created: "July 28th, 2023",
    features:
      "User Authentication/Browser Posts/Search Posts/Filter Posts/Create Post/Reply to posts/Edit or Delete Posts/",
    category: "full",
  },
  {
    id: 5,
    name: "NextSteps",
    thumbnail: "/projectThumbnail/NextSteps.png",
    tools: "HTML, CSS, JavaScript, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Designed and developed a consultancy application using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL enabling user to search courses, create applications for university enrollment, creating profile.",
    github: "https://github.com/aimanazadkhan/Nextsteps",
    // live: "link",
    screenshots: `${projectPath}next1.png|${projectPath}next2.png|${projectPath}next3.png|${projectPath}next4.png|${projectPath}next5.png|${projectPath}next6.png|${projectPath}next7.png`,
    created: "Work in Progress",
    features:
      "User Authentication/Admin Authentication/Search Courses/Enroll Courses/Create Profile/Admin Panel/Sub-Admin Panel",
    category: "full",
  },

  {
    id: 7,
    name: "Virtual Aid",
    thumbnail: "/projectThumbnail/Virtualaid.png",
    tools: "Flutter, Dart, Firebase",
    type: "Full Stack",
    description:
      "Crafted an android application using Flutter, Firebase & various widgets comprised of user authentication, doctor appointments, blood bank, medicine reminders and emergency ambulance.",
    github: "https://github.com/Root1-2/Virtual_Aid",
    // live: "link",
    screenshots: "imgPath",
    created: "February 27th, 2023",
    features:
      "User Authentication/Blood Bank/Doctor Appointment/Ambulance Caller/Medicine Reminder/Profile Create",
    category: "full",
  },
  {
    id: 6,
    name: "Web Authentication",
    thumbnail: "/projectThumbnail/WebAuth.png",
    tools: "HTML, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Programmed a web authentication system, designed using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL, comprised of Login, Registration with email verification (PHPMailer), Admin Panel.",
    github: "https://github.com/Root1-2/Web-Authentication",
    // live: "link",
    screenshots: `${projectPath}webAuth1.png|${projectPath}webAuth2.png|${projectPath}webAuth3.png|${projectPath}webAuth4.png|${projectPath}webAuth5.png|`,
    created: "Work in Progress",
    features: "User Authenticaion/User Verification from Email/Admin Approval",
    category: "full",
  },
  {
    id: 8,
    name: "Android Authentication",
    thumbnail: "/projectThumbnail/androidAuth.jpg",
    tools: "Flutter, Dart, Firebase",
    type: "Full Stack",
    description:
      "Programmed a android authentication system, build using Flutter, Dart & Firebase comprised of Login, Registration with email verification.",
    github: "link",
    // live: "link",
    screenshots: "imgPath",
    created: "March 10th, 2023",
    features: "Login/Registration/Change Password",
    category: "full",
  },

  // Side
  {
    id: 9,
    name: "Canteen Management",
    thumbnail: "/projectThumbnail/CanteenMan.png",
    tools: "Java, Java Swing, OOP",
    type: "Front-End",
    description:
      "This project aims to develop a user-friendly management system for our university's canteen, addressing the lack of an existing system. The goal is to streamline operations by allowing staff to efficiently track inventory and generate bills with minimal effort, ultimately reducing manual labor and improving overall management.",
    github: "https://github.com/Root1-2/CanteenSystem/tree/main/CanteenSystem",
    // live: "link",
    screenshots: `${projectPath}canteen1.png|${projectPath}canteen2.png|${projectPath}canteen3.png|${projectPath}canteen4.png|${projectPath}canteen5.png|${projectPath}canteen6.png`,
    created: "February 10th, 2022",
    features:
      "User Authentication/Browse Food/Food Order/Create Receipt/Manage Stuff",
    category: "side",
  },
  {
    id: 10,
    name: "React Form Hook",
    thumbnail: "/projectThumbnail/formHook.png",
    tools: "React, Tailwind CSS, React Form Hook",
    type: "Front-End",
    description:
      "This small project was made for my practice of the usage of react form hook provided by React to manage form data.",
    github: "https://github.com/Root1-2/form-hook",
    live: "https://form-hook-mocha.vercel.app/",
    screenshots: `${projectPath}formHook1.png|${projectPath}formHook2.png`,
    created: "September 13th, 2024",
    features: "Varied Form/Multiple Fields/Multiple Validation",
    category: "side",
  },
  {
    id: 11,
    name: "Currency Converter",
    thumbnail: "/projectThumbnail/curCon.png",
    tools: "React, CSS, UseState, API Fetch",
    type: "Front-End",
    description:
      "This mini project was developed for the practice usage of UseState Hook, API Fetching, asyncronous use.",
    github: "https://github.com/Root1-2/currency-converter",
    live: "https://currency-converter-theta-ruddy.vercel.app/",
    screenshots: `${projectPath}curCon1.png|${projectPath}curCon2.png`,
    created: "July 14th, 2024",
    features: "Currency Conversion",
    category: "side",
  },
  {
    id: 12,
    name: "Calculator",
    thumbnail: "/projectThumbnail/calculatorReact.png",
    tools: "React, CSS, useState",
    type: "Front-End",
    description:
      "My first react project developed for the practice for using React useState hook provided by React",
    github: "https://github.com/Root1-2/calculator",
    live: "https://calculator-eosin-ten-13.vercel.app/",
    screenshots: `${projectPath}calculatorReact1.png|${projectPath}calculatorReact2.png|${projectPath}calculatorReact3.png`,
    created: "July 7th, 2024",
    features: "Multiple Arithmetic Conversion",
    category: "side",
  },
];

export default projects;
