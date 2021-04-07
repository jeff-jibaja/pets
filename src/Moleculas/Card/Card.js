import './card.scss'



export const Card = ({id,title,url,width,height,life,name,origin,temperament}) =>{
    return (
        <div key={id} className="card">
            <div className="card__header">
                <p>{title}</p>
            </div>
            <div className="card__body">
                <div className="card__body-description">
                    <ul className="list__caracterist">
                        <li className="list__item">Vida:<span >{life}</span></li>
                        <li className="list__item">Nombre:<span >{name}</span></li>
                        <li className="list__item">Origen:<span >{origin}</span></li>
                        <li className="list__item">Temperamento:<span >{temperament}</span></li>
                    </ul>
                </div>
                <img className="img-card" src={url} alt={title} />
            </div>
        </div>
    )
}