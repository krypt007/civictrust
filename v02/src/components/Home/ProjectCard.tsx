import React from 'react';

interface ProjectCardProps {
  id: string;
  name: string;
  image: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, image, onClick }) => (
  <div className="project-card" onClick={onClick}>
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <h3 className="mt-2 text-xl font-semibold">{name}</h3>
  </div>
);

export default ProjectCard;
