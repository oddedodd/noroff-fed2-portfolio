import React from 'react';
import { Github, Monitor } from 'lucide-react';

interface ProjectLinksProps {
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ liveUrl, githubUrl }) => {
  return (
    <div className="flex justify-center gap-6 mb-8">
      {liveUrl && (
        <a 
          href={liveUrl} 
          className="flex items-center gap-2 text-sm text-dark hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Monitor className="w-4 h-4" /> Go to website
        </a>
      )}
      {githubUrl && (
        <a 
          href={githubUrl} 
          className="flex items-center gap-2 text-sm text-dark hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" /> View on github
        </a>
      )}
    </div>
  );
};

export default ProjectLinks; 