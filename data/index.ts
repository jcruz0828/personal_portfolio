export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#edu" },
  { name: "Experience", link: "#exp" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I thrive on collaboration — open communication is my foundation for innovation.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible across time zones and platforms — your goals, my mission.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack in Motion",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  }
  ,
  
  {
    id: 4,
    title: "Engineering enthusiast pushing boundaries with deep learning and robotics.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Full-stack development with a focus on data-driven solutions and user experience.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build something impactful together — ready when you are.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Horizon - Financial App",
    des: "Built a secure financial app using the MERN stack, integrating Plaid and Dwolla APIs for banking data access.",
    img: "/auth-image.svg",
    iconLists: ["/mongodb.svg", "/express.svg", "/react.svg", "/nodejs.svg", "/plaid.png"],
    link: "https://github.com/jcruz0828/Horizon",
  },
  {
    id: 2,
    title: "Sparse Simplex Model - Brain Analysis",
    des: "Advanced ML project using gene expression data from Allen Human Brain Atlas to construct brain region similarity graphs with LASSO and Sparse Simplex models.",
    img: "",
    iconLists: ["/python.svg", "/pandas.svg", "/numpy.svg", "/scikit-learn.png"],
    link: "https://github.com/jcruz0828/Sparse-Simplex-Model-Donor-9861",
  },
  {
    id: 3,
    title: "VoltStack - Full-Stack Platform",
    des: "Modern full-stack platform built with Angular frontend and Spring Boot backend, featuring comprehensive API integration and responsive user interface.",
    img: "",
    iconLists: ["/angular.png", "/ts.svg", "/java.svg"],
    link: "https://github.com/jcruz0828/VoltStack",
  },
  {
    id: 4,
    title: "CPU Scheduler - Systems Programming",
    des: "Implemented a CPU process/thread scheduler in C, demonstrating low-level systems programming and algorithm optimization.",
    img: "",
    iconLists: ["/cs.svg"],
    link: "https://github.com/jcruz0828/CPU-scheduler",
  },
  {
    id: 5,
    title: "Aora - AI Video Social Platform",
    des: "Created a React Native app for sharing AI-generated videos with real-time sharing and commenting features.",
    img: "/aora.jpeg",
    iconLists: ["/react.svg", "/expo.svg"],
    link: "https://github.com/jcruz0828/Aora",
  },
  {
    id: 6,
    title: "Iron Ops - Fitness App",
    des: "Built a data-driven fitness mobile app using the Expo stack, featuring personalized workout tracking and real-time progress analytics.",
    img: "/iron.PNG",
    iconLists: ["/react.svg", "/expo.svg"],
    link: "https://github.com/jcruz0828/iron-ops",
  },
  {
    id: 7,
    title: "Transcriptomic Brain Explorer",
    des: "TypeScript-based web application for exploring and visualizing transcriptomic brain data with interactive interfaces.",
    img: "",
    iconLists: ["/ts.svg", "/react.svg", "/nodejs.svg"],
    link: "https://github.com/jcruz0828/Transcriptomic-Brain-Explorer",
  },
  {
    id: 8,
    title: "Appointment Tracker",
    des: "Developed a real-time appointment management system for barbershops using the MERN stack with MongoDB and Express.js.",
    img: "/org.png",
    iconLists: ["/mongodb.svg", "/express.svg", "/react.svg", "/nodejs.svg"],
    link: "https://github.com/jcruz0828/Appointment-App",
  },
  {
    id: 9,
    title: "Paging Algorithm Implementation",
    des: "C++ implementation of memory paging algorithms demonstrating advanced systems programming and memory management concepts.",
    img: "",
    iconLists: ["/cpp.svg"],
    link: "https://github.com/jcruz0828/Paging-Algorithm",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Full Stack Software Engineer – Capital One, Richmond, VA",
    desc: `Full Stack Software Engineer at Capital One, contributing to innovative financial technology solutions and software development initiatives. Built and maintained web applications using React, Node.js, and PostgreSQL to enhance customer experience and streamline internal processes. Collaborated with cross-functional teams to deliver scalable, high-performance solutions that drive business growth and efficiency.`,
    className: "md:col-span-2",
    thumbnail: "/cap1.png",
    href: "https://www.capitalone.com",
  },
  {
    id: 2,
    title: "Software Engineer – Bank of New York, Pittsburgh, PA",
    desc: `Assisted in developing VAIA, a full-stack B2B disbursement suite on Spring Boot, Angular, and Oracle SQL, containerized and deployed to Google App Engine microservices. Integrated secure OAuth 2.0 flows and REST APIs to route high-volume payouts via ACH, RTP, Zelle, push-to-card, MoCaFi prepaid cards, and paper checks under U.S. compliance standards. Refactored heavy SQL queries and asynchronous endpoints, boosting backend throughput and cutting report-generation latency by 40% during peak transaction windows.`,
    className: "md:col-span-2",
    thumbnail: "/bny.png",
    href: "https://www.bny.com/corporate/global/en/careers/our-teams.html",
  },
  {
    id: 3,
    title: "Robotics Researcher – XrealLabs, California State University, San Bernardino",
    desc: `Engineered autonomy and control software for the Trossen Aloha Mobile Robot, enabling chair repositioning using ROS, Python, and OpenCV with real-time video processing and synchronized actuator control. Trained teleoperation-based behavioral models using Stanford datasets and in-house trials, optimizing control latency, motion smoothness, and feedback accuracy for robust indoor navigation in dynamic environments. Conducted over 50 autonomous trials with a >80% success rate.`,
    className: "md:col-span-2",
    thumbnail: "/csusb.png",
    href: "https://www.csusb.edu",
  },
  {
    id: 4,
    title: "Machine Learning Researcher – California State University, San Bernardino",
    desc: `Led ML studies on 956 samples × 54,453 gene tokens, merging GeneFormer embeddings, z-score scaling, PCA, and Sparse Simplex graphs to map functional similarity across complex neuroanatomy. Built and finetuned Graph Neural Network (GNN) models in PyTorch Geometric, using GeneFormer features to flag key patterns linked to Alzheimer's, epilepsy, and other neurodegenerative disorders. Engineered end-to-end Python pipelines revealing 12 disease-linked modules in high-dimensional data.`,
    className: "md:col-span-2",
    thumbnail: "/csusb.png",
    href: "https://www.csusb.edu",
  },
  {
    id: 5,
    title: "Robotics Engineer (M-STAR Program) – College of the Desert, Palm Desert, CA",
    desc: `Programmed ESP32 microcontrollers in C for real-time control of robotic systems, integrating UART communication, PWM motor drivers, and multi-sensor data acquisition for responsive actuation in dynamic environments. Built inverse kinematic control algorithms to improve robotic arm precision, optimize trajectory planning, and maintain joint stability under variable loads. Integrated Google Speech-to-Text with OpenAI GPT-4 to enable intelligent voice-based control, translating natural language commands into robotic actions.`,
    className: "md:col-span-2",
    thumbnail: "/cod.png",
    href: "https://www.collegeofthedesert.edu",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jcruz0828"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jose-coyt-803106316/"
  },
];

export const certificates = [
  {
    id: 1,
    title: "Machine Learning",
    issuer: "Stanford University",
    date: "Apr 2025",
    description: "Comprehensive machine learning course covering algorithms, theory, and practical applications",
    credentialId: "2ECOGYZSLUMK",
    image: "",
  },
  {
    id: 2,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "Mar 2025", 
    description: "Advanced course on machine learning algorithms and optimization techniques",
    credentialId: "CYDK2I3JAZP6",
    image: "",
  },
  {
    id: 3,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "Feb 2025",
    description: "Foundational course covering supervised learning, regression, and classification techniques",
    credentialId: "7RCZKLEO71FO", 
    image: "",
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    description: "Comprehensive introduction to AWS cloud services and best practices",
    credentialId: "KK9GOJRRDJ0G",
    image: "",
  },
  {
    id: 5,
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI", 
    date: "Jan 2025",
    description: "Deep dive into neural networks, deep learning architectures, and implementation",
    credentialId: "F6E5SREZVW8V",
    image: "",
  },
  {
    id: 6,
    title: "Data Science",
    issuer: "University of Arkansas",
    date: "Nov 2024",
    description: "Comprehensive course covering data analysis, machine learning, and statistical modeling",
    credentialId: "",
    image: "",
  },
];