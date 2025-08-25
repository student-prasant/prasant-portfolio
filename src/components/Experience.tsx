import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Tech Solutions Inc",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Develop and maintain web applications using modern technologies. Work closely with senior developers to deliver high-quality software solutions.",
      achievements: [
        "Built 10+ responsive web applications from scratch",
        "Improved application performance by 30% through code optimization",
        "Collaborated with cross-functional teams on 5 major product releases"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Junior Software Developer",
      company: "Digital Innovations",
      location: "Austin, TX",
      period: "2022 - 2023",
      description: "Started my professional journey developing web applications and learning industry best practices. Gained hands-on experience with full-stack development.",
      achievements: [
        "Successfully delivered 8+ client projects on time",
        "Learned and applied modern development frameworks",
        "Contributed to reducing bug reports by 25% through testing"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <Briefcase className="text-gray-400 flex-shrink-0" size={24} />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;