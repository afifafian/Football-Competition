import React from "react";
import {useHistory} from "react-router-dom"; 
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from '../store/actions/favoriteAction';
import swal from "sweetalert";

const TableData = ({props}) => {
    const {id, area: {name, countryCode}, name: compName } = props
    const {favorites} = useSelector(state => state.favoriteReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const getDetails = () => {
        history.push({
            pathname: `/competitions/${id}`,
        })
    };
    const addToFavorites = () => {
        const check = favorites.find(favorite => favorite.id === props.id)
        if (check) {
            swal("Warning!", "Already added to Favorite!", "warning");
        } else {
            dispatch(addToFavorite(props))
            history.push({
                pathname: '/favorites',
            })
            swal("Success!", "Successfully Added to Favorite!", "success");
        }   
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