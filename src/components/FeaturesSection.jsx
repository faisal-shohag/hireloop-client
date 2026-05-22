import React from 'react';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Bookmark, 
  MousePointerClick, 
  FileText, 
  Hexagon, 
  LineChart 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring."
    },
    {
      icon: <Bookmark className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard."
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!"
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates."
    },
    {
      icon: <Hexagon className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience."
    },
    {
      icon: <LineChart className="w-6 h-6 text-indigo-600 dark:text-pink-400" />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips."
    }
  ];

  return (
    <section className="bg-slate-50 text-slate-900 dark:bg-[#0f0f11] dark:text-white py-20 px-6 md:px-12 lg:px-24 font-sans select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Tagline */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.2em] text-slate-500 dark:text-[#8e8ea8] uppercase">
          <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-[#5b56f1]"></span>
          <span>Features Job</span>
          <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-[#5b56f1]"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-normal text-center tracking-tight mb-16 max-w-2xl leading-[1.15]">
          Everything you need <br /> to succeed
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start group">
              
              {/* Icon Container */}
              <div className="shrink-0 w-14 h-14 bg-white border border-slate-200 dark:bg-[#141416] dark:border-[#1f1f23] rounded-xl flex items-center justify-center shadow-sm dark:shadow-inner group-hover:border-indigo-500/50 dark:group-hover:border-pink-500/30 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[17px] font-medium text-slate-800 dark:text-[#f3f3f5] tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-slate-500 dark:text-[#8a8a93] font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;