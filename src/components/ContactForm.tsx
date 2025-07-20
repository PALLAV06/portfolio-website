import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Send,
  Linkedin,
  Mail,
  Github,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
      const serviceId = "service_owz01v9";
      const templateId = "template_29smfc4";
      const publicKey = "QMq6Hnr3sCVQWCRrn";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.projectDetails,
        to_name: "Pallav Debnath",
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", projectDetails: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl mx-auto bg-card border border-border p-6 rounded-xl shadow-lg ${className}`}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-card-foreground">
          Let's Connect.
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Have a project in mind or want to discuss cloud infrastructure
          solutions? Drop me a message and I'll get back to you soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-sm font-semibold text-card-foreground"
          >
            Your name *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-primary bg-background text-foreground border-2 border-input hover:border-primary/50 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-semibold text-card-foreground"
          >
            Your email address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-primary bg-background text-foreground border-2 border-input hover:border-primary/50 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="projectDetails"
            className="text-sm font-semibold text-card-foreground"
          >
            Tell me about your project or ideas *
          </Label>
          <Textarea
            id="projectDetails"
            name="projectDetails"
            placeholder="Please share details about your project, ideas, or any cloud infrastructure challenges you're facing..."
            value={formData.projectDetails}
            onChange={handleChange}
            required
            className="min-h-[120px] transition-all duration-200 focus:ring-2 focus:ring-primary bg-background text-foreground border-2 border-input hover:border-primary/50 focus:border-primary resize-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Sending...
              </>
            ) : submitSuccess ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>

          {submitSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              Thank you! I'll get back to you within 24 hours.
            </div>
          )}

          {submitError && (
            <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
              <AlertCircle className="h-4 w-4" />
              Failed to send message. Please try again or contact me directly.
            </div>
          )}
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-4 font-medium">
          Or reach out directly via:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:pallavdebnath@gmail.com"
            className="flex items-center gap-2 text-sm text-card-foreground hover:text-primary transition-colors duration-200 p-2 rounded-md hover:bg-accent"
          >
            <Mail className="h-4 w-4" />
            pallavdebnath@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/pallavdebnath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-card-foreground hover:text-primary transition-colors duration-200 p-2 rounded-md hover:bg-accent"
          >
            <Linkedin className="h-4 w-4" />
            linkedin.com/in/pallavdebnath
          </a>
          <a
            href="https://github.com/PALLAV06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-card-foreground hover:text-primary transition-colors duration-200 p-2 rounded-md hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            github.com/pallav
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
