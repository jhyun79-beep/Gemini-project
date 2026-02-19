import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { publications } from '../data/publications';

const Publications: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
           <p className="text-gray-600 mb-4">
             Selected recent publications. For a complete list, please visit our IBS Center page.
           </p>
           <a 
             href="https://ibs.yonsei.ac.kr/people.asp?mid=m04_02&sOpt=A&act=view&uid=1004"
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center text-primary font-semibold hover:underline"
           >
             View Full Publication List <ExternalLink size={16} className="ml-2" />
           </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-primary">
                  <span className="font-bold text-sm">{pub.id}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 italic">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
                    <span className="text-primary">{pub.journal}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-800">{pub.year}</span>
                    {pub.volume && (
                        <>
                             <span className="text-gray-400">|</span>
                             <span className="text-gray-600">Vol. {pub.volume}</span>
                        </>
                    )}
                    {pub.pages && (
                        <>
                             <span className="text-gray-400">|</span>
                             <span className="text-gray-600">pp. {pub.pages}</span>
                        </>
                    )}
                    {pub.doi && (
                        <a 
                            href={`https://${pub.doi}`} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="ml-auto flex items-center text-xs text-blue-500 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded"
                        >
                            <FileText size={12} className="mr-1" /> DOI Link
                        </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-gray-500 mb-4">... showing selected recent works ...</p>
             <a 
                href="https://ibs.yonsei.ac.kr/people.asp?mid=m04_02&sOpt=A&act=view&uid=1004"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
             >
                See All 60+ Publications
             </a>
        </div>
      </div>
    </div>
  );
};

export default Publications;