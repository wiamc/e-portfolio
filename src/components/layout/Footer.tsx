import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Name & Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Wiam Chaoua</h3>
            <p className="text-muted-foreground mb-4">
              {t('home.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/wiam-chaoua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.experience')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.skills')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.info')}</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">{t('contact.location')}</li>
              <li className="text-muted-foreground">{t('contact.phone')}</li>
              <li className="text-muted-foreground">{t('contact.emailAddress')}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          &copy; {currentYear} Wiam Chaoua. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;