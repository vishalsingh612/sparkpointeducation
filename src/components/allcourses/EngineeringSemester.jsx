import React , {useEffect} from 'react';
import './internationalCurriculumStyles.css'; 
import Back from "../common/back/Back"
import Heading from "../common/heading/Heading"

const CurriculumCard = ({ title, description }) => (
  <div className="curriculumCard">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Section = ({ heading, data, advantages }) => (
  <div className="curriculumSection">
    <h1>{heading}</h1>
    <div className="curriculumGrid">
      {data.map((course, index) => (
        <CurriculumCard key={index} title={course.title} description={course.description} />
      ))}
    </div>
    <p className="advantages">{advantages}</p>
    <div className="sectionButtonWrapper">
      <p style={{ fontSize: '16px', color: '#888', fontWeight: 'bold' }}>🚧 Coming Soon</p>
    </div>
  </div>
);

const EngineeringSemester = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const coreSubjects = [
    { title: "Engineering Mathematics", description: "Covers linear algebra, calculus, differential equations, and complex numbers." },
    { title: "Engineering Mechanics", description: "Statics, dynamics, and strength of materials." },
    { title: "Thermodynamics", description: "Laws of thermodynamics, cycles, and energy systems." },
    { title: "Data Structures and Algorithms", description: "Implementation, analysis, and optimization of data structures." },
    { title: "Digital Electronics", description: "Logic gates, combinational and sequential circuits." }
  ];

  return (
    <>
      <Back title='Engineering Semester Exams' />
      <div className="internationalCurriculumWrapper">
        <Heading subtitle='ENGINEERING COURSES' title='Semester Exam Preparation' />
        <Section
          heading="Core Engineering Subjects"
          data={coreSubjects}
          advantages="Mastering these subjects is crucial for strong academic performance and success in placement exams, GATE, and technical interviews."
        />
      </div>
    </>
  );
};

export default EngineeringSemester;
