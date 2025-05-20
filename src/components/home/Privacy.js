import React from 'react'
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"

const Privacy = () => {
  const container = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    color: '#444',
    lineHeight: 1.7,
  }

  const heading = {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  }

  const paragraph = {
    fontSize: '16px',
    marginBottom: '15px',
  }

  return (
    <>
      <Back title='Privacy Policy' />
      <Heading 
        title='Privacy Policy'
      />
      <div style={container}>
        <p style={paragraph}>
          Spark Point Education is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services.
        </p>

        <p style={paragraph}>
          We collect only the information necessary to provide personalized learning experiences and improve our offerings. This may include your name, email address, academic interests, and progress data.
        </p>

        <p style={paragraph}>
          Your data is securely stored and is never sold to third parties. We may share information only with trusted partners as needed to deliver our services, and always in compliance with privacy regulations.
        </p>

        <p style={paragraph}>
          You have the right to access, modify, or request deletion of your personal information at any time. To do so, simply contact our support team.
        </p>

        <p style={paragraph}>
          Our platform uses standard security measures, including encryption and secure servers, to protect your data.
        </p>

        <p style={paragraph}>
          By using our services, you consent to the practices outlined in this policy. Any changes to the policy will be posted here and effective immediately.
        </p>
      </div>
    </>
  )
}

export default Privacy
