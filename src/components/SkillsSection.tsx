import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Cloud,
  Code,
  Database,
  GitBranch,
  LineChart,
  Lock,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  description?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillProps[];
}

const SkillsSection = ({
  categories = defaultCategories,
}: {
  categories?: SkillCategoryProps[];
}) => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-2 text-foreground">Skills</h2>
        <p className="text-muted-foreground mb-8">
          Technical expertise and competencies across cloud platforms and
          development tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <Separator className="mb-4" />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <TooltipProvider key={skillIndex}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div>
                            <Badge
                              variant="outline"
                              className="px-3 py-1 text-sm flex items-center gap-1 hover:bg-accent transition-colors cursor-pointer"
                            >
                              <span className="text-primary">{skill.icon}</span>
                              {skill.name}
                            </Badge>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div>
                            <p className="font-medium">{skill.name}</p>
                            <div className="w-full bg-muted h-1 mt-1 rounded-full overflow-hidden">
                              <div
                                className="bg-primary h-full rounded-full"
                                style={{ width: `${skill.proficiency}%` }}
                              />
                            </div>
                            <p className="text-xs mt-1">
                              {skill.description ||
                                `Proficiency: ${skill.proficiency}%`}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const defaultCategories: SkillCategoryProps[] = [
  {
    title: "Azure & Cloud",
    skills: [
      {
        name: "Azure IaaS",
        icon: <Cloud size={16} />,
        proficiency: 95,
        description: "Expert in Azure infrastructure services",
      },
      {
        name: "AKS",
        icon: <Server size={16} />,
        proficiency: 90,
        description: "Azure Kubernetes Service implementation and management",
      },
      {
        name: "Azure DevOps",
        icon: <Workflow size={16} />,
        proficiency: 85,
        description: "CI/CD pipelines and automation",
      },
      {
        name: "Resource Graph",
        icon: <Database size={16} />,
        proficiency: 80,
        description: "Resource querying and management",
      },
      {
        name: "Azure Monitor",
        icon: <LineChart size={16} />,
        proficiency: 85,
        description: "Monitoring and alerting",
      },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      {
        name: "Terraform",
        icon: <Code size={16} />,
        proficiency: 90,
        description: "Infrastructure automation with HashiCorp Terraform",
      },
      {
        name: "ARM Templates",
        icon: <Code size={16} />,
        proficiency: 85,
        description: "Azure Resource Manager templates",
      },
      {
        name: "YAML",
        icon: <Code size={16} />,
        proficiency: 90,
        description: "Configuration and pipeline definitions",
      },
      {
        name: "PowerShell",
        icon: <Terminal size={16} />,
        proficiency: 80,
        description: "Scripting and automation",
      },
    ],
  },
  {
    title: "DevOps & Security",
    skills: [
      {
        name: "CI/CD Pipelines",
        icon: <GitBranch size={16} />,
        proficiency: 90,
        description: "Continuous integration and deployment",
      },
      {
        name: "RBAC",
        icon: <Lock size={16} />,
        proficiency: 85,
        description: "Role-based access control",
      },
      {
        name: "SIEM Integration",
        icon: <Lock size={16} />,
        proficiency: 80,
        description: "Security information and event management",
      },
      {
        name: "Policy Automation",
        icon: <Workflow size={16} />,
        proficiency: 85,
        description: "Governance and compliance automation",
      },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      {
        name: "Python",
        icon: <Code size={16} />,
        proficiency: 85,
        description: "Scripting and automation",
      },
      {
        name: "Bash",
        icon: <Terminal size={16} />,
        proficiency: 80,
        description: "Shell scripting",
      },
      {
        name: "Linux",
        icon: <Terminal size={16} />,
        proficiency: 85,
        description: "System administration",
      },
      {
        name: "KQL",
        icon: <Database size={16} />,
        proficiency: 80,
        description: "Kusto Query Language for log analytics",
      },
      {
        name: "DR/BCP",
        icon: <Server size={16} />,
        proficiency: 75,
        description: "Disaster recovery and business continuity planning",
      },
    ],
  },
];

export default SkillsSection;
