import React from "react"

const CardFavorite = (data) => {
    const {data: favorites} = data
    
    switch (favorites.name) {
        case "Bundesliga":
            favorites.emblemUrl = "https://bit.ly/3gu7J5n"
            break;
        case "FIFA World Cup":
            favorites.emblemUrl = "https://bit.ly/2DhPzpr"
            break;    
        case "Serie A":
            favorites.emblemUrl = "https://bit.ly/2DzLZ9S"
            break;
        case "Ligue 1":
            favorites.emblemUrl = "https://bit.ly/3gHHhpj"
            break;
        case "Premier League":
            favorites.emblemUrl = "https://bit.ly/3gucQTp"
            break;
        case "Primera Division":
            favorites.emblemUrl = "https://bit.ly/2DA7gA6"
            break;
        default:
            break;
    }
    return (
        <div className="card container">
            <div className="card-body">
                <h5><img src={favorites.emblemUrl} alt="" ></img></h5>
                <label>Competition Name:</label>
                <h5 className="card-title">{favorites.name}</h5><br></br>
                <label>Class Competition:</label>
                <h6 className="card-subtitle mb-2">{favorites.plan}</h6><br></br>
                <p className="card-text">Code: {favorites.code}</p>
            </div>
        </div>
    )
}

export default CardFavorite;