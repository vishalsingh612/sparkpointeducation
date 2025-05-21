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
        { 
          title: "AP English Language and Composition", 
          description: "Rhetoric, argumentation, and non-fiction analysis." 
        },
        { 
          title: "AP Calculus AB", 
          description: "Limits, derivatives, and integrals. College-level calculus." 
        },
        { 
          title: "AP Computer Science A", 
          description: "Java programming with algorithms and data structures." 
        },
        { 
          title: "AP Physics", 
          description: "Mechanics, electricity, magnetism, and problem-solving with mathematical reasoning." 
        },
        { 
          title: "AP Chemistry", 
          description: "Atomic structure, chemical reactions, thermodynamics, and laboratory techniques." 
        },
        { 
          title: "AP Biology", 
          description: "Cell biology, genetics, evolution, and ecosystems with lab-based application." 
        }
      ]
      

  const ibCourses = [
    { title: "IB Language & Literature", description: "Analyzing texts across cultures and media with a global perspective." },
    { title: "IB Theory of Knowledge (TOK)", description: "Encourages critical thinking about knowledge itself." },
    { title: "IB Extended Essay", description: "Independent, self-directed research culminating in a 4,000-word paper." },
    { title: "IB Mathematics: Analysis and Approaches", description: "Focuses on mathematical thinking and calculus." },
    { title: "IB Environmental Systems and Societies", description: "Interdisciplinary course combining science and societal understanding." },
  ];

  const igcseCourses = [
    { title: "", description: "The Cambridge International AS & A Levels are prestigious, globally recognized qualifications offered to students typically in Grades 11 and 12. Designed to develop in-depth subject knowledge, logical reasoning, and independent thinking, these qualifications are a gateway to top universities around the world." },
    { title: "Exam Structure:", description: " AS Level: Completed in one year (usually Grade 11) | A Level: Completed over two years (Grades 11 & 12)" },
    { title: "Subjects We Offer Coaching For:", description: "Mathematics (Pure Math, Mechanics, Probability & Statistics) Physics , Chemistry , Biology , Computer Science | Commerce & Business: Economics , Business , Accounting | Humanities & Languages:  English Language , English Literature , Psychology  , Sociology  , Global Perspectives , History , Geography " },
   
  ];

  return (
    <>
     <Back title='International Curriculum' />

    <div className="internationalCurriculumWrapper">
    <Heading subtitle='OUR INTERNATIONAL CURRICULUM' title='International Curriculum' />
      <Section
        heading="Advanced Placement (AP)"
        data={apCourses}
        link="https://www.sparkpointprep.com/courses"
        advantages="AP courses allow high school students to tackle college-level work, potentially earn college credits, and demonstrate readiness to universities."
      />
      <Section
        heading="International Baccalaureate (IB)"
        data={ibCourses}
        link="https://www.sparkpointprep.com/courses"
        advantages="The IB curriculum nurtures critical thinking, global awareness, and research skills—highly valued by top universities worldwide."
      />
      <Section
        heading="IGCSE (Cambridge)"
        data={igcseCourses}
        link="https://www.sparkpointprep.com/courses"
        advantages="IGCSE builds a strong academic foundation and prepares students for further international qualifications like A-Levels or IB."
      />
      <Section
        heading="AS & A-Level Exams"
        data={igcseCourses}
        link="https://www.sparkpointprep.com/courses"
        advantages="Why AS & A Levels?

Widely accepted by top universities worldwide

Deepens subject understanding and analytical skills

Flexible subject combinations allow personalized academic paths

Prepares students for competitive exams like SAT, ACT, and more


Our Edge:

Experienced faculty with Master’s degrees in each subject

Topic-wise clarity, exam pattern-based practice, and past paper training

Personalised doubt-solving and performance tracking

Proven track record of high achievers"
      />
    </div>
    </>
  );
};

export default InternationalCurriculum;