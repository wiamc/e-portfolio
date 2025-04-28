import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import profileData, { ProjectItem } from '../data/profileData';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique technology categories
  const allTechnologies = profileData.projects.flatMap(project => project.technologies);
  const uniqueTechnologies = [...new Set(allTechnologies)];
  
  // Filter projects by technology
  const filteredProjects = filter 
    ? profileData.projects.filter(project => 
        project.technologies.some(tech => tech.includes(filter))
      )
    : profileData.projects;

  return (
    <div className="pt-20">
      <Section title={t('projects.title')}>
        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button 
            variant={filter === null ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setFilter(null)}
          >
            {t('projects.all')}
          </Button>
          
          {['AI', 'Cloud', 'Data'].map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-semibold mb-3">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{project.location}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">
            {project.description || `Projet utilisant les technologies suivantes.`}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;