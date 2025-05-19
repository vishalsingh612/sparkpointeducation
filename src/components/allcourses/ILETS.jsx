import React  , {useEffect} from 'react';
import './internationalCurriculumStyles.css'; // reuse same styles
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
import "./ieltsPageStyles.css"
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

const IELTSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const englishCourses = [
    { title: "IELTS Academic Preparation", description: "Focused training for students aiming to study in English-speaking universities." },
    { title: "IELTS General Training", description: "Ideal for work or migration purposes, with real-world English usage." },
    { title: "IELTS Speaking Skills", description: "Fluency, pronunciation, and confidence-building in spoken English." },
    { title: "IELTS Writing Tasks 1 & 2", description: "Master academic writing and essay composition strategies." },
    { title: "Listening & Reading Strategies", description: "Tackle time management and comprehension challenges efficiently." },
  ];

  return (
    <>
      <Back title='IELTS Preparation' />
      <div className="internationalCurriculumWrapper">
        <Heading subtitle='IELTS COACHING' title='Master English with IELTS Expertise' />
        <Section
          heading="IELTS English Language Courses"
          data={englishCourses}
          link="/courses/ielts"
          advantages="Our IELTS modules focus on all four language skills—Listening, Reading, Writing, and Speaking—ensuring a complete preparation experience tailored to your goals."
        />
      </div>
    </>
  );
};

export default IELTSPage;
