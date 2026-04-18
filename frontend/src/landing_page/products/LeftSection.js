import React from 'react'
import './ProductSection.css'

const LeftSection = ({content, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  const isComponent = typeof content === 'function' || React.isValidElement(content)

  return (
    <section className="product-section">
      <div className="product-section-container">
        <div className="product-left">
          {isComponent ? (
            <div className="product-mock">
              {typeof content === 'function' ? content() : content}
            </div>
          ) : (
            <img src={content} alt={productName} className="product-image"/>
          )}
        </div>
        <div className="product-right">
          <h2>{productName}</h2>
          <p className="product-description">{productDescription}</p>
          <div className="product-links">
            {tryDemo && <a href={tryDemo} className="product-link-btn">Try Demo →</a>}
            {learnMore && <a href={learnMore} className="product-link-btn">Learn More →</a>}
          </div>
          {(googlePlay || appStore) && (
            <div className="app-badges">
              {googlePlay && <a href={googlePlay} className="badge-link">Google Play</a>}
              {appStore && <a href={appStore} className="badge-link">App Store</a>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LeftSection