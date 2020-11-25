import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import firebase from "../../config/firebase"

export default function Card({ key, image, name, desc, price, href }) {

  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    firebase.storage().refFromURL(`gs://houpa-73822.appspot.com/images/${image}`).getDownloadURL().then(url => setImageUrl(url))

  }, [])




  return (

    <Link to={`/info/${href}`}>
      <div className="card">
        <img src={imageUrl} alt=" " />
        <div className="favorite-container">
          <img src="/images/favorite-pink.svg" alt=" " />
        </div>

        <div className="product-info">
          <p>{name}</p>
          <p className="description">{desc}</p>
          <h4>{price}</h4>
          <div className="buy-button" >
            Comprar
        </div>
        </div>
      </div>
    </Link>

  )
}
