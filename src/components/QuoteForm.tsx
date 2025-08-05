'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import styles from './QuoteForm.module.css';

interface QuoteFormProps {
  source?: string;
}

export default function QuoteForm({ source = 'general' }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    projectSize: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', { ...formData, source });
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={styles.successIcon}>✓</div>
        <h3>Quote Request Received!</h3>
        <p>
          Thank you for your interest in Permian Turf Solutions. 
          We&apos;ll contact you within 24 hours with your custom quote.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              propertyType: 'residential',
              projectSize: '',
              message: '',
            });
          }}
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label">
            <User size={18} />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Mail size={18} />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Phone size={18} />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(432) 555-0100"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Building size={18} />
            Property Type
          </label>
          <select
            name="propertyType"
            className="form-input"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="residential">Residential Home</option>
            <option value="rv-park">RV Park / Man Camp</option>
            <option value="apartment">Apartment Complex</option>
            <option value="office">Office Building</option>
            <option value="retail">Retail Property</option>
            <option value="other">Other Commercial</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Estimated Project Size
          </label>
          <select
            name="projectSize"
            className="form-input"
            value={formData.projectSize}
            onChange={handleChange}
            required
          >
            <option value="">Select size range</option>
            <option value="small">Under 1,000 sq ft</option>
            <option value="medium">1,000 - 5,000 sq ft</option>
            <option value="large">5,000 - 10,000 sq ft</option>
            <option value="xlarge">10,000 - 20,000 sq ft</option>
            <option value="xxlarge">Over 20,000 sq ft</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          <MessageSquare size={18} />
          Project Details
        </label>
        <textarea
          name="message"
          className="form-input"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your project, any specific areas of concern, or questions you have..."
        />
      </div>

      <div className={styles.formFooter}>
        <p className={styles.disclaimer}>
          We respect your privacy and will never share your information. 
          Response time is typically within 24 hours.
        </p>
        <button
          type="submit"
          className={`btn btn-primary ${styles.submitButton}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send size={18} />
              Get Your Free Quote
            </>
          )}
        </button>
      </div>
    </form>
  );
}