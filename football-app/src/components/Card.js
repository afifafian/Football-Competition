import React from "react"
import useDetail from '../hooks/useDetail';
import '../Card.css'

const Card = (id) => {
    const detail = useDetail(`http://api.football-data.org/v2/competitions/${id.data}`)
    
    if (detail.name === "Bundesliga") {
        detail.emblemUrl = "https://bit.ly/3gu7J5n"
    } else if (detail.name === "FIFA World Cup") {
        detail.emblemUrl = "https://bit.ly/2PrGXi8"
    } else if (detail.name === "Serie A") {
        detail.emblemUrl = "https://bit.ly/2DzLZ9S"
    } else if (detail.name === "Ligue 1") {
        detail.emblemUrl = "https://bit.ly/3gHHhpj"
    } else if (detail.name === "Premier League") {
        detail.emblemUrl = "https://bit.ly/3gucQTp"
    } else if (detail.name === "Primera Division") {
        detail.emblemUrl = "https://bit.ly/2DA7gA6"
    }
    return (
        <div className="card container">
            <div className="card-body">
                <h5><img src={detail.emblemUrl} alt="" ></img></h5>
                <h5 className="card-title">Competition Name: {detail.name}</h5><br></br>
                <h6 className="card-subtitle mb-2">Class: {detail.plan}</h6><br></br>
                <p className="card-text">Code: {detail.code}</p>
                {/* <p href="#" className="card-link">Card link</p> */}
            </div>
        </div>
    )
}

export default Card;