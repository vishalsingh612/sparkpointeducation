import React  , {useEffect} from 'react';
import './internationalCurriculumStyles.css';
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";

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

const SATPreparation = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const satCourses = [
    { title: "SAT Reading", description: "Master reading comprehension and evidence-based reasoning." },
    { title: "SAT Writing & Language", description: "Grammar, sentence structure, and style improvement." },
    { title: "SAT Math (No Calculator)", description: "Algebra, arithmetic, and problem solving without a calculator." },
    { title: "SAT Math (With Calculator)", description: "Data analysis, functions, and advanced math concepts." },
    { title: "SAT Practice Tests", description: "Full-length simulations to build timing and confidence." },
  ];

  return (
    <>
      <Back title='SAT Preparation' />
      <div className="internationalCurriculumWrapper">
        <Heading subtitle='YOUR GATEWAY TO TOP UNIVERSITIES' title='SAT Preparation' />
        <Section
          heading="SAT Preparation Modules"
          data={satCourses}
          link="https://www.sparkpointeducation.com/courses?mainCategory=0&subCatList=[283341]"
          advantages="Our SAT program is structured to improve performance through strategy, skill-building, and consistent practice—aligned with the latest College Board format."
        />
      </div>
    </>
  );
};

export default SATPreparation;
