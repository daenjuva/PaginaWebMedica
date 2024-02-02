function BloqueContent(props){
    return (
        <>
            <div className="col-md-3 col-sm-4 col-xs-6">
                <h4 className="footer-title">{props.title}</h4>
                <p className="footer-content">
                    {props.description}
                </p>
            </div>
        </>
    )
}

function BloqueSocial(props){
    return (
        <>
            <div className="col-md-3 col-sm-4 col-xs-6">
                <h4 className="footer-title">{props.title}</h4>
                <ul className="nav-social">
                    <li><a target="_blank" href={props.facebook}>
                        <i className="bi bi-facebook"></i>
                    </a></li>
                    <li><a target="_blank" href={props.instagram}>
                        <i className="bi bi-instagram"></i>
                    </a></li>
                    <li><a target="_blank" href={props.whatsapp}>
                        <i className="bi bi-whatsapp"></i>
                    </a></li>
                </ul>
            </div>
        </>
    )
}

function Footer() {

    return (
      <>
            <footer>
                <div className="container">
                    <div className="row">
                        <BloqueContent title="Ragnarok" description="Simpática lista de un gran fan de los cómics y nadie mejor así para organizar una difícil clasificación donde da la alternativa a la parte emocional pero si pone en primer lugar los 4 fantásticos ya me tiene ganado." />
                        <BloqueContent title="FriendlyNeighbor" description="Genial para cualquier aficionado que quiera adentrarse más en el mundillo. Me ha gustado mucho que se diferencie entre la opinión personal - subjetiva- y la general." />
                        <BloqueContent title="Punisher007" description="Aunque esperaba encontrarme una colección de cómics me he encontrado con los comentarios, anécdotas de los mejores cómics. La idea del libro está muy bien si antes te has leído los comics
" />
                        <BloqueSocial facebook="https://www.facebook.com/" instagram="https://www.instagram.com/dra.lizset_ballena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" whatsapp="https://web.whatsapp.com/" />
                    </div>
                </div>
            </footer>
      </>
    )
  }
  
  export default Footer