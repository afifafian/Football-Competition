import React from "react";
import {useHistory} from "react-router-dom"; 

const TableData = ({props}) => {
    const {id, area: {name, countryCode}, name: compName } = props
    const history = useHistory();
    
    const getDetails = (compId) => {
        history.push({
            pathname: `/competitions/${id}`,
            state: {
                id: compId
            }
        })
    };

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{countryCode}</td>
            <td>{compName}</td>
            <td> <button className="btn btn-success" onClick={() => getDetails(id)}>See Details</button> </td>
        </tr>
    )   
}

export default TableData;