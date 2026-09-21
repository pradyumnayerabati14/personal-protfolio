export const mockData = {
  hero: {
    name: "Pradyumna Yerabati",
    title: "Software Engineer | AI/ML Enthusiast",
    description: "Master's student at Texas A&M University passionate about software development, machine learning, and building scalable solutions. Experienced in backend optimization, deep learning, and solving complex algorithmic challenges.",
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "5+", label: "Major Projects" },
      { value: "1000+", label: "Problems Solved" },
      { value: "4.0", label: "TAMU GPA" }
    ],
    image: "https://customer-assets.emergentagent.com/job_resume-gallery-11/artifacts/acqwn0d2_1000251047.JPG"
  },
  contact: {
    email: "pradyumna1402@tamu.edu",
    phone: "+1 (979) 344 6695",
    github: "https://github.com/pradyumnayerabati14",
    linkedin: "https://linkedin.com/in/pradyumna-yerabati"
  },
  about: {
    bio: "I'm a Master's student in Computer Science at Texas A&M University. During my time at HCL Technologies, I developed a passion for optimization and efficiency, successfully reducing processing times from days to hours through innovative solutions.",
    focus: "My expertise lies at the intersection of software development, machine learning, and system optimization. I thrive on challenges that require deep algorithmic thinking and love building production-grade implementations that make a real impact.",
    currentRole: "Graduate Student at Texas A&M University",
    education: "MS Computer Science, Texas A&M University",
    specialization: "Software Development & AI/ML",
    highlights: [
      "1000+ Algorithmic Problems",
      "5-Star SQL Rating",
      "Deep Learning Enthusiast",
      "Full Stack Developer"
    ]
  },
  experience: [
    {
      role: "Software Development Engineer",
      company: "HCL Technologies",
      location: "Bangalore, India",
      duration: "July 2023 - January 2026",
      highlights: [
        "Led optimization of BigFix IVR backend infrastructure, reducing data processing time for 50,000+ client records from 3 days to 3 hours",
        "Designed and deployed robust mock server architectures for large-scale production environments",
        "Developed advanced techniques for front-end API interception and UI testing",
        "Built PDF Translator using LangChain and Llama models for intelligent document parsing",
        "Leveraged Data Structures and Algorithms to optimize code performance and system architecture"
      ],
      technologies: ["Python", "Flask", "Node.js", "Puppeteer", "MySQL", "Jenkins", "Git"]
    },
    {
      role: "Machine Learning Intern",
      company: "Summer Internship Program",
      location: "Warangal, India",
      duration: "May 2022 - June 2022",
      highlights: [
        "Completed intensive training in Machine Learning and Deep Learning",
        "Developed Image Compression using Neural Networks",
        "Implemented Cancer Prediction using Classification Models",
        "Created Diabetes Prediction using Machine Learning Techniques"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas"]
    }
  ],
  projects: [
    {
      title: "BigFix IVR Platform Engineering",
      description: "End-to-end backend optimization, mock server infrastructure, and automated WebUI testing for BigFix IVR at HCL Technologies",
      achievements: [
        "Reduced processing time from 3 days to 3 hours for 50,000+ clients through backend optimization and load balancing",
        "Built enterprise-grade simulated server environments for Tenable.io, Tenable.sc, and Rapid7 APIs, enabling backend performance testing at scale",
        "Developed a Puppeteer-based WebUI automation framework with API interception and real-time performance metrics for early bottleneck detection",
        "Recognized with a white paper publication in the HCL Central Engineering Newsletter"
      ],
      technologies: ["Python", "Flask", "MySQL", "SQLite3", "Node.js", "Puppeteer", "Pandas", "Faker", "Postman", "Performance Tuning"],
      featured: true,
      links: null
    },
    {
      title: "RAGForge",
      description: "Production-oriented document QA service built on incremental indexing, hybrid retrieval, and citation-grounded generation",
      achievements: [
        "Designed a hybrid retrieval pipeline fusing pgvector HNSW dense search with BM25-style full-text search via reciprocal rank fusion",
        "Implemented incremental content-hash indexing so only changed document chunks are re-embedded, with idempotent retries via stable UUIDs",
        "Added cross-encoder reranking and citation-constrained generation that treats retrieved text as untrusted context",
        "Built a PySpark batch ingestion job and a RAGAS evaluation harness reporting faithfulness, answer relevancy, and per-stage latency"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "PySpark", "LangChain", "RAGAS", "Docker"],
      featured: true,
      links: { github: "https://github.com/pradyumnayerabati14/RAGForge" }
    },
    {
      title: "Bare-Metal x86 File-System Kernel",
      description: "Freestanding 32-bit x86 kernel in C++ and NASM booting under QEMU with an inode-based file system",
      achievements: [
        "Implemented a persistent inode table and free-block allocator supporting file create, lookup, sequential read/write, reset, and deletion",
        "Extended the file system with single-level index blocks for large files up to 64 KiB",
        "Drove an ATA disk through LBA28 programmed I/O for raw block reads and writes",
        "Worked across the kernel substrate: GDT/IDT setup, interrupt dispatch and PIC/IRQ routing, physical frame pool, and kernel heap allocator"
      ],
      technologies: ["C++", "NASM Assembly", "x86", "QEMU", "GDB", "Make"],
      featured: true,
      links: { github: "https://github.com/pradyumnayerabati14/x86-filesystem-design", githubLabel: "Design Notes" }
    },
    {
      title: "WisdomLinked",
      description: "Production full-stack mentorship platform connecting students with domain experts",
      achievements: [
        "Built and maintain RESTful backend APIs with Node.js, Express.js, and MongoDB",
        "Implemented JWT auth, session management, OTP-based 2FA, and OAuth integration",
        "Integrated Digital Ocean Spaces for scalable cloud storage with AWS S3 SDK",
        "Containerized deployments with Docker behind Nginx reverse proxy"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Docker", "Stripe", "PayPal"],
      featured: false,
      links: null
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Flask", level: 90 },
        { name: "Puppeteer", level: 85 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      category: "Data Science & Machine Learning",
      items: [
        { name: "Supervised Learning", level: 85 },
        { name: "Deep Learning (ANNs, CNNs)", level: 82 },
        { name: "Computer Vision", level: 80 },
        { name: "Data Preprocessing", level: 88 },
        { name: "Model Evaluation", level: 85 }
      ]
    },
    {
      category: "Database & DevOps",
      items: [
        { name: "MySQL", level: 90 },
        { name: "SQLite", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Git/GitHub", level: 92 },
        { name: "Jenkins (CI/CD)", level: 80 }
      ]
    },
    {
      category: "Tools & Frameworks",
      items: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Scikit-learn", level: 85 },
        { name: "OpenCV", level: 82 },
        { name: "Postman", level: 90 },
        { name: "JMeter", level: 78 }
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Texas A&M University",
      location: "College Station, Texas, USA",
      year: "Expected 2027",
      gpa: "4.0/4.0",
      achievements: [
        "Advanced coursework in Operating Systems, Analysis of Algorithms, and Deep Learning",
        "Focus on algorithmic optimization and data-driven research"
      ]
    },
    {
      degree: "Bachelor of Technology in Electrical and Electronics Engineering",
      institution: "National Institute of Technology, Warangal",
      location: "Warangal, India",
      year: "2019 - 2023",
      gpa: null,
      achievements: [
        "Final Year Project: Distribution System Resilience Using Deep Reinforcement Learning",
        "A grade in Data Structures and Algorithms",
        "Active participant in technical competitions"
      ]
    },
    {
      degree: "Intermediate Education",
      institution: "SR Junior College",
      location: "Warangal, India",
      year: "2018",
      gpa: "97.9%",
      achievements: [
        "Excellence in Mathematics and Physics",
        "State-level academic achievements"
      ]
    }
  ],
  interests: [
    {
      title: "Spirituality & Philosophy",
      description: "Deep interest in spiritual teachings of Krishnamurti, Osho, and Acharya Prashant",
      icon: "Zap"
    },
    {
      title: "Reading & Learning",
      description: "Avid reader exploring philosophy, consciousness, and personal growth. Always seeking wisdom beyond technical knowledge.",
      icon: "BookOpen"
    },
    {
      title: "Badminton",
      description: "Competitive badminton player. Secured third place in district-level tournament. Regular volunteer at GWMC Badminton Stadium.",
      icon: "Activity"
    }
  ],
  favoriteQuote: {
    text: "The ability to observe without evaluating is the highest form of intelligence.",
    author: "Jiddu Krishnamurti"
  },
  certifications: [
    "Python Programming A-Z: Beginner to Expert Course",
    "Machine Learning and Deep Learning Applications",
    "The Web Developer Bootcamp 2022",
    "JMeter for Performance Testing and Load Testing",
    "BlazeMeter for Advanced Performance Testing"
  ]
};
