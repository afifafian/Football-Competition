import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getCompetitionDetail} from '../store/actions/competitionAction';
import '../Card.css'

const Card = ({compId}) => {
    const dispatch = useDispatch();
    const {detail} = useSelector((state) => state.competitionReducer);

    useEffect(() => {
        dispatch(getCompetitionDetail(compId))
    },[compId, dispatch])

    switch (detail.name) {
        case "Bundesliga":
            detail.emblemUrl = "https://bit.ly/3gu7J5n"
            break;
        case "FIFA World Cup":
            detail.emblemUrl = "https://bit.ly/2DhPzpr"
            break;    
        case "Serie A":
            detail.emblemUrl = "https://bit.ly/2DzLZ9S"
            break;
        case "Ligue 1":
            detail.emblemUrl = "https://bit.ly/3gHHhpj"
            break;
        case "Premier League":
            detail.emblemUrl = "https://bit.ly/3gucQTp"
            break;
        case "Primera Division":
            detail.emblemUrl = "https://bit.ly/2DA7gA6"
            break;
        default:
            break;
    }

    return (
        <div className="card container">
            <div className="card-body">
                <h5><img src={detail.emblemUrl} alt="" ></img></h5>
                <label>Competition Name:</label>
                <h5 className="card-title">{detail.name}</h5><br></br>
                <label>Class Competition:</label>
                <h6 className="card-subtitle mb-2">{detail.plan}</h6><br></br>
                <p className="card-text">Code: {detail.code}</p>
            </div>
        </div>
    )
}

export default Card;