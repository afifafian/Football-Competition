import React from "react"

const CardFavorite = (data) => {
    const {data: favorites} = data
    
    if (favorites.name === "Bundesliga") {
        favorites.emblemUrl = "https://bit.ly/3gu7J5n"
    } else if (favorites.name === "FIFA World Cup") {
        favorites.emblemUrl = "https://bit.ly/2PrGXi8"
    } else if (favorites.name === "Serie A") {
        favorites.emblemUrl = "https://bit.ly/2DzLZ9S"
    } else if (favorites.name === "Ligue 1") {
        favorites.emblemUrl = "https://bit.ly/3gHHhpj"
    } else if (favorites.name === "Premier League") {
        favorites.emblemUrl = "https://bit.ly/3gucQTp"
    } else if (favorites.name === "Primera Division") {
        favorites.emblemUrl = "https://bit.ly/2DA7gA6"
    }
    return (
        // <div className="container">
           
                <div className="card container">
                    <div className="card-body">
                        <h5><img src={favorites.emblemUrl} alt="" ></img></h5>
                        <h5 className="card-title">Competition Name: {favorites.name}</h5><br></br>
                        <h6 className="card-subtitle mb-2">Class: {favorites.plan}</h6><br></br>
                        <p className="card-text">Code: {favorites.code}</p>
                        {/* <p href="#" className="card-link">Card link</p> */}
                    </div>
                </div>
           
        // </div>
    )
}

export default CardFavorite;