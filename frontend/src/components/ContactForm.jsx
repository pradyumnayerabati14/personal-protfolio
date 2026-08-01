import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from '../hooks/use-toast';
import { Mail, Send } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For static deployment, use mailto link
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:pradyumna1402@tamu.edu?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: 'Opening Email Client',
      description: 'Your default email client will open with the message.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-6 w-6 text-gray-700" />
          <CardTitle className="text-gray-900">Send Me a Message</CardTitle>
        </div>
        <CardDescription className="text-gray-600">
          Have a question or want to work together? Feel free to reach out!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-gray-300 focus:border-gray-700 focus:ring-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="border-gray-300 focus:border-gray-700 focus:ring-gray-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-900">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className="border-gray-300 focus:border-gray-700 focus:ring-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-900">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              rows={6}
              className="border-gray-300 focus:border-gray-700 focus:ring-gray-700 resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
