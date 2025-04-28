import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import SkillBar from '../components/ui/SkillBar';
import { useLanguage } from '../contexts/LanguageContext';
import profileData from '../data/profileData';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  // Function to generate skill level based on position
  const getSkillLevel = (categoryIndex: number, skillIndex: number): number => {
    // Create a pseudo-random but consistent level
    const base = 75; // Base skill level
    const variation = ((categoryIndex * 3) + skillIndex) % 20; // Some variation
    return Math.min(95, base + variation); // Cap at 95%
  };

  return (
    <div className="pt-20">
      <Section title={t('skills.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    {t(`skills.${category.name.toLowerCase()}`) || category.name}
                  </h3>
                  
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex} 
                        name={skill} 
                        level={getSkillLevel(categoryIndex, skillIndex)} 
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t('skills.soft')}
                </h3>
                <p className="text-muted-foreground">
                  {t('skills.soft.description')}
                </p>
              </div>
            </Card>
          </motion.div>
          
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t('skills.languages.human')}
                </h3>
                
                <div className="space-y-5">
                  {profileData.languages.map((language, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {t(`skills.${language.name.toLowerCase()}`) || language.name}
                        </span>
                        <span className="text-muted-foreground">
                          {language.level}
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${
                            index === 0 ? 'bg-primary' : 
                            index === 1 ? 'bg-secondary' : 'bg-accent'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: index === 0 ? '100%' : 
                                  index === 1 ? '90%' : '75%' 
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;