import React from "react";
import "./courses.css";
import Heading from "../common/heading/Heading"
const courseData = [
  {
    id: 1,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  {
    id: 2,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  {
    id: 3,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  {
    id: 4,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  {
    id: 5,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  {
    id: 6,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  {
    id: 7,
    title: "IELTS Preparation Course (One-on-Five)",
    image: "/images/ielts-banner.png",
    tags: ["LIVE CLASS", "VIDEOS", "FILES"],
    price: 7500,
    originalPrice: 12000,
    discount: "37% OFF",
  },
  // Add more courses here if needed
];

const CoursesCard = () => {
  return (
    <section className="coursesCardWrapper">
        <Heading subtitle='COURSES WE OFFER' title='ALL COURSES' />
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

            <button className="get-course-btn">Get this course</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesCard;
