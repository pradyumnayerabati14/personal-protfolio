import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`bg-white border-blue-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300 ${
        isHovered ? '-translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-gray-900">{project.title}</CardTitle>
          {project.featured && (
            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800">Featured</Badge>
          )}
        </div>
        <CardDescription className="text-gray-600">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-sm font-medium text-blue-700 mb-2">Key Achievements:</div>
          <ul className="text-sm text-gray-600 space-y-1">
            {project.achievements.map((achievement, index) => (
              <li key={index}>• {achievement}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 text-xs border border-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
        {project.links && (
          <div className="flex gap-2">
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open(project.links.github, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            )}
            {project.links.demo && (
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                onClick={() => window.open(project.links.demo, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
