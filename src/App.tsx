import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Award,
  BookOpen,
  Code,
  Database,
  Server,
} from 'lucide-react';

const skills = [
  {
    name: 'C/C++',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    name: 'Node.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Angular',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'Python',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Java',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'HTML/CSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'JavaScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'MongoDB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Express',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Git',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Tailwind',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'AWS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    name: 'TypeScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
];

const projects = [
  {
    name: 'MODERN HOUSE: EVS Project',
    description:
      'Includes ENERGY FLOOR, WATER HARVESTING, BIOGAS PLANT, SEWAGE TREATMENT PLANT, HYDROPONICS, GREEN HOUSE, SOLAR PANEL, etc.',
    link: 'https://pdf.ac/1ys0YF',
  },
  {
    name: 'E-CUPBOARD: Engineering Exploration',
    description:
      'Secured by a digital keypad Password, providing safety, Portability, Durability, User-Friendliness, and Affordability.',
    link: 'https://pdf.ac/2WRmCz',
  },
  {
    name: 'Book Store Management',
    description: 'A system to manage book inventory and sales for a bookstore.',
    link: '#',
  },
  {
    name: 'Carbon Sense AI',
    description: 'AI-powered solution for carbon footprint reduction.',
    link: '#',
  },
  {
    name: 'NOC Generation System',
    description: 'Automated system for generating No Objection Certificates.',
    link: '#',
  },
  {
    name: 'Library Management System',
    description: 'Comprehensive system for managing library operations.',
    link: '#',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-indigo-600">Snehal Patil</h1>
            <ul className="flex space-x-4">
              {[
                'about',
                'skills',
                'projects',
                'experience',
                'achievements',
                'contact',
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`capitalize ${
                      activeSection === item
                        ? 'text-indigo-600 font-semibold'
                        : 'text-gray-600'
                    } hover:text-indigo-500 transition-colors`}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/path-to-your-cv.pdf"
                  download
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-indigo-700 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Snehal Manoj Patil</h1>
          <p className="text-2xl mb-4">
            Web Developer | Computer Science Student
          </p>
          <div className="flex items-center">
            <MapPin className="mr-2" size={18} />
            <p>
              Opposite SSC board, Railway station road, Snehnagar,
              Aurangabad-431001
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-800">
            About Me
          </h2>
          <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <img
              src="/PASSPORT-PHOTO.jpg"
              alt="Snehal Patil"
              className="rounded-full w-32 h-32 object-cover shadow-md"
            />
            <p className="text-lg mb-4">
              I am an enthusiastic, self-motivated, responsible, dedicated,
              organized, and methodical individual. I am a good listener and
              learner, and a hard-working person. I completely devote myself to
              projects with full dedication and discipline.
            </p>
            <p className="text-lg mb-6">
              Working in a team and problem-solving are among my basic skills. I
              am a flexible person seeking employment which will allow
              development, growth, and make use of my existing skills.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">
              Education
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>
                  Bachelor of Technology (B-TECH) in Computer Science
                </strong>{' '}
                - MGM University JNEC College [Expected Graduation: 2026]
              </li>
              <li>
                <strong>Diploma in German</strong> - MGM Institute of Indian and
                Foreign Languages [2023-24]
              </li>
              <li>
                <strong>Higher Secondary Education</strong> - Shiv Chhatrapati
                College [2021-2022] - 85.5%
              </li>
              <li>
                <strong>Secondary Education</strong> - Aurangabad Police Public
                School [2014-2020] - 93%
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-800">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 mb-2"
                />
                <span className="text-center font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-800">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  {project.name}
                </h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-800">
            Experience
          </h2>
          <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <ul className="space-y-4">
              <li>
                <strong>
                  Internship and training on Machine Learning with Python
                </strong>{' '}
                - EXTERNS CLUB
              </li>
              <li>
                <strong>Android App Development Internship</strong> - Codsoft
              </li>
              <li>
                <strong>Amazon Web Services (AWS) Workshop</strong>
              </li>
              <li>
                <strong>Cyber security, Digital Forensic & VAPT</strong> - 2
                days hands-on workshop
              </li>
              <li>
                <strong>Web Development and Designing Internship</strong> -
                Oasis Infobyte
              </li>
              <li>
                <strong>Full Stack Web Developer Internship</strong> - Bharat
                Intern
              </li>
              <li>
                <strong>Smart India Hackathon (SIH) Participant</strong> -
                Selected for Internal Hackathon twice
              </li>
              <li>
                <strong>PRAGATI Program</strong> - INFOSYS SPRINGBOARD
              </li>
            </ul>
          </div>
        </section>

        <section id="achievements" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-800">
            Achievements
          </h2>
          <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <ul className="space-y-2">
              <li>KHELO INDIA YOUTH GAMES Fencing - Top 5th team in INDIA</li>
              <li>
                First year 1ST SEM engineering 8.76 CGPA (overall 10th topper)
              </li>
              <li>
                First year 2ND SEM engineering 9.18 CGPA (overall 4th topper)
              </li>
              <li>
                Second year 3RD SEM engineering 9.25 CGPA (overall in top 3)
              </li>
              <li>
                12th boards percentage 85% (3rd Rank) [Shiv Chhatrapati College]
              </li>
              <li>
                10th boards percentage 93% (4th rank) [Aurangabad Police Public
                School]
              </li>
              <li>
                Best Sports Girl Award 2020 [Aurangabad Police Public School]
              </li>
              <li>BRONZE Medal in Junior National Fencing Championship 2022</li>
              <li>SILVER Medal in School National Fencing Championship 2020</li>
              <li>
                Bronze medal in ALL INDIA INTERUNIVERSITY GAMES SOUTH AND WEST
                ZONE
              </li>
              <li>
                Overall 13 GOLD MEDALS, 7 SILVER MEDALS, 9 BRONZE MEDALS in
                Fencing and School Championships
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-800">
            Contact
          </h2>
          <div className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  Get in Touch
                </h3>
                <div className="space-y-2">
                  <a
                    href="mailto:snehalmpatil2004@gmail.com"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Mail className="mr-2" /> snehalmpatil2004@gmail.com
                  </a>
                  <a
                    href="tel:+917350965965"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Phone className="mr-2" /> +91 7350965965
                  </a>
                  <a
                    href="https://github.com/Snehalp2004?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Github className="mr-2" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/snehal-patil-74377a282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Linkedin className="mr-2" /> LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Snehal Patil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
