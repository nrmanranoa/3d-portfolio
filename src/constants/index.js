import {
    aws,
    mobile,
    backend,
    creator,
    python,
    java,
    mulesoft,
    javascript,
    jenkins,
    jira,
    typescript,
    html,
    linux,
    css,
    postgres,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    accenture,
    indra,
    capgemini,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: python,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Java Developer",
      icon: java,
    },
    {
      title: "MuleSoft Developer",
      icon: mulesoft,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MuleSoft",
      icon: mulesoft,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "jira",
      icon: jira,
    },
  ];
  
  const experiences = [
    {
      title: "Associate Software Engineer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#E6DEDD",
      date: "March 2018 - October 2018",
      points: [
        "Maintenance and creation of process chains of SAP system for US client.",
        "Baselining of SAP system for the purpose of optimization.",
        "Human Capital Management (HCM) testing using Oracle Application Testing Suite.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Indra",
      icon: indra,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - April 2022",
      points: [
        "Design, development, and maintainenance of web applications, from backend to frontend: Python(Flask), HTML/CSS, React Javascript.",
        "Handling of incidents and service requests (ReactJS, Python, PostgreSQL).",
        "Deployment of robust, testable and maintainable code to production using CI/CD and cloud tools such as Jenkins and AWS.",
        "Design, implementation, and maintenance of custom ETL for client database.",
        "Creation of data dictionary for client database.",
        "Monitoring of changes done on the production source code (version control with GIT).",
        "Collaboration with Product Management and Engineering team to understand and deliver the business requirements within our web applications.",
      ],
    },
    {
      title: "MuleSoft Developer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#E6DEDD",
      date: "April 2022 - Present",
      points: [
        "Develops and deploys scalable and maintainable code to production.",
        "Designs and builds scalable systems and high-performance application within our client software infrastructure (implemented server clustering in network to enhance performance and High Availablity).",
        "Designs and builds RESTful APIs and third-party API integrations using MuleSoft.",
        "Designs and implements large scale enhancements within client infrastructure using MuleSoft and Java.",
        "Conducts code reviews and knowledge transfer sessions within Managed Services team.",
        "Collaborates with Product Management and Engineering team to understand and deliver the business requirements within our APIs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };