import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
   <>
   <div className="back">
   <div className="container">

  <h2 className='footer__title'>Форма заказа билета в будущее</h2>
   <div className="form">
    <input type="text" name='name' placeholder='Имя' required/>
    <input type="emal" name='emal' placeholder='E-mail' required/>
    <input type="tel" name='phone' placeholder='Телефон' required/>
    <input type="text" name='travel' placeholder='Куда я полечу в ближайшее время?' required/>
<button className='btn-1'>Двигаться к мечте</button>
   </div>
   </div>
   </div>

   <div className="box">
    <p>© Все мои мечты защищены моим трудолюбием</p>
   </div>
   </>
  )
}

export default Footer