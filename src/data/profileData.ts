export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  location: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

const profileData = {
  name: "Wiam Chaoua",
  title: "Data Scientist & AI Engineer",
  photo: "/wiam-photo.jpg",
  birthDate: "22/12/2003",
  location: "Rabat, Morocco",
  phone: "+212 642 257 504",
  email: "wiamchawa@gmail.com",
  linkedin: "linkedin.com/in/wiam-chaoua",
  
  education: [
    {
      id: 1,
      institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
      degree: "2ème année du Cycle d'Ingénieur, filière : Génie de la Data",
      period: "2023 - présent",
      location: "Rabat, Maroc"
    },
    {
      id: 2,
      institution: "CPGE Moulay Youssef",
      degree: "Classes préparatoires aux grandes écoles (CPGE), filière : Mathématiques, Physique (MP)",
      period: "2021 - 2023",
      location: "Rabat, Maroc"
    }
  ],
  
  experience: [
    {
      id: 1,
      role: "Data Science intern",
      company: "SAFRAN",
      period: "Juillet 2024 - Août 2024 (2 mois)",
      location: "Casablanca, Maroc",
      description: "Développement d'un chatbot intelligent pour classifier automatiquement les besoins d'achat chez Safran Maroc. Technologies : Deep Learning, Transformers, LLMs (GPT 2, BERT, Mistral), Prompt Engineering, RAG, API Hugging Face."
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "MIRROR 3D : Reconstruction faciale 3D à partir d'images 2D",
      date: "Mars 2025 - Avril 2025",
      description: "Développement d'un système de reconstruction faciale 3D à partir d'images 2D utilisant des techniques avancées de vision par ordinateur et d'apprentissage profond.",
      technologies: ["Photogrammétrie", "Deep Learning", "PyTorch", "GANs"],
      location: "ENSIAS, Rabat"
    },
    {
      id: 2,
      title: "Classification d'émotions à partir d'audio",
      date: "Janvier 2025",
      description: "Mise en place d'un pipeline complet de classification d'émotions à partir de données audio utilisant des techniques de machine learning et deep learning.",
      technologies: ["Machine Learning", "Audio Embedding", "FastAPI", "Docker", "MLflow"],
      location: "ENSIAS, Rabat"
    },
    {
      id: 3,
      title: "Solution MDM pour groupe hôtelier multisite",
      date: "Novembre 2024",
      description: "Implémentation d'une solution de Master Data Management pour un groupe hôtelier multisite utilisant des outils modernes de gestion des données.",
      technologies: ["OpenMetadata", "Talend", "Data Cataloging"],
      location: "ENSIAS, Rabat"
    },
    {
      id: 4,
      title: "Architecture AWS pour plateforme de santé",
      date: "Octobre 2024",
      description: "Conception et implémentation d'une architecture cloud sécurisée pour une plateforme de santé utilisant les services AWS.",
      technologies: ["AWS", "Cloud Architecture", "Sécurité"],
      location: "ENSIAS, Rabat"
    }
  ],
  
  skills: [
    {
      id: 1,
      name: "Langages de programmation",
      skills: ["Python", "C", "Java", "SQL", "PL/SQL"]
    },
    {
      id: 2,
      name: "IA & Data Science",
      skills: ["Machine Learning", "Deep Learning", "LLMs", "NLP", "RAG", "Prompt Engineering", "Reinforcement Learning"]
    },
    {
      id: 3,
      name: "Bases de données",
      skills: ["MySQL", "Oracle Database", "Microsoft SQL Server"]
    },
    {
      id: 4,
      name: "Big Data et systèmes distribués",
      skills: ["Apache Spark", "Hadoop", "Hive", "HBase", "Kafka"]
    },
    {
      id: 5,
      name: "Développement web & DevOps",
      skills: ["HTML", "CSS", "JavaScript", "Flask", "Git/GitHub", "Docker", "Minikube"]
    },
    {
      id: 6,
      name: "Cloud Computing",
      skills: ["AWS (EC2, S3, EBS, Elastic Beanstalk, Lambda)"]
    }
  ],
  
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "C2" },
    { name: "Anglais", level: "B2" }
  ]
};

export default profileData;