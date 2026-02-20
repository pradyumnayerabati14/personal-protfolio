import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const SkillsVisualization = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="space-y-6">
      {skills.map((category, index) => (
        <Card
          key={index}
          className={`bg-white border-blue-100 shadow-sm transition-all duration-300 cursor-pointer ${
            selectedCategory === index ? 'shadow-lg ring-2 ring-blue-500' : 'hover:shadow-md hover:border-blue-300'
          }`}
          onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
        >
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center justify-between">
              {category.category}
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border border-blue-200">
                {category.items.length} skills
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            {selectedCategory === index && (
              <div className="mt-4 pt-4 border-t border-blue-100">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-blue-50 text-blue-700 border border-blue-200">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsVisualization;
