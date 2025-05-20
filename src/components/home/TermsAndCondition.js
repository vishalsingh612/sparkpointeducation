import React from 'react'
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"
const TermsAndCondition = () => {
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

  const subheading = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginTop: '30px',
    marginBottom: '10px',
  }

  const paragraph = {
    fontSize: '16px',
    marginBottom: '15px',
  }

  return (
    <>
    <Back title='Terms and Conditions' />
    <Heading 
              
              title='Terms and Conditions'
            />
    <div style={container}>
     
      <p style={paragraph}>
        By accessing or using Spark Point Education’s website or services, you agree to be bound by these terms and conditions. We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of any changes.
      </p>

      <p style={paragraph}>
        All content, study material, and services provided are the intellectual property of Spark Point Education. Unauthorized copying, sharing, or reproduction is strictly prohibited.
      </p>

      <p style={paragraph}>
        Users must ensure the accuracy of their information during registration. We are not responsible for issues arising from incorrect or incomplete information.
      </p>

      <p style={paragraph}>
        Spark Point Education may suspend or terminate access to the platform for violation of these terms, misuse of resources, or unethical behavior.
      </p>

      <h2 style={subheading}>Refund Policy</h2>

      <p style={paragraph}>
        We strive to offer the best experience. If you're not satisfied with a service, refund requests must be submitted within 7 days of enrollment. Approval is subject to review.
      </p>
    </div>
    </>
  )
}

export default TermsAndCondition
