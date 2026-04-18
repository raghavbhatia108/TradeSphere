import React from 'react'
import './ProductSection.css'

const RightSection = ({content, productName, productDescription, learnMore}) => {
  const isComponent = typeof content === 'function' || React.isValidElement(content)

  return (
    <section className="product-section product-section-reverse">
      <div className="product-section-container">
        <div className="product-left">
          <h2>{productName}</h2>
          <p className="product-description">{productDescription}</p>
          {learnMore && <a href={learnMore} className="product-link-btn">Learn More →</a>}
        </div>
        <div className="product-right">
          {isComponent ? (
            <div className="product-mock">
              {typeof content === 'function' ? content() : content}
            </div>
          ) : (
            <img src={content} alt={productName} className="product-image"/>
          )}
        </div>
      </div>
    </section>
  )
}

export default RightSection