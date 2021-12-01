import React from 'react';
import perfil from '../img/perfil.jpg'
const Content = () => {
    return (
        <div className="Sidebar">
        <div className="Sidebar-Profile">
          <img src={perfil} alt="" />
          <div className='Name'>
            <span>t1lol</span>
          </div>
          <button>Cambiar</button>
        </div>
        <div className="Sidebar-Content">
            <p              >No tienes sugerencias nuevas</p>
        </div>
      </div>
    )
}

export default Content
