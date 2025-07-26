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
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.025, y: -4, boxShadow: '0 8px 32px 0 rgba(30, 64, 175, 0.10)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, duration: 0.7 }}
            className="relative p-10 rounded-3xl bg-white/90 border border-slate-200 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-500"
          >
            {/* Decorative floating blue circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl z-0 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-700 mr-3 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <h3 className="text-2xl font-extrabold text-blue-700 tracking-wide">North America</h3>
              </div>
              <div className="mb-3 flex items-start text-slate-700 font-medium">
                <svg className="w-5 h-5 text-blue-700 mr-2 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>11757 Beach Blvd. Suite#11A<br/>Jacksonville, FL 32246</span>
              </div>
              <div className="mb-3 flex items-center text-slate-700 font-medium">
                <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h8.96a2 2 0 001.83-3.3L17 13M7 13l1.5-6h7l1.5 6" /></svg>
                <span>+1 (904) 685-2138 x 408</span>
              </div>
              <div className="flex items-center text-slate-700 font-medium mb-4">
                <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" /></svg>
                <a href="https://www.compuzign.com/contactus" className="text-blue-700 underline hover:text-blue-900 transition-colors" target="_blank" rel="noopener noreferrer">compuzign.com/contactus</a>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <iframe
                  title="Compuzign North America Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.073073964479!2d-81.5479636848886!3d30.29449598179206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c9e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s11757%20Beach%20Blvd%20Suite%2011A%2C%20Jacksonville%2C%20FL%2032246%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
