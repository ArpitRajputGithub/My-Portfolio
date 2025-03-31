import { useState, FormEvent } from 'react';
import { Button } from '../ui/Button';
import emailjs from 'emailjs-com';

// Types for form data and errors
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // Form status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }
    
    // Update errors state
    setFormErrors(errors);
    
    // Return true if no errors
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setFormSuccess(false);
    setFormError('');
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Start submission
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;
      
      console.log('EmailJS config check:', {
        serviceIdExists: !!serviceId,
        templateIdExists: !!templateId,
        userIdExists: !!userId
      });
      
      if (!serviceId || !templateId || !userId) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      // Send email
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        userId
      );
      
      console.log('EmailJS Response:', response);
      
      // Success
      setFormSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error: unknown) {
      // Error handling with more details
      const err = error as { message?: string; text?: string; name?: string };
      
      console.error('Error sending email details:', err);
      
      if (err.message && err.message.includes('template_1234567890')) {
        setFormError('Email service misconfiguration: The template ID appears to be a placeholder value. Please update your EmailJS template ID.');
      } else if (err.text) {
        setFormError(`Failed to send message: ${err.text}`);
      } else if (err.message) {
        setFormError(`Failed to send message: ${err.message}`);
      } else {
        setFormError('Failed to send message. Please try again later.');
      }
    } finally {
      // End submission
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white/80 dark:bg-secondary-900/80 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-8 border border-secondary-200 dark:border-secondary-800">
      {formSuccess ? (
        <div className="text-center py-8">
          <div className="text-primary-500 dark:text-primary-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
            Message Sent!
          </h3>
          <p className="text-secondary-700 dark:text-secondary-300 mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setFormSuccess(false)}
            variant="primary"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 mb-6">
            Get In Touch
          </h2>
          
          {/* Error message */}
          {formError && (
            <div className="mb-6 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg">
              {formError}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-secondary-900 dark:text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-secondary-200 dark:border-secondary-700 focus:ring-primary-500'
                } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                placeholder="Arpit Rajput"
              />
              {formErrors.name && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                  {formErrors.name}
                </p>
              )}
            </div>
            
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-secondary-900 dark:text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-secondary-200 dark:border-secondary-700 focus:ring-primary-500'
                } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                placeholder="your.email@example.com"
              />
              {formErrors.email && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>
          
          {/* Subject field */}
          <div className="mt-6">
            <label htmlFor="subject" className="block text-secondary-900 dark:text-white font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                formErrors.subject
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-secondary-200 dark:border-secondary-700 focus:ring-primary-500'
              } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
              placeholder="How can I help you?"
            />
            {formErrors.subject && (
              <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                {formErrors.subject}
              </p>
            )}
          </div>
          
          {/* Message field */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-secondary-900 dark:text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                formErrors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-secondary-200 dark:border-secondary-700 focus:ring-primary-500'
              } bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none`}
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
            {formErrors.message && (
              <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                {formErrors.message}
              </p>
            )}
          </div>
          
          {/* Submit button */}
          <div className="mt-8">
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}; 