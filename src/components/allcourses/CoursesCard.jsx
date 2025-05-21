import React from "react";
import "./courses.css";
import Heading from "../common/heading/Heading"

const courseData = [
  {
    id: 1,
    title: "SAT Preparation - 4 Months",
    image: "../../images/course1.webp", 
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 80000,
    originalPrice: 95000,
    discount: "15% OFF",
    link: "https://www.sparkpointprep.com/courses/653140"
  },
  {
    id: 2,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "../../images/course2.webp",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
    link: "https://www.sparkpointprep.com/courses/648529"
  },
  {
    id: 3,
    title: "IELTS Preparation Course (One-on-One)",
    image: "../../images/course3.webp",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 25000,
    originalPrice: 30000,
    discount: "16% OFF",
    link: "https://www.sparkpointprep.com/courses/648528"
  },
  {
    id: 4,
    title: "SAT Preparation - 3 Months",
    image: "../../images/course4.webp",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 60000,
    originalPrice: 75000,
    discount: "20% OFF",
    link: "https://www.sparkpointprep.com/courses/640301"
  },
  {
    id: 5,
    title: "Placement Prep",
    image: "../../images/course5.svg",
    tags: [ "TESTS", "FILES"],
    price: 500,
    originalPrice: 600,
    discount: "17% OFF",
    link: "https://www.sparkpointprep.com/courses/311307"
  },
  {
    id: 6,
    title: "Campus Placement Exam Pack | Online Test Series",
    image: "../../images/course6.webp",
    tags: [ "TESTS", "FILES"],
    price: 500,
    originalPrice: 600,
    discount: "17% OFF",
    link: "https://www.sparkpointprep.com/courses/265902"
  },
];

const CoursesCard = () => {
  return (
    <section className="coursesCardWrapper">
  <Heading subtitle="COURSES WE OFFER" title="ALL COURSES" />
  <div className="container grid2">
    {courseData.map((course) => (
      <div key={course.id} className="course-card">
        <img
          className="course-banner"
          src={course.image}
          alt={course.title}
        />

        <div className="course-tags">
          {course.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <h3 className="course-title">{course.title}</h3>

        <div className="course-price">
          <span className="price-discounted">₹ {course.price}</span>
          <span className="price-original">₹ {course.originalPrice}</span>
          <span className="price-off">({course.discount})</span>
        </div>

        <a href={course.link} style={{ textDecoration: "none" }}>
          <button
            className="get-course-btn"
            style={{ color: "#fff", backgroundColor: "#7F3E99", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}
          >
            Get this course
          </button>
        </a>
      </div>
    ))}
  </div>
</section>

  );
};

export default CoursesCard;
