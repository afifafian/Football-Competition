import React from "react";
import {useHistory} from "react-router-dom"; 
import {useDispatch} from "react-redux";

const TableData = ({props}) => {
    const {id, area: {name, countryCode}, name: compName } = props
    const history = useHistory();
    const dispatch = useDispatch();
    
    const getDetails = (compId) => {
        history.push({
            pathname: `/competitions/${id}`,
            state: {
                id: compId
            }
        })
    };
    const addToFavorite = () => {
        dispatch({
            type: "ADD_TO_FAVORITE",
            payload: {
                data: props
            }
        })
        history.push({
            pathname: '/favorites',
        })
    }
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{countryCode}</td>
            <td>{compName}</td>
            <td> 
                <button className="btn btn-success" onClick={() => getDetails(id)}>See Details</button> &nbsp;
                <button className="btn btn-primary" onClick={() => addToFavorite()}>Add to Favorites</button>
            </td>
        </tr>
    )   
}

export default TableData;