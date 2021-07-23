import "./header.css"
import Platzivideo from '../../assets/img/logo-platzi-video-BW2.png'
import usericon from '../../assets/img/user-icon.png'

export default function Header (){
    return (
        <header className="header">
            <img className="header__img" src={Platzivideo} alt="Platzi Video" />
            <div className="header__menu">
              <div className="header__menu--profile">
             <img src={usericon} alt="" />
            <p>Perfil</p>
             </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

    )

}