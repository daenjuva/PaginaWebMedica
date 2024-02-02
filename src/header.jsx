import { useState } from 'react'

function Items(props){
    return(
    <>
        <li className="nav-item">
            <a className="nav-link" href={props.url}>{props.item}</a>
        </li>
    </>
    )
}

function Header() {

  return (
    <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src="src/assets/logo.gif" />
                        <div id="navbar">
                            <ul className="nav justify-content-center">
                                <Items url="#" item="Inicio"/>
                                <Items url="#" item="Agenta tu Cita"/>
                                <Items url="#" item="Contáctanos"/>  
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header