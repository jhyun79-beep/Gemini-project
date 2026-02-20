import React from 'react';
import { ArrowRight, Magnet, Brain, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Using GitHub Blob URL as requested, adding ?raw=true to ensure it renders as an image
  const IMAGE_BASE_URL = "https://github.com/jhyun79-beep/Gemini-project/blob/main/public/images/";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-32 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* Main Hero Image */}
          <img 
            src={`${IMAGE_BASE_URL}Magnetogenetics_1.png?raw=true`}
            alt="Magneto-mechanical genetics illustration"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback for visual debugging
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('bg-blue-900');
            }}
          />
          {/* Gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
              Nano-Neuro <br/>
              <span className="text-accent">Robotics Lab</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 italic drop-shadow-md">
              "Harnessing the power of the nanoscale for the next generation neurotechnology."
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/research" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50 transition-colors shadow-lg">
                Explore Research <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/publications" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors shadow-lg">
                Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Lab</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded"></div>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              The Nano-Neuro Robotics Laboratory, led by Professor Jae-Hyun Lee, focuses on the
              convergence of nanotechnology and neuroengineering to create intelligent robotic
              systems at the micro- and nano-scale. By integrating advanced magnetic nanomaterials
              with flexible electronics, we develop innovative tools for deep-brain modulation, high-fidelity neural recording, and organoid-based biocomputing. Our mission is to engineer
              the next generation of bio-hybrid systems that can sense, interact with, and augment
              biological neural networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card 
              icon={<Magnet className="h-10 w-10 text-accent" />}
              title="Magnetic Soft Robotics"
              description="Developing intelligent, magnetically actuatable devices utilizing materials intelligence and physical AI to perform autonomous biological tasks."
            />
            <Card 
              icon={<Brain className="h-10 w-10 text-accent" />}
              title="Neural Interface Platforms"
              description="Designing non-invasive, wireless platforms for neuromodulation and high-resolution BCI systems to record and stimulate neural activity."
            />
            <Card 
              icon={<Microscope className="h-10 w-10 text-accent" />}
              title="Precision Diagnostics"
              description="Engineering advanced biological sensors and responsive MRI probes for real-time, high-sensitivity monitoring of biochemical markers."
            />
          </div>
        </div>
      </section>

      {/* Vision/Funding Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                We are looking for passionate researchers skilled in Nanomaterials, Electrical Engineering, and Neuroscience. 
                Together, we are building the tools to sense, move, and think within the bio-nanoscale.
            </p>
            
            <div className="flex flex-col items-center justify-center mt-12 pt-12 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                    Funded by Institute for Basic Science (IBS) Center for Nanomedicine
                </p>
                <div className="h-24 w-auto flex items-center justify-center">
                  <img 
                      src={`${IMAGE_BASE_URL}ibs_logo.png?raw=true`}
                      alt="IBS Center for Nanomedicine Logo"
                      className="h-24 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerText = "IBS Logo";
                      }}
                  />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="p-4 bg-blue-50 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default Home;