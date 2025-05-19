import React, { useEffect } from 'react';
import './internationalCurriculumStyles.css';
import Back from "../common/back/Back"
import Heading from "../common/heading/Heading"
const CurriculumCard = ({ title, description }) => (
  <div className="curriculumCard">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Section = ({ heading, data, link, advantages }) => (
  <div className="curriculumSection">
    <h1>{heading}</h1>
    <div className="curriculumGrid">
      {data.map((course, index) => (
        <CurriculumCard key={index} title={course.title} description={course.description} />
      ))}
    </div>
    <p className="advantages">{advantages}</p>
    <div className="sectionButtonWrapper">
      <a href={link}>
        <button className="curriculumButton">Explore {heading}</button>
      </a>
    </div>
  </div>
);


const InternationalCurriculum = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const apCourses = [
    { title: "AP Art History", description: "Study of Western and global art from prehistory to the present." },
    { title: "AP Music Theory", description: "Music notation, harmony, composition, and ear training." },
    { title: "AP English Language and Composition", description: "Rhetoric, argumentation, and non-fiction analysis." },
    { title: "AP Calculus AB", description: "Limits, derivatives, and integrals. College-level calculus." },
    { title: "AP Computer Science A", description: "Java programming with algorithms and data structures." },
  ];

  const ibCourses = [
    { title: "IB Language & Literature", description: "Analyzing texts across cultures and media with a global perspective." },
    { title: "IB Theory of Knowledge (TOK)", description: "Encourages critical thinking about knowledge itself." },
    { title: "IB Extended Essay", description: "Independent, self-directed research culminating in a 4,000-word paper." },
    { title: "IB Mathematics: Analysis and Approaches", description: "Focuses on mathematical thinking and calculus." },
    { title: "IB Environmental Systems and Societies", description: "Interdisciplinary course combining science and societal understanding." },
  ];

  const igcseCourses = [
    { title: "IGCSE First Language English", description: "Develops analytical and communication skills in English." },
    { title: "IGCSE Mathematics", description: "Core and extended content on algebra, geometry, and statistics." },
    { title: "IGCSE Coordinated Sciences", description: "Double award in Biology, Chemistry, and Physics." },
    { title: "IGCSE Business Studies", description: "Understanding of business activities in different environments." },
    { title: "IGCSE Information & Communication Technology", description: "Practical and theoretical computer knowledge." },
  ];

  return (
    <>
     <Back title='International Curriculum' />

    <div className="internationalCurriculumWrapper">
    <Heading subtitle='OUR INTERNATIONAL CURRICULUM' title='International Curriculum' />
      <Section
        heading="Advanced Placement (AP)"
        data={apCourses}
        link="/courses/ap"
        advantages="AP courses allow high school students to tackle college-level work, potentially earn college credits, and demonstrate readiness to universities."
      />
      <Section
        heading="International Baccalaureate (IB)"
        data={ibCourses}
        link="/courses/ib"
        advantages="The IB curriculum nurtures critical thinking, global awareness, and research skills—highly valued by top universities worldwide."
      />
      <Section
        heading="IGCSE (Cambridge)"
        data={igcseCourses}
        link="/courses/igcse"
        advantages="IGCSE builds a strong academic foundation and prepares students for further international qualifications like A-Levels or IB."
      />
    </div>
    </>
  );
};

export default InternationalCurriculum;