import React, { useState } from 'react';
import { ExternalLink, Award, GraduationCap, Briefcase } from 'lucide-react';

const People: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  
  // Explicitly using the GitHub Blob URL with raw parameter
  const profileImgUrl = "https://github.com/jhyun79-beep/Gemini-project/blob/main/public/images/jae_hyun_lee.png?raw=true";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* PI Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b pb-4">Principal Investigator</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
            {/* PI Image */}
            <div className="lg:w-1/3">
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-[3/4] flex items-center justify-center">
                    {!imgError ? (
                        <img 
                            src={profileImgUrl}
                            alt="Prof. Jae-Hyun Lee" 
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="text-center p-4">
                            <p className="text-gray-400 font-bold text-lg mb-2">Image Not Found</p>
                            <div className="text-xs text-left bg-gray-50 border border-gray-200 p-2 rounded mb-2">
                                <p className="font-semibold text-gray-600 mb-1">Tried URL:</p>
                                <p className="text-gray-500 break-all mb-2 text-[10px]">{profileImgUrl}</p>
                                <p className="font-semibold text-gray-600 mb-1">Checklist:</p>
                                <ul className="list-disc pl-4 space-y-1 text-gray-500">
                                    <li>File exists in repo: <code>public/images/</code></li>
                                    <li>Filename is <code>jae_hyun_lee.png</code></li>
                                    <li><strong>Case Sensitive!</strong></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-6 text-center lg:text-left">
                     <a 
                        href="https://scholar.google.com/citations?user=0-Cvzx8AAAAJ&hl=ko" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center text-primary hover:text-blue-800 font-semibold"
                    >
                        <ExternalLink size={18} className="mr-2" /> Google Scholar Profile
                    </a>
                </div>
            </div>

            {/* PI Details */}
            <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold text-primary mb-2">Prof. Jae-Hyun Lee</h3>
                <p className="text-lg text-gray-700 mb-1">Associate Professor, Dept. of Nano Biomedical Engineering</p>
                <p className="text-lg text-gray-700 mb-1">Institute for Advanced Studies, Yonsei University</p>
                <p className="text-lg text-gray-700 mb-6">Research Fellow, IBS Center for Nanomedicine</p>

                <div className="space-y-8">
                    {/* Education */}
                    <div>
                        <h4 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                            <GraduationCap className="mr-2 text-accent" /> Education
                        </h4>
                        <ul className="space-y-3 text-gray-600 border-l-2 border-gray-100 pl-4">
                            <li>
                                <span className="font-semibold text-gray-800 block">2005 – 2011</span> 
                                Ph.D. Chemistry, Yonsei University, Seoul, Korea
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">2003 – 2005</span> 
                                M.S. Chemistry, Yonsei University, Seoul, Korea
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">1998 – 2002</span> 
                                B.S. Chemistry, Yonsei University, Seoul, Korea
                            </li>
                        </ul>
                    </div>

                    {/* Career */}
                    <div>
                        <h4 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                            <Briefcase className="mr-2 text-accent" /> Professional Career
                        </h4>
                        <ul className="space-y-3 text-gray-600 border-l-2 border-gray-100 pl-4">
                            <li>
                                <span className="font-semibold text-gray-800 block">2025 – Present</span> 
                                Associate Professor, Advanced Science Institute, Yonsei University
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">2018 – 2024</span> 
                                Assistant Professor, Advanced Science Institute, Yonsei University
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">2014 – 2017</span> 
                                Post-doctoral fellow, Dept. of Chemistry and Chemical Biology, Harvard University
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">2012 – 2013</span> 
                                Visiting post-doctoral fellow: Dept. of Physics & Astronomy, UCLA
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">2011 – 2012</span> 
                                Postdoctoral Fellow, Center for Evolutionary Nanoparticles, Dept. of Chemistry, Yonsei University
                            </li>
                        </ul>
                    </div>

                    {/* Awards */}
                    <div>
                        <h4 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                            <Award className="mr-2 text-accent" /> Awards and Honors
                        </h4>
                        <ul className="space-y-2 text-gray-600 border-l-2 border-gray-100 pl-4">
                            <li><span className="font-semibold">2016</span> Most cited Korean scientist in medicine, Dong-A Ilbo</li>
                            <li><span className="font-semibold">2015</span> First place, Nanotechnology Young Researcher Award, IOP Publishing</li>
                            <li><span className="font-semibold">2013</span> Delegate of Korea, 63rd Lindau Nobel Laureate Meeting</li>
                            <li><span className="font-semibold">2011</span> Sung-ki Jung Award, Yonsei University</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Members Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
                href="https://ibs.yonsei.ac.kr/people.asp?mid=m04_03&sOpt=D" 
                target="_blank"
                rel="noreferrer"
                className="block p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all group"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary mb-2">Graduate Students</h3>
                        <p className="text-gray-500">View current graduate students at the IBS Center website.</p>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
            </a>

            <a 
                href="https://ibs.yonsei.ac.kr/people.asp?mid=m04_03&sOpt=C" 
                target="_blank"
                rel="noreferrer"
                className="block p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all group"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary mb-2">Postdocs</h3>
                        <p className="text-gray-500">View current post-doctoral researchers at the IBS Center website.</p>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
            </a>
        </div>
      </div>

    </div>
  );
};

export default People;