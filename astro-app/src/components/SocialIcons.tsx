import React from 'react';
import { Facebook, Linkedin, Instagram, Github } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-8 flex-wrap">
      {/* Facebook */}
      <a 
        href="https://www.facebook.com/oddedodd/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300"
      >
        <Facebook className="w-8 h-8" />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/oddegilhselnes/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300"
      >
        <Linkedin className="w-8 h-8" />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/oddedodd" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300"
      >
        <Github className="w-8 h-8" />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/oddedodd/"
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300"
      >
        <Instagram className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SocialIcons; 