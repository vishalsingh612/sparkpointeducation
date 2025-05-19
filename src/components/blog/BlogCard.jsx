import React, { useState } from "react"
import "./blogcard.css"

const blog = [
  {
    id: 1,
    cover: "https://www.jeduka.com/storage/newsletter/1599897667_sat_exam.png",
    title: "How to Ace the SAT Reading & Writing Section",
    type: "Ms. Sharma",
    date: "May 14, 2025",
    desc: [
      {
        heading: "Know the Test, Master the Format",
        content: "The digital SAT combines reading and writing into a single, streamlined section, featuring short passages followed by focused questions. These questions test your ability to analyze and interpret texts, choose the right words and sentence structures, apply grammar and punctuation rules, and evaluate arguments and improve clarity."
      },
      {
        heading: "Deepen Reading Comprehension Skills",
        content: "SAT reading is about active engagement—not passive scanning. Each passage demands your attention to central ideas, author's tone, purpose, structure, inferences, and comparisons. Practice identifying key points and mapping the passage's structure."
      },
      {
        heading: "Master Vocabulary in Context",
        content: "You won’t be quizzed on obscure definitions but must determine word meanings from context, select words for tone and clarity, and understand how word choice affects meaning."
      },
      {
        heading: "Polish Your Grammar and Usage",
        content: "Focus on subject-verb agreement, pronoun clarity, modifiers, parallel structure, and punctuation rules. Learn to apply grammar in realistic writing contexts."
      },
      {
        heading: "Refine Revision and Editing Skills",
        content: "Improve clarity, transitions, sentence structure, and eliminate redundancy. Practice reorganizing and rewriting for coherence and precision."
      },
      {
        heading: "Practice with Intentional Focus",
        content: "Use official materials, time your sessions, review mistakes deeply, and track error patterns. Reflect after each session and target weak areas."
      },
      {
        heading: "Build Endurance and Test-Taking Confidence",
        content: "Simulate full test conditions to improve pacing, reduce anxiety, and build reliability under pressure. Schedule regular timed sessions."
      },
      {
        heading: "Final Thoughts",
        content: "To truly master SAT Reading & Writing, you need strategic practice. Treat every question as an opportunity to build literacy and reasoning for life."
      }
    ]
  },
  
]

const BlogCard = () => {
  const [expandedIds, setExpandedIds] = useState([])

  const toggleExpand = (id) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const getShortPreview = (desc) => {
    return desc[0].content.split(" ").slice(0, 20).join(" ") + "..."
  }

  return (
    <div className="blog-container">
      {blog.map((val) => {
        const isExpanded = expandedIds.includes(val.id)
        return (
          <div className='blog-card' key={val.id}>
            <div className='blog-content'>
              <div className='blog-info'>
                <div className='blog-img'>
                  <img src={val.cover} alt='cover' />
                </div>
                <div className='meta'>
                  <span><i className='fa fa-user'></i> {val.type}</span>
                  <span><i className='fa fa-calendar-alt'></i> {val.date}</span>
                </div>
                <h1>{val.title}</h1>
                
                <div className="blog-desc">
                  {isExpanded ? (
                    val.desc.map((section, index) => (
                      <div key={index} className="desc-section">
                        <h3>{section.heading}</h3>
                        <p>{section.content}</p>
                      </div>
                    ))
                  ) : (
                    <p>{getShortPreview(val.desc)}</p>
                  )}
                  <button
                    className="toggle-btn"
                    onClick={() => toggleExpand(val.id)}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BlogCard
