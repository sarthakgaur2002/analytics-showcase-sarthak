
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a backend
    toast.success("Thank you for your message! I'll get back to you soon.");
    // Reset form fields
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 dark:bg-gray-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you'd like to discuss potential opportunities or have any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-left block dark:text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-left block dark:text-gray-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-left block dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-left block dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    rows={5}
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="h-fit shadow-md dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white text-left">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2 dark:text-gray-200">Email</h3>
                <a
                  href="mailto:sarthakgaur2002@gmail.com"
                  className="flex items-center gap-2 text-primary hover:underline dark:text-accent"
                >
                  <Mail className="h-5 w-5" />
                  <span>sarthakgaur2002@gmail.com</span>
                </a>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2 dark:text-gray-200">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/sarthakgaur2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline dark:text-accent"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/sarthakgaur2002</span>
                </a>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2 dark:text-gray-200">Phone</h3>
                <a
                  href="tel:+917701997081"
                  className="flex items-center gap-2 text-primary hover:underline dark:text-accent"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 7701997081</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
