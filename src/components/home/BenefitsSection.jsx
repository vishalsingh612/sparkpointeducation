import React from "react"

const benefits = [
  {
    title: "🎓 Expert-Led Courses",
    desc: "Learn from top educators with years of experience in SAT, IELTS, and global syllabi.",
  },
  {
    title: "📘 Curriculum-Aligned Content",
    desc: "Covers SAT, IELTS, AP, IB, IGCSE, and A-Level formats accurately.",
  },
  {
    title: "🕒 Learn Anytime, Anywhere",
    desc: "Access content on web & app at your own pace, anytime.",
  },
  {
    title: "📂 Instant Study Material",
    desc: "Get videos, notes, quizzes, and mock tests in one place.",
  },
  {
    title: "📊 Progress Tracking",
    desc: "Track your learning and focus on weak areas easily.",
  },
  {
    title: "💸 Affordable Plans",
    desc: "Comprehensive learning at a fraction of offline costs.",
  },
  {
    title: "🔁 Dual Access",
    desc: "Switch between mobile and desktop with synced progress.",
  },
  {
    title: "🆓 Free Previews",
    desc: "Try before you enroll with sample lessons in every course.",
  },
  {
    title: "⚡ Exam Tips & Strategies",
    desc: "Learn shortcuts, elimination tricks & scoring methods.",
  },
  {
    title: "🙋 Support + Updates",
    desc: "Ongoing updates & help via app chat, email, and web.",
  },
]

const BenefitsSection = () => {
  const containerStyle = {
    backgroundColor: "#f8f2fa",
    padding: "60px 20px",
    color: "#333",
    fontFamily: "sans-serif",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
   
  }

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7F3E99",
  }

  const descStyle = {
    fontSize: "14px",
    lineHeight: 1.6,
  }

  const sectionTitle = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#7F3E99",
  }

  return (
    <section style={containerStyle}>
      <h2 style={sectionTitle}>Benefits of Online Tutoring with SparkPoint Education</h2>
      <div style={gridStyle}>
        {benefits.map((item, index) => (
          <div key={index} style={boxStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <p style={descStyle}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
