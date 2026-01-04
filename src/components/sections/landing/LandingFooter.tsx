'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function LandingFooter() {
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  // const contactEmail = "contact@frameit.com";
  

  const scrollToSection = (sectionId: string) => {
    if (pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <footer
      style={{
        background: `linear-gradient(90deg, #0a0a0a 0%, #151515 50%, #1a1a1a 100%)`,
        boxShadow: '0 -8px 24px -3px rgba(0, 0, 0, 0.3), 0 -4px 12px -4px rgba(0, 0, 0, 0.2)',
        marginTop: '0',
      }}
      className="text-white pt-10 pb-4 px-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6 text-xs items-start">
          <div className="flex flex-col items-start h-full">
            <h3
              className="text-2xl font-extrabold text-white cursor-pointer hover:opacity-90 transition-opacity drop-shadow-lg tracking-wide mb-2"
              onClick={() => router.push('/')}
            >
              <span className="inline-block bg-white/20 px-3 py-1 rounded-xl shadow-md">FrameIt</span>
            </h3>
            <span className="text-[#1ED9C3] text-xs mt-2 italic font-medium">Create. Frame. Share.</span>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-white/90 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => router.push('/')} className="hover:text-[#FFB84D] transition-colors cursor-pointer font-medium">Home</button></li>
              <li><button onClick={() => scrollToSection('about-us')} className="hover:text-[#FFB84D] transition-colors cursor-pointer font-medium">About</button></li>
              <li><button onClick={() => scrollToSection('features')} className="hover:text-[#FFB84D] transition-colors cursor-pointer font-medium">Features</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-white/90 tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/arduinodayphilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB84D] transition-colors cursor-pointer font-medium"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/arduinodayphilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB84D] transition-colors cursor-pointer font-medium"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-white/90 tracking-wide">Contact Us</h4>
            <div className="flex gap-4 items-center mt-2">
              <a
                href="https://www.instagram.com/arduinodayphilippines/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1ED9C3] transition-colors cursor-pointer"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/arduinodayphilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1ED9C3] transition-colors cursor-pointer"
                title="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/arduinodayphilippines/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1ED9C3] transition-colors cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 mt-2 text-center text-sm text-white/80">
          © {currentYear} <span className="font-bold">ADPH - Arduino Day Philippines</span>. All rights reserved. | Designed for your story.
        </div>
      </div>
    </footer>
  );
}
