import React from "react"
import { price } from "../../dummydata"
import Heading from "../common/heading/Heading"

const PriceCard = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0px 20px',
  }

  const cardStyle = {
    flex: '1 1 30%',
    minWidth: '280px',
    maxWidth: '340px',
    background: '#fff',
    padding: '20px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    boxSizing: 'border-box',
  }

  const headingStyle = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#7F3E99',
    marginBottom: '10px',
  }

  const descStyle = {
    fontSize: '15px',
    color: '#555',
    lineHeight: 1.6,
  }

  return (
    <>
      <div style={containerStyle}>
        {price.map((val, index) => (
          <div key={index} style={cardStyle}>
            <h4 style={headingStyle}>{val.name}</h4>
            {/* <h1>{val.price}</h1> */}
            <p style={descStyle}>{val.desc}</p>
            {/* <button className='outline-btn'>GET STARTED</button> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
