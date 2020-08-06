import React from "react";
import {useHistory} from "react-router-dom"; 
import {useDispatch} from "react-redux";
import {addToFavorite} from '../store/actions/favoriteAction';
import swal from "sweetalert";

const TableData = ({props}) => {
    const {id, area: {name, countryCode}, name: compName } = props
    const history = useHistory();
    const dispatch = useDispatch();
    
    const getDetails = () => {
        history.push({
            pathname: `/competitions/${id}`,
        })
    };
    const addToFavorites = () => {
        dispatch(addToFavorite(props))
        history.push({
            pathname: '/favorites',
        })
        swal("Success!", "Successfully Added to Favorite!", "success");
    }
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{countryCode}</td>
            <td>{compName}</td>
            <td> 
                <button className="btn btn-success" onClick={() => getDetails()}>See Details</button> &nbsp;
                <button className="btn btn-primary" onClick={() => addToFavorites()}>Add to Favorites</button>
            </td>
        </tr>
    )   
}

export default TableData;