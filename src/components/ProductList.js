import React from 'react'

export default function ProductList({records}) {
  return (
    <div className="product-list">
           {records.map((product, index) => (
            <div className="product" key={index}>
              <img className='img' src={product.image} alt={product.title} style={{width: "100px", height: "100px"}} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <div className="rating">{product.rating} stars</div>
            </div>
          ))}
        </div>
  )
}

