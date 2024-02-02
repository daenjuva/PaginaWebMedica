import cardImage1 from './assets/card1.jpg'
import cardImage2 from './assets/card2.jpg'
import cardImage3 from './assets/card3.jpg'
import cardImage4 from './assets/card5.jpg'

function CardItem(props) {
    return (
        <>
            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="card-image">
                    <img src={props.image} />
                    <a href="#">
                        <i className="bi bi-plus"></i>
                    </a>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-description">{props.description}</p>
                <button className="btn btn-sm btn-primary">
                    Leer Más
                </button>
            </div>
        </>
    )
}

function Cards() {

    return (
        <>
            <section id="cards">
                <div className="container">
                    <div className="row">

                        <CardItem image={cardImage1} title="DRA LIZSET BALLENA" description="Puede que X-Men: Red no sea la serie principal de la franquicia mutante y que los personajes de Arakko no sean los más populares entre los lectores, pero lo que ha hecho el popular guionista en sus páginas (espectacularmente dibujadas por el artista Stefano Caselli) tiene una contundencia y una solidez incuestionables." />
                        <CardItem image={cardImage2} title="AGENDA TU CITA" description="Este año hemos cerrado un ciclo en las profundas calles de la Cocina del Infierno. Chip Zdarsky se ha convertido en esa buena carta dentro de una mano inmejorable de póker junto con Miller, Nocenti, Bendis y Brubaker." />
                        <CardItem image={cardImage3} title="CAMPAÑAS MÉDICAS" description="Es difícil continuar etapas legendarias. Lo es más aún si continúas la etapa más legendaria de un personaje. Lo que consiguieron Donny Cates y Ryan Stegman en el volumen anterior permitió construir unos cimientos sólidos que elevaron a Venom como personaje completo." />
                        <CardItem image={cardImage4} title="MEDICINA ALTERNATIVA" description="LPor méritos propios se ha encaramado a los puestos más altos el relanzamiento de Amazing Spider-Man. El guionista Zeb Wells y el dibujante John Romita Jr. han insuflado nueva vida a una serie que comenzaba a mostrar signos de agotamiento." />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards