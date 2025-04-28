interface TranslationDict {
  [key: string]: string;
}

interface Translations {
  en: TranslationDict;
  fr: TranslationDict;
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Home
    'home.greeting': 'Hello, I\'m',
    'home.title': 'Data Scientist & AI Engineer',
    'home.description': 'Passionate about creating intelligent solutions with data science and artificial intelligence.',
    'home.cta': 'View My Work',
    'home.projects.description': 'Discover some of my recent academic and professional projects in AI and Data Science.',
    'home.skills.description': 'Here are some of the key technologies and tools I work with.',
    'projects.viewAll': 'View All Projects',
    'skills.viewAll': 'View All Skills',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Data Science & AI Enthusiast',
    'about.description': 'I am a data science student at ENSIAS specializing in AI and machine learning. Currently in my second year of engineering studies, I am passionate about leveraging data and AI technologies to solve complex problems. I am seeking an internship opportunity in Data Science & Artificial Intelligence starting from June 1st, 2025.',
    'about.education': 'Education',
    'about.ensias': 'National School of Computer Science and Systems Analysis (ENSIAS)',
    'about.ensias.description': '2nd year of Engineering Cycle, Data Engineering specialization',
    'about.cpge': 'Moulay Youssef Preparatory Classes (CPGE)',
    'about.cpge.description': 'Mathematics and Physics (MP) track',
    'about.availability': 'Available for internship from June 1st, 2025',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.internship.title': 'Data Science Intern',
    'experience.internship.company': 'SAFRAN',
    'experience.internship.date': 'July 2024 - August 2024',
    'experience.internship.description': 'Developed an intelligent chatbot to automatically classify purchasing needs at Safran Morocco using Deep Learning, Transformers, LLMs (GPT 2, BERT, Mistral), Prompt Engineering, RAG, and Hugging Face API.',
    'experience.future.title': 'Looking for New Opportunities',
    'experience.future.description': 'I am currently seeking an internship opportunity in Data Science & AI.',
    'experience.future.seeking': 'Available from June 1st, 2025',
    
    // Projects
    'projects.title': 'Academic Projects',
    'projects.all': 'All Projects',
    'projects.mirror3d.title': 'MIRROR 3D: 3D Facial Reconstruction',
    'projects.mirror3d.description': 'Development of a 3D facial reconstruction system from 2D images using advanced computer vision and deep learning techniques.',
    'projects.emotions.title': 'Audio Emotion Classification Pipeline',
    'projects.emotions.description': 'Implementation of a complete pipeline for emotion classification from audio data using machine learning and deep learning techniques.',
    'projects.mdm.title': 'MDM Solution for Hotel Group',
    'projects.mdm.description': 'Implementation of a Master Data Management solution for a multi-site hotel group using modern data management tools.',
    'projects.aws.title': 'Secure AWS Healthcare Platform',
    'projects.aws.description': 'Design and implementation of a secure cloud architecture for a healthcare platform using AWS services.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.programming': 'Programming Languages',
    'skills.ai': 'AI & Data Science',
    'skills.databases': 'Database Systems',
    'skills.bigdata': 'Big Data & Distributed Systems',
    'skills.web': 'Web Development & DevOps',
    'skills.cloud': 'Cloud Computing',
    'skills.soft': 'Soft Skills',
    'skills.soft.description': 'Initiative, analytical thinking, perseverance in the face of challenges, ability to work under pressure.',
    'skills.languages.human': 'Languages',
    'skills.arabic': 'Arabic',
    'skills.french': 'French',
    'skills.english': 'English',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.form': 'Send me a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.info': 'Contact Information',
    'contact.address': 'Location',
    'contact.location': 'Rabat, Morocco',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.emailAddress': 'wiamchawa@gmail.com',
    'contact.availability': 'Availability',
    'contact.availabilityText': 'I am currently seeking internship opportunities in Data Science & AI.',
    'contact.availableDate': 'Available from June 1st, 2025',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Home
    'home.greeting': 'Bonjour, je suis',
    'home.title': 'Data Scientist & Ingénieure en IA',
    'home.description': 'Passionnée par la création de solutions intelligentes avec la data science et l\'intelligence artificielle.',
    'home.cta': 'Voir Mon Travail',
    'home.projects.description': 'Découvrez quelques-uns de mes projets académiques et professionnels en IA et Data Science.',
    'home.skills.description': 'Voici quelques-unes des technologies et outils avec lesquels je travaille.',
    'projects.viewAll': 'Voir Tous les Projets',
    'skills.viewAll': 'Voir Toutes les Compétences',
    
    // About
    'about.title': 'À Propos',
    'about.subtitle': 'Passionnée de Data Science & IA',
    'about.description': 'Je suis étudiante en data science à l\'ENSIAS, spécialisée en IA et machine learning. Actuellement en deuxième année du cycle d\'ingénieur, je suis passionnée par l\'exploitation des données et des technologies d\'IA pour résoudre des problèmes complexes. Je suis à la recherche d\'un stage en Data Science & Intelligence Artificielle à partir du 1er juin 2025.',
    'about.education': 'Formation',
    'about.ensias': 'École Nationale Supérieure d\'Informatique et d\'Analyse des Systèmes (ENSIAS)',
    'about.ensias.description': '2ème année du Cycle d\'Ingénieur, filière : Génie de la Data',
    'about.cpge': 'Classes Préparatoires Moulay Youssef (CPGE)',
    'about.cpge.description': 'Filière : Mathématiques, Physique (MP)',
    'about.availability': 'Disponible pour un stage à partir du 1er juin 2025',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.internship.title': 'Stagiaire en Data Science',
    'experience.internship.company': 'SAFRAN',
    'experience.internship.date': 'Juillet 2024 - Août 2024',
    'experience.internship.description': 'Développement d\'un chatbot intelligent pour classifier automatiquement les besoins d\'achat chez Safran Maroc. Technologies : Deep Learning, Transformers, LLMs (GPT 2, BERT, Mistral), Prompt Engineering, RAG, API Hugging Face.',
    'experience.future.title': 'À la recherche de nouvelles opportunités',
    'experience.future.description': 'Je suis actuellement à la recherche d\'un stage en Data Science & IA.',
    'experience.future.seeking': 'Disponible à partir du 1er juin 2025',
    
    // Projects
    'projects.title': 'Projets Académiques',
    'projects.all': 'Tous les Projets',
    'projects.mirror3d.title': 'MIRROR 3D : Reconstruction Faciale 3D',
    'projects.mirror3d.description': 'Développement d\'un système de reconstruction faciale 3D à partir d\'images 2D utilisant des techniques avancées de vision par ordinateur et d\'apprentissage profond.',
    'projects.emotions.title': 'Classification des Émotions Audio',
    'projects.emotions.description': 'Mise en place d\'un pipeline complet de classification d\'émotions à partir de données audio utilisant des techniques de machine learning et deep learning.',
    'projects.mdm.title': 'Solution MDM pour Groupe Hôtelier',
    'projects.mdm.description': 'Implémentation d\'une solution de Master Data Management pour un groupe hôtelier multisite utilisant des outils modernes de gestion des données.',
    'projects.aws.title': 'Plateforme Santé Sécurisée sur AWS',
    'projects.aws.description': 'Conception et implémentation d\'une architecture cloud sécurisée pour une plateforme de santé utilisant les services AWS.',
    
    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.programming': 'Langages de Programmation',
    'skills.ai': 'IA & Data Science',
    'skills.databases': 'Bases de Données',
    'skills.bigdata': 'Big Data & Systèmes Distribués',
    'skills.web': 'Développement Web & DevOps',
    'skills.cloud': 'Cloud Computing',
    'skills.soft': 'Compétences Transversales',
    'skills.soft.description': 'Esprit d\'initiative et d\'analyse, persévérance face aux défis, capacité à travailler sous pression.',
    'skills.languages.human': 'Langues',
    'skills.arabic': 'Arabe',
    'skills.french': 'Français',
    'skills.english': 'Anglais',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Travaillons ensemble',
    'contact.form': 'Envoyez-moi un message',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès !',
    'contact.info': 'Informations de contact',
    'contact.address': 'Localisation',
    'contact.location': 'Rabat, Maroc',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.emailAddress': 'wiamchawa@gmail.com',
    'contact.availability': 'Disponibilité',
    'contact.availabilityText': 'Je suis actuellement à la recherche d\'opportunités de stage en Data Science & IA.',
    'contact.availableDate': 'Disponible à partir du 1er juin 2025',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
  }
};

export default translations;