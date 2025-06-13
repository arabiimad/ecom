import React, { useState } from 'react';
import styles from './ContactPage.module.css';

interface FormData {
  name: string;
  email: string;
  company?: string; // Optional company name
  phone?: string; // Optional phone number
  serviceInterest?: string; // E.g., Product A, Product B, General Inquiry
  message: string;
  newsletterSub?: boolean; // For newsletter subscription
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'General Inquiry',
    message: '',
    newsletterSub: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
      // Handle checkbox input
      const { checked } = event.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Lead Data Submitted:", formData);

    // **Simulating API Call for Lead Generation**
    // In a real application, you would send this data to your backend API.
    // The backend would then process it and forward it to a CRM or email marketing platform.
    // Example:
    // try {
    //   const response = await fetch('/api/submit-lead', {
    //     method: 'POST',
    -    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert('Thank you for your inquiry! We will be in touch shortly.');
    //     setFormData({ // Reset form
    //       name: '', email: '', company: '', phone: '',
    //       serviceInterest: 'General Inquiry', message: '', newsletterSub: false
    //     });
    //   } else {
    //     alert('There was an error submitting your request. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   alert('There was an error submitting your request. Please try again.');
    // }

    alert(`Thank you, ${formData.name}! Your inquiry about "${formData.serviceInterest}" has been received (simulated).`);
    // Reset form after simulated submission
    setFormData({
      name: '', email: '', company: '', phone: '',
      serviceInterest: 'General Inquiry', message: '', newsletterSub: false
    });
    (event.target as HTMLFormElement).reset(); // Also reset native form state
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.pageHeader}>
        <h1>Contact Us & Inquiries</h1>
        <p>Have a question, need a quote, or want to learn more? Reach out!</p>
      </header>

      <div className={styles.contactContentWrapper}>
        <section className={styles.contactFormSection}>
          <h2>Send Us Your Inquiry</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange} required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text" id="company" name="company"
                value={formData.company} onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel" id="phone" name="phone"
                value={formData.phone} onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="serviceInterest">I'm interested in... *</label>
              <select
                id="serviceInterest" name="serviceInterest"
                value={formData.serviceInterest} onChange={handleChange} required
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Product Alpha">Product Alpha Quote</option>
                <option value="Service Beta">Service Beta Information</option>
                <option value="Partnership">Partnership Opportunities</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message / Requirements *</label>
              <textarea
                id="message" name="message" rows={6}
                value={formData.message} onChange={handleChange} required
              ></textarea>
            </div>
            <div className={styles.formGroupCheckbox}>
              <input
                type="checkbox" id="newsletterSub" name="newsletterSub"
                checked={formData.newsletterSub} onChange={handleChange}
              />
              <label htmlFor="newsletterSub" className={styles.checkboxLabel}>
                Subscribe to our newsletter for updates and offers.
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit Inquiry
            </button>
          </form>
        </section>

        <section className={styles.contactDetailsSection}>
          <h2>Contact Information</h2>
          {/* ... (existing content, no changes here for this step) ... */}
          <div className={styles.detailsGroup}>
            <h3>Our Office</h3>
            <p>123 Innovation Drive</p>
            <p>Tech City, TX 75001</p>
            <p>United States</p>
          </div>
          <div className={styles.detailsGroup}>
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className={styles.detailsGroup}>
            <h3>Email</h3>
            <p>info@showcasepro.com (General)</p>
            <p>sales@showcasepro.com (For Quotes)</p>
          </div>
          <div className={styles.detailsGroup}>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </section>
      </div>

      {/* Map section remains unchanged */}
      <section className={styles.mapSection}>
        <h2>Find Us Here</h2>
        <div className={styles.mapPlaceholder}>
          <p>Map integration coming soon.</p>
          <img
            src="https://via.placeholder.com/800x400.png?text=Map+to+Our+Office"
            alt="Map placeholder"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
