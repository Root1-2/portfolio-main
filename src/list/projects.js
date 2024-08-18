const projectPath = "/projectScreenshot/";

const projects = [
  {
    id: "1",
    name: "Forumium",
    thumbnail: "/projectThumbnail/Forumium.png",
    tools: "React, Tailwind, React Query, Supabase",
    type: "Full Stack",
    description:
      "Designed and developed a forum application using React, Tailwind CSS, Supabase Database and many react libraries. enabling users to create posts, comments, profiles and building communities.",
    github: "https://github.com/Root1-2/Forumium-React-Version-",
    live: "https://forumium.vercel.app/",
    screenshots: `${projectPath}forumium1.png|${projectPath}forumium2.png|${projectPath}forumium3.png|${projectPath}forumium4.png|${projectPath}forumium5.png|${projectPath}forumium6.png`,
    created: "August 7th, 2024",
    features:
      "User Authentication/Creating a Post/Replying to post/Editing a post/Deleting a post/Edit replies/Delete replies",
  },
  {
    id: "2",
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
  },
  {
    id: "3",
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
  },
  {
    id: "4",
    name: "Forumium 0.1",
    thumbnail: "/projectThumbnail/Forumium0.1.png",
    tools: "HTML, CSS, JavsScript, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Designed and developed a forum application using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL enabling users to create posts, comments, profiles and building communities.",
    github: "https://github.com/Root1-2/Forumium-Final",
    // live: "link",
    screenshots: `${projectPath}forum1.png|${projectPath}forum2.png|${projectPath}forum3.png|${projectPath}forum4.png|${projectPath}forum5.png|${projectPath}forum6.png|`,
    created: "July 28th, 2023",
    features:
      "User Authentication/Browser Posts/Search Posts/Filter Posts/Create Post/Reply to posts/Edit or Delete Posts/",
  },
  {
    id: "5",
    name: "NextSteps",
    thumbnail: "/projectThumbnail/NextSteps.png",
    tools: "HTML, CSS, JavaScript, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Designed and developed a consultancy application using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL enabling user to search courses, create applications for university enrollment, creating profile.",
    github: "https://github.com/aimanazadkhan/Nextsteps",
    // live: "link",
    screenshots: `${projectPath}next1.png|${projectPath}next2.png|${projectPath}next3.png|${projectPath}next4.png|${projectPath}next5.png|${projectPath}next6.png|${projectPath}next7.png|`,
    created: "Work in Progress",
    features:
      "User Authentication/Admin Authentication/Search Courses/Enroll Courses/Create Profile/Admin Panel/Sub-Admin Panel",
  },
  {
    id: "6",
    name: "Web Authentication",
    thumbnail: "/projectThumbnail/WebAuth.png",
    tools: "HTML, Bootstrap, PHP, MYSQL",
    type: "Full Stack",
    description:
      "Programmed a web authentication system, designed using HTML, CSS + Bootstrap, JavaScript, PHP, MYSQL, comprised of Login, Registration with email verification (PHPMailer), Admin Panel.",
    github: "https://github.com/Root1-2/Web-Authentication",
    // live: "link",
    screenshots: "imgPath",
    created: "Work in Progress",
  },
  {
    id: "7",
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
  },
  {
    id: "8",
    name: "Android Authentication",
    thumbnail: "/projectThumbnail/androidAuth.jpg",
    tools: "Flutter, Dart, Firebase",
    type: "Full Stack",
    description: "Ipsum Lorem",
    github: "link",
    // live: "link",
    screenshots: "imgPath",
    created: "March 10th, 2023",
  },
  {
    id: "9",
    name: "Canteen Management",
    thumbnail: "/projectThumbnail/CanteenMan.png",
    tools: "Java, Java Swing, OOP",
    type: "Front-End",
    description:
      "This project aims to develop a user-friendly management system for our university's canteen, addressing the lack of an existing system. The goal is to streamline operations by allowing staff to efficiently track inventory and generate bills with minimal effort, ultimately reducing manual labor and improving overall management.",
    github: "https://github.com/Root1-2/CanteenSystem/tree/main/CanteenSystem",
    // live: "link",
    screenshots: "imgPath",
    created: "February 10th, 2022",
  },
];

export default projects;
