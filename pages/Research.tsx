import React, { useState } from 'react';

// Robust Image Component for handling path fallbacks
const ResearchImage = ({ src, alt }: { src: string; alt: string }) => {
    const [currentSrc, setCurrentSrc] = useState(`images/${src}`);
    const [error, setError] = useState(false);

    const handleError = () => {
        if (!currentSrc.startsWith('public/')) {
            setCurrentSrc(`public/${currentSrc}`);
        } else {
            setError(true);
        }
    };

    if (error) {
        return (
             <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 p-4 text-center">
                <span className="text-sm font-medium">Image Not Found: {src}</span>
            </div>
        );
    }

    return (
        <img 
            src={currentSrc}
            alt={alt}
            className="w-full h-full object-cover"
            onError={handleError}
        />
    );
};

const Research: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">Research Streams</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                Our research aims to bridge the gap between synthetic systems and biological complexity through three core pillars: Magnetism, Biology, and Robotics.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Topic 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl font-bold text-gray-100">01</span>
                    <h2 className="text-2xl font-bold text-primary">Magnetically Driven <br/>Micro-/Nano-Robotics</h2>
                </div>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                        We engineer autonomous and semi-autonomous systems capable of navigating and
                        performing complex tasks within the biological environment.
                    </p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <strong className="text-gray-900">Magnetically Actuatable Devices:</strong> We develop precision tools such as the
                            MagNProbe and Magnetic Grippers designed for the non-invasive manipulation
                            of cells and tissues.
                        </li>
                        <li>
                            <strong className="text-gray-900">Physical AI Nanorobots & Materials Intelligence:</strong> Moving beyond simple actuation,
                            we research "Materials Intelligence", encoding logic and responsive behaviors
                            directly into the physical structure of nanorobots to enable autonomous decision-making in situ.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl bg-gray-100 min-h-[300px]">
                <ResearchImage src="research_01.jpg" alt="Micro Robotics" />
            </div>
        </div>

        {/* Topic 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 min-h-[300px]">
                <ResearchImage src="research_02.jpg" alt="Neuro Engineering" />
            </div>
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl font-bold text-gray-100">02</span>
                    <h2 className="text-2xl font-bold text-primary">Neuro-Engineering & Technology</h2>
                </div>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                        Our lab pioneers new modalities for interfacing with the nervous system to treat
                        disorders and understand brain function.
                    </p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <strong className="text-gray-900">Magnetogenetics:</strong> We specialize in the engineering of high-performance
                            magnetic nanoparticles and the design of custom Magnetic Field Generators to
                            achieve high-precision, wireless neuromodulation.
                        </li>
                        <li>
                            <strong className="text-gray-900">Magnetic BCI:</strong> We are developing next-generation Brain-Computer Interfaces
                            (BCI) that leverage nanomagnetic technologies to achieve high-resolution neural
                            recording and stimulation with minimal invasiveness.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Topic 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl font-bold text-gray-100">03</span>
                    <h2 className="text-2xl font-bold text-primary">Precision Nanomedicine & Sensing</h2>
                </div>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                        We translate fundamental breakthroughs in magnetism into advanced clinical and
                        diagnostic tools.
                    </p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <strong className="text-gray-900">Advanced MRI Probe Design:</strong> Development of smart, responsive Magnetic
                            Resonance Imaging probes that provide real-time feedback on biochemical
                            markers and lesion microenvironments.
                        </li>
                        <li>
                            <strong className="text-gray-900">Bio-Sensing Platforms:</strong> Designing highly sensitive biological sensors for advanced
                            diagnostics, focusing on early-stage disease detection and long-term health
                            monitoring.
                        </li>
                    </ul>
                </div>
            </div>
             <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl bg-gray-100 min-h-[300px]">
                <ResearchImage src="research_03.jpg" alt="Nanomedicine" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Research;