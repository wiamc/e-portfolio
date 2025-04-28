import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';
import profileData from '../data/profileData';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <Section title={t('experience.title')}>
        <div className="space-y-8 max-w-4xl mx-auto">
          {profileData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Briefcase size={20} className="text-primary mr-2" />
                    <h3 className="text-xl font-semibold">
                      {t(`experience.internship.title`) || exp.role}
                    </h3>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-3">
                    {t(`experience.internship.company`) || exp.company}
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {t(`experience.internship.description`) || exp.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* For future experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-8 bg-card/50 border border-dashed border-border rounded-xl"
          >
            <h3 className="text-xl font-medium mb-2">
              {t('experience.future.title')}
            </h3>
            <p className="text-muted-foreground mb-2">
              {t('experience.future.description')}
            </p>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              {t('experience.future.seeking')}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;