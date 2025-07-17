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
        className={`sticky top-0 z-50 ${theme === "dark" ? "bg-gray-900/95 border-gray-800" : "bg-gray-50/95 border-gray-200"} backdrop-blur-sm border-b`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold truncate">
            Pallav Debnath
          </div>
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            <a
              href="#home"
              className="hover:text-blue-500 transition-colors text-sm xl:text-base"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors text-sm xl:text-base"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 transition-colors text-sm xl:text-base"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors text-sm xl:text-base"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-blue-500 transition-colors text-sm xl:text-base"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors text-sm xl:text-base"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-8 w-8 md:h-9 md:w-9"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <Moon className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </Button>
            <Button
              className="hidden lg:inline-flex text-xs md:text-sm px-2 md:px-4 py-1 md:py-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Pallav_Debnath.pdf";
                link.download = "Pallav_Debnath.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </Button>
            <Button
              variant="outline"
              className="lg:hidden text-xs px-2 py-1"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Pallav_Debnath.pdf";
                link.download = "Pallav_Debnath.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-8 md:py-16 lg:py-20">
          <HeroSection />
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-12 md:py-16 lg:py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                About Me
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed">
                    Cloud Infrastructure Engineer with 3+ years of experience
                    designing, automating, and managing scalable Microsoft Azure
                    environments using Infrastructure as Code.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Delivered a 93% reduction in manual provisioning using
                    DevOps pipelines and Terraform, increased compliance by 30%
                    through policy enforcement, and improved cloud efficiency by
                    15% with Azure Monitor and KQL.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Specialized in AKS deployments, security, disaster recovery,
                    and cost optimization.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Education
                  </h3>
                  <div className="space-y-2">
                    <p className="text-base md:text-lg">
                      <span className="font-medium">B.Tech</span> from Kalinga
                      Institute of Industrial Technology, Bhubaneswar
                    </p>
                    <p className="text-base md:text-lg">
                      <span className="font-medium">CGPA:</span> 9.0/10
                    </p>
                    <p className="text-base md:text-lg">
                      <span className="font-medium">Graduated:</span> June 2022
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Experience
              </h2>
              <div className="space-y-8 md:space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 md:pl-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute left-[-6px] md:left-[-8px] top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-base md:text-lg mb-1">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-sm text-gray-400 mb-3 md:mb-4">
                      {exp.period}
                    </p>
                    <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">
                          {achievement}
                        </li>
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
          className={`py-12 md:py-16 lg:py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
        <section id="skills" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Skills
              </h2>
              <SkillsSection />
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className={`py-12 md:py-16 lg:py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-4 md:p-6 rounded-lg ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"} transition-colors shadow-md`}
                  >
                    <div className="text-2xl md:text-3xl mb-3 md:mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Get In Touch
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Contact Information
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-sm md:text-base">
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href="mailto:pallavdebnath@gmail.com"
                        className="text-blue-500 hover:underline break-all"
                      >
                        pallavdebnath@gmail.com
                      </a>
                    </p>
                    <p className="text-sm md:text-base">
                      <span className="font-medium">Phone:</span>{" "}
                      <a
                        href="tel:+917003163841"
                        className="text-blue-500 hover:underline"
                      >
                        +91 70031 63841
                      </a>
                    </p>
                    <p className="text-sm md:text-base">
                      <span className="font-medium">LinkedIn:</span>{" "}
                      <a
                        href="https://linkedin.com/in/pallavdebnath"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline break-all"
                      >
                        linkedin.com/in/pallavdebnath
                      </a>
                    </p>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed">
                    Feel free to reach out for collaborations, opportunities, or
                    just to say hello!
                  </p>
                </div>
                <div className="w-full">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`py-6 md:py-8 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border-t`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base mb-3 md:mb-4">
            © {new Date().getFullYear()} Pallav Debnath. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a
              href="https://linkedin.com/in/pallavdebnath"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors text-sm md:text-base"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PALLAV06"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors text-sm md:text-base"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 lg:bottom-8 lg:right-8 z-40">
        <Button
          size="sm"
          className="rounded-full shadow-lg text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Pallav_Debnath.pdf";
            link.download = "Pallav_Debnath.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Resume</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
