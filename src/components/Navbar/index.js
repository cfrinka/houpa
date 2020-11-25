import React from 'react'
import './index.css'




export default function Navbar() {
  return (
    <nav className="navbarItems">
      <div className="menu">
        <img className="icons" src="/images/menu.svg" alt=" " />
        <p>Menu</p>
      </div>
      <div className="actions">
        <div className="search">
          <img className="icons" src="/images/search.svg" alt=" " />
          <div className="input-border">
            <input type='text' placeholder="Busca" />
          </div>
        </div>
        <div className="favorites">
          <img className="icons" src="/images/favorite.svg" alt=" " />
          <p>Meus Favoritos</p>
        </div>
        <div className="cart">
          <img className="icons" src="/images/cart.svg" alt=" " />
          <p>Meu Carrinho | R$ 0,00</p>
        </div>
      </div>
    </nav>
  )
}

