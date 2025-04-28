import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Home, Calendar, Mail, Phone } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';
import profileData from '../data/profileData';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <Section 
        title={t('about.title')} 
        subtitle={t('about.subtitle')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Photo and Personal Info */}
          <Card className="lg:col-span-1">
            <div className="relative aspect-square">
              <img 
                src="/wiam-photo.jpg" 
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold mb-4">{profileData.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Home size={18} className="text-primary flex-shrink-0" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-primary flex-shrink-0" />
                  <span>{profileData.birthDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <span>{profileData.email}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">{t('skills.languages.human')}</h4>
                <div className="space-y-2">
                  {profileData.languages.map((language, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{language.name}</span>
                      <span className="text-muted-foreground">{language.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          
          {/* Right column - Bio and Education */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('about.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.description')}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {t('about.availability')}
                  </span>
                </div>
              </div>
            </Card>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2 text-primary" size={24} />
                {t('about.education')}
              </h3>
              
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <div className="p-6">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h4 className="text-xl font-semibold">
                            {edu.institution}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {edu.period}
                          </span>
                        </div>
                        <p className="mb-2">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;