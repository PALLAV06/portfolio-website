import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  metrics?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features.",
  technologies = [
    { name: "Azure" },
    { name: "Terraform" },
    { name: "PowerShell" },
  ],
  metrics = "Reduced deployment time from 3 hours to 15 minutes",
  imageUrl = "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&q=80",
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
        {imageUrl && (
          <div className="w-full h-32 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-1">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`text-xs ${tech.color || ""}`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="text-xs font-medium text-primary">{metrics}</div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
