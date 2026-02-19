import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Lab Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nano-Neuro Robotics Lab</h3>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed max-w-md">
              We are part of the Department of Nano Biomedical Engineering at Yonsei University.
            </p>
            <div className="flex space-x-4">
                <a href="https://ibs.yonsei.ac.kr/" target="_blank" rel="noreferrer" className="text-xs border border-blue-400 px-3 py-1 rounded hover:bg-blue-800 transition">
                    Visit IBS Yonsei Center
                </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 shrink-0 opacity-80" />
                <a href="mailto:jhyun_lee@yonsei.ac.kr" className="hover:text-white transition">jhyun_lee@yonsei.ac.kr</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 shrink-0 opacity-80" />
                <span>+82-2-2123-4292</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 opacity-80" />
                <span>
                  #404 IBS Hall, 50 Yonsei-ro,<br />
                  Seodaemun-gu, Seoul 03722, Korea
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-8 pt-6 text-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Nano-Neuro Robotics Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;