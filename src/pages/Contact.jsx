import Button from '../components/common/button';
import React, { useState } from 'react';
import contactHeroBg from '../assets/contact-hero-bg.jpg';
import { motion } from 'framer-motion';

export default function Contact() {
  // Simple form state (no validation for demo)
  const [form, setForm] = useState({
    name: '', email: '', job: '', org: '', phone: '', industry: '', enquiry: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or an email service
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[520px] flex items-center justify-center">
        <img src={contactHeroBg} alt="Contact background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Contact Us
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            />
          </h1>
          <p className="text-lg md:text-2xl font-medium">Let’s connect and drive your digital transformation to success</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-primary-bgYellow">Connect with Compuzign</h2>
          {submitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-green-700 font-semibold">Thank you for contacting us! We will get back to you soon.</div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label className="block font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <div>
                <label className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <div>
                <label className="block font-medium mb-1">Job Title <span className="text-red-500">*</span></label>
                <input name="job" value={form.job} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <div>
                <label className="block font-medium mb-1">Organization Name <span className="text-red-500">*</span></label>
                <input name="org" value={form.org} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <div>
                <label className="block font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <div>
                <label className="block font-medium mb-1">Your Industry <span className="text-red-500">*</span></label>
                <input name="industry" value={form.industry} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <div>
                <label className="block font-medium mb-1">Enquiry Type <span className="text-red-500">*</span></label>
                <select name="enquiry" value={form.enquiry} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none">
                  <option value="">Select</option>
                  <option>Request for Service</option>
                  <option>General Enquiry</option>
                  <option>Partnership</option>
                  <option>Support</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-bgYellow outline-none" />
              </div>
              <Button type="submit" variant="primary" size="md" className="w-full">Submit</Button>
            </form>
          )}
        </div>

        {/* Address & Map */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-xl bg-gradient-to-br border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-xl -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-bgYellow/10 rounded-full blur-lg -ml-8 -mb-8" />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg shadow-md mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">North America</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 font-medium">11757 Beach Blvd. Suite#11A<br/>Jacksonville, FL 32246</p>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="ml-3 text-gray-600 font-medium">+1 (904) 685-2138 x 408</p>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@compuzign.com" className="ml-3 text-blue-600 font-medium hover:underline">contact@compuzign.com</a>
                </div>
                <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    title="Compuzign North America Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.073073964479!2d-81.5479636848886!3d30.29449598179206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c9e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s11757%20Beach%20Blvd%20Suite%2011A%2C%20Jacksonville%2C%20FL%2032246%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
