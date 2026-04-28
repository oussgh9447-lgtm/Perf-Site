'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    scope: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-bg-input border border-border-subtle rounded-[8px] p-8 space-y-4">
      <div>
        <label htmlFor="name" className="block text-text-muted text-[12px] uppercase tracking-wider mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-bg-card border border-border-subtle rounded-[4px] px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-text-muted text-[12px] uppercase tracking-wider mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-bg-card border border-border-subtle rounded-[4px] px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-text-muted text-[12px] uppercase tracking-wider mb-2">
          Organization/Squad
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full bg-bg-card border border-border-subtle rounded-[4px] px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
          placeholder="Your organization"
        />
      </div>

      <div>
        <label htmlFor="scope" className="block text-text-muted text-[12px] uppercase tracking-wider mb-2">
          Deployment Scope
        </label>
        <select
          id="scope"
          name="scope"
          value={formData.scope}
          onChange={handleChange}
          className="w-full bg-bg-card border border-border-subtle rounded-[4px] px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-colors"
        >
          <option value="">Select scope</option>
          <option value="team">Single Team</option>
          <option value="department">Department</option>
          <option value="organization">Full Organization</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-text-muted text-[12px] uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-bg-card border border-border-subtle rounded-[4px] px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-accent-blue to-accent-blue-dark text-white font-black text-[14px] uppercase py-4 rounded-[4px] box-glow-blue hover:opacity-90 transition-opacity"
      >
        INITIALIZE DEMO REQUEST
      </button>
    </form>
  );
}
