
import React from 'react';

const ExperiencesPage = () => {
  const experiences = [
    { year: '2015', skill: 'C' },
    { year: '2016', skill: 'C++' },
    { year: '2017', skill: 'HTML, CSS' },
    { year: '2018', skill: 'JavaScript' },
    { year: '2019', skill: 'React.js' },
    { year: '2020', skill: 'Next.js' },
    { year: '2021 - 2023', skill: 'Front End Development' }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Professional Experiences</h1>
      <ul className="list-disc ml-6">
        {experiences.map((experience, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{experience.year}:</span>{' '}
            {experience.skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencesPage;
