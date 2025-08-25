import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Lightbulb className="text-yellow-600" size={24} />,
      title: "Problem Solver",
      description: "Passionate about finding creative solutions to complex technical challenges."
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Team Player",
      description: "Collaborative approach with excellent communication and leadership skills."
    },
    {
      icon: <Coffee className="text-brown-600" size={24} />,
      title: "Continuous Learner",
      description: "Always staying updated with the latest technologies and industry trends."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Digital Experiences That Matter
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With 2 years of experience in software development, I specialize in creating 
              full-stack applications using modern technologies. My journey started with a 
              curiosity about how things work, which led me to pursue computer science and 
              eventually become a professional developer.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that 
              are both beautiful and functional. When I'm not coding, you can find me exploring 
              new technologies, contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;