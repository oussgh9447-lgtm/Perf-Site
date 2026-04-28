'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-bg-primary border-t border-border-subtle mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.png"
              alt="Perf-analysis Consulting"
              width={160}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-text-muted text-[12px] max-w-[280px] text-center md:text-left">
              AI-powered sports performance analytics for professional teams and organizations.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-text-muted hover:text-text-primary transition-colors text-[12px] uppercase tracking-wide cursor-pointer bg-transparent"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-text-muted hover:text-text-primary transition-colors text-[12px] uppercase tracking-wide cursor-pointer bg-transparent"
            >
              Terms of Service
            </button>
            <Link href="/about" className="text-text-muted hover:text-text-primary transition-colors text-[12px] uppercase tracking-wide">
              Support
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border-subtle text-center">
          <p className="text-text-dark-muted text-[11px] uppercase tracking-wide">
            © 2026 Perf-Analysis Consulting. All rights reserved.
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80" onClick={() => setActiveModal(null)}>
          <div className="bg-bg-card border border-border-subtle rounded-[12px] max-w-[600px] w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[24px] font-black text-white uppercase">Privacy Policy</h2>
              <button onClick={() => setActiveModal(null)} className="text-text-muted hover:text-white transition-colors text-2xl cursor-pointer bg-transparent">&times;</button>
            </div>
            <div className="space-y-4 text-text-secondary text-[14px] leading-[24px]">
              <p><strong className="text-white">Last updated:</strong> April 2026</p>
              <p>Perf-Analysis Consulting ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our sports performance analytics platform.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">1. Information We Collect</h3>
              <p>We collect information you provide directly, such as account details, athlete performance data, and communication preferences. We also automatically collect usage data, device information, and analytics to improve our services.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">2. How We Use Your Information</h3>
              <p>Your data is used to deliver and improve our analytics platform, provide customer support, send service updates, and ensure platform security. We never sell your personal information to third parties.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">3. Data Security</h3>
              <p>We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">4. Your Rights</h3>
              <p>You have the right to access, correct, or delete your personal data at any time. Contact our support team to exercise these rights.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">5. Contact Us</h3>
              <p>For privacy-related inquiries, please contact us through our <Link href="/about" className="text-accent-blue hover:underline">Support page</Link>.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80" onClick={() => setActiveModal(null)}>
          <div className="bg-bg-card border border-border-subtle rounded-[12px] max-w-[600px] w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[24px] font-black text-white uppercase">Terms of Service</h2>
              <button onClick={() => setActiveModal(null)} className="text-text-muted hover:text-white transition-colors text-2xl cursor-pointer bg-transparent">&times;</button>
            </div>
            <div className="space-y-4 text-text-secondary text-[14px] leading-[24px]">
              <p><strong className="text-white">Last updated:</strong> April 2026</p>
              <p>By accessing or using Perf-Analysis Consulting's platform, you agree to be bound by these Terms of Service.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">1. Acceptable Use</h3>
              <p>You agree to use our platform only for lawful purposes and in accordance with these terms. You must not misuse our services or attempt to gain unauthorized access to our systems.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">2. Account Responsibility</h3>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">3. Intellectual Property</h3>
              <p>All content, features, and functionality of our platform are owned by Perf-Analysis Consulting and are protected by international copyright and intellectual property laws.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">4. Limitation of Liability</h3>
              <p>Our platform is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">5. Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. Continued use of our platform after changes constitutes acceptance of the new terms.</p>

              <h3 className="text-white font-bold text-[16px] mt-6">6. Contact</h3>
              <p>For questions about these terms, please reach out via our <Link href="/about" className="text-accent-blue hover:underline">Support page</Link>.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}