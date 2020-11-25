import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Track from '../../Track';
import './index.css';
import firebase from '../../../config/firebase'


export default function ProductInfo(props) {

  const [productData, setProductData] = useState({})
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    firebase.firestore().collection('products').doc(props.location.pathname.slice(6)).get().then(result => {
      const data = result.data()
      setProductData(data)
      firebase.storage().refFromURL(`gs://houpa-73822.appspot.com/images/${data.image}`).getDownloadURL().then(url => setImageUrl(url))
        .catch(err => console.error(err))
    }).catch(err => {
      console.log(err)
    })

  }, [])

  const paymentOption = productData.price ? productData.price.slice(2, -3) / 5 : null


  return (
    <>
      <Navbar />
      <Track />
      {console.log(productData)}

      {productData.price ?
        <div className="row">
          <div className="description-with-picture">
            <img src={imageUrl} alt=" " />
            <p>{productData.description}</p>
          </div>
          <div className="details-container">
            <div className="top-line">
              <p>Vestidos</p>
            </div>
            <div className="title">{productData.name}</div>
            <div className="description">
              <p>Produzido e Entregue por Madame Ristow</p>
              <p>Vendido por: {productData.store}</p>
            </div>
            <div className="payment-options">
              <p className="price">{productData.price.replace("R$,", "").toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
              <p className="options">ou até 5X de {paymentOption.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} | Atacado mínimo: 6 peças</p>
            </div>
            <p className="size-title">Tamanho:</p>
            <div className="size">
              <div className="size-options">P</div>
              <div className="size-options">M</div>
              <div className="size-options">G</div>
              <div className="size-options">GG</div>
            </div>
            <div className="quantity">
              <p>Quantidade:</p>
              <div className="number-warning">
                <input className="input" type="number" min="1" placeholder="1"></input>
                <p>Avise-me quando chegar</p>
              </div>
            </div>
            <div className="buy-button">
              Comprar
      </div>
            <div className="add-to-cart-button">
              Adicionar ao Carrinho
      </div>
            <div className="delivery-cost">
              <p className="title">Frete</p>
              <p className="instructions">Calcule o frete estimado para sua região</p>
              <div className="zip-code-search">
                <input type="number" placeholder="CEP" />
                <div className="calculate-button">
                  Calcular
          </div>
              </div>
              <p className="info-text">Não sei meu CEP</p>
            </div>
            <div className="social-media">
              <p> Compartilhar</p>
              <div className="icons">
                <img src="/images/wpp.svg" alt=" " />
                <img src="/images/pinterest.svg" alt=" " />
                <img src="/images/ig.svg" alt=" " />
                <img src="/images/fb.svg" alt=" " />
                <img src="/images/linkedin.svg" alt=" " />
              </div>
            </div>
          </div>
        </div>


        : null}
    </>
  )
}
