import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ExperienceCard = ({ experience }) => {
  return (
    <Card className="bg-white border-blue-100 shadow-sm hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <CardTitle className="text-gray-900 mb-2">{experience.role}</CardTitle>
            <CardDescription className="text-gray-700 font-medium">{experience.company}</CardDescription>
            <div className="text-sm text-gray-600 mt-1">{experience.location}</div>
          </div>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border border-blue-200">{experience.duration}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-gray-600">
          {experience.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {experience.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="border-blue-300 text-blue-700 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
