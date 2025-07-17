import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import SkillsSection from "./SkillsSection";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";

const Home = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Experience data
  const experiences = [
    {
      title: "Cloud Engineer",
      company: "State Street",
      location: "Bangalore",
      period: "Jul 2022 – Present",
      achievements: [
        "Built Azure infra for 1M+ resources and automated provisioning using Terraform",
        "Integrated SIEM tools, resolved 1000+ incidents, and ensured 99.9% uptime",
      ],
    },
    {
      title: "Platform Engineer Intern",
      company: "State Street",
      location: "Bangalore",
      period: "Jan 2022 – Jun 2022",
      achievements: [
        "Migrated 20+ workloads to Azure, created PowerShell onboarding scripts",
        "Refined deployment processes and improved automation workflows",
      ],
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Exemption Workflow Automation",
      description:
        "Automated approval workflows using Azure DevOps & ServiceNow integration",
      technologies: ["Azure DevOps", "ServiceNow", "PowerShell"],
      metrics: "Cut processing time from 3 hours to 15 mins",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
    },
    {
      title: "ETL Pipeline on Databricks",
      description:
        "Built high-performance data processing pipeline for enterprise analytics",
      technologies: ["Databricks", "Azure Data Factory", "Python"],
      metrics: "Ranked top 20 internally; processed 5M+ rows daily",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "Tagging Enforcement Scripts",
      description:
        "Developed automated resource tagging and compliance enforcement",
      technologies: ["Azure Policy", "PowerShell", "Azure CLI"],
      metrics: "500+ resources; improved metadata & reporting",
      image:
        "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=800&q=80",
    },
    {
      title: "Centralized Monitoring Dashboards",
      description:
        "Created unified monitoring solution across multiple subscriptions",
      technologies: ["Azure Monitor", "KQL", "Log Analytics"],
      metrics: "Improved visibility & response time by 40%",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
  ];

  // Certifications data
  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "May 2022",
      icon: "🏆",
    },
    {
      name: "HashiCorp Terraform Associate (003)",
      issuer: "HashiCorp",
      date: "August 2022",
      icon: "🏆",
    },
    {
      name: "Oracle Cloud Infrastructure 2023 Foundations Associate",
      issuer: "Oracle",
      date: "January 2023",
      icon: "🏆",
    },
  ];

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}
    >
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 ${theme === "dark" ? "bg-gray-900/90 border-gray-800" : "bg-gray-50/90 border-gray-200"} backdrop-blur-sm border-b`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Pallav Debnath</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              className="hidden md:inline-flex"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Pallav_Debnath.pdf";
                link.download = "Pallav_Debnath.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20">
          <HeroSection />
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4">
                    Cloud Infrastructure Engineer with 3+ years of experience
                    designing, automating, and managing scalable Microsoft Azure
                    environments using Infrastructure as Code.
                  </p>
                  <p className="text-lg mb-4">
                    Delivered a 93% reduction in manual provisioning using
                    DevOps pipelines and Terraform, increased compliance by 30%
                    through policy enforcement, and improved cloud efficiency by
                    15% with Azure Monitor and KQL.
                  </p>
                  <p className="text-lg">
                    Specialized in AKS deployments, security, disaster recovery,
                    and cost optimization.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="mb-4">
                    <span className="font-medium">B.Tech</span> from Kalinga
                    Institute of Industrial Technology, Bhubaneswar
                  </p>
                  <p className="mb-4">
                    <span className="font-medium">CGPA:</span> 9.0/10
                  </p>
                  <p>
                    <span className="font-medium">Graduated:</span> June 2022
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-lg">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies.map((tech) => ({
                      name: tech,
                    }))}
                    metrics={project.metrics}
                    imageUrl={project.image}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <SkillsSection />
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"} transition-colors shadow-md`}
                  >
                    <div className="text-3xl mb-4">{cert.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <p className="mb-2">
                    <span className="font-medium">Email:</span>{" "}
                    pallavdebnath@gmail.com
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Phone:</span> +91 70031 63841
                  </p>
                  <p className="mb-6">
                    <span className="font-medium">LinkedIn:</span>{" "}
                    linkedin.com/in/pallavdebnath
                  </p>
                  <p className="text-lg">
                    Feel free to reach out for collaborations, opportunities, or
                    just to say hello!
                  </p>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`py-8 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border-t`}
      >
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Pallav Debnath. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8">
        <Button
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Pallav_Debnath.pdf";
            link.download = "Pallav_Debnath.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default Home;
