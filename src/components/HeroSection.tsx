import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CloudIcon,
  CodeIcon,
  ServerIcon,
  ShieldIcon,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  ctaText?: string;
  profileImage?: string;
}

const HeroSection = ({
  name = "Pallav Debnath",
  title = "Cloud Engineer | Azure | DevOps | Automation",
  tagline = "Specializing in infrastructure automation and cloud optimization with a focus on Microsoft Azure environments.",
  ctaText = "View My Work",
  profileImage = "https://i.postimg.cc/bYCpX61R/1752633980144.jpg",
}: HeroSectionProps) => {
  const floatingIcons = [
    { Icon: CloudIcon, delay: 0.5, x: -20, y: -30 },
    { Icon: CodeIcon, delay: 0.7, x: 30, y: -20 },
    { Icon: ServerIcon, delay: 0.9, x: -30, y: 20 },
    { Icon: ShieldIcon, delay: 1.1, x: 25, y: 30 },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-background via-background to-muted/20 text-foreground px-4 md:px-8 lg:px-16 py-16 pb-24 md:pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 space-y-6"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-muted-foreground"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg max-w-lg leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 py-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">
                Resources Managed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">
                Uptime Achieved
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {ctaText}
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/5 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Floating tech icons */}
          {floatingIcons.map(({ Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay }}
              className="absolute z-10 p-3 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg"
              style={{
                transform: `translate(${x * 4}px, ${y * 4}px)`,
              }}
            >
              <Icon className="h-5 w-5 text-primary" />
            </motion.div>
          ))}

          <div className="relative">
            {/* Animated rings */}
            <div
              className="absolute -inset-8 rounded-full border border-primary/20 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute -inset-4 rounded-full border border-primary/10 animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Gradient background */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-60 animate-pulse"></div>

            {/* Profile image container */}
            <div className="relative rounded-full overflow-hidden border-4 border-background shadow-2xl h-64 w-64 md:h-80 md:w-80 bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center z-10"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <span className="text-sm text-muted-foreground mb-2 font-medium">
          Scroll for more
        </span>
        <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
          <ArrowDownIcon className="h-4 w-4 animate-bounce text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
