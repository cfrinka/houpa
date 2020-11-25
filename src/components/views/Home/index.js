import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Navbar from '../../Navbar'
import Header from '../../Header'
import Card from '../../Card'
import firebase from '../../../config/firebase'


export default function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
  ]

  const [product, setProduct] = useState([])
  let productList = [];

  useEffect(() => {
    firebase.firestore().collection('products').get().then(async (res) => {
      await res.docs.forEach(doc => {
        productList.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setProduct(productList)
    })
  }, [])
  return (

    <>
      <Navbar />
      <Header />
      <Carousel breakPoints={breakPoints}>
        {product.map(item => <Card href={item.id} key={item.id} image={item.image} name={item.name} desc={item.description} price={item.price} />)}
      </Carousel>
      <Header />
      <Carousel breakPoints={breakPoints}>
        {product.map(item => <Card href={item.id} key={item.id} image={item.image} name={item.name} desc={item.description} price={item.price} />)}

      </Carousel>
    </>
  )
}
