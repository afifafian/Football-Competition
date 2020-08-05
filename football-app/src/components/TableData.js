import React, {useState} from "react";

const TableData = ({props}) => {
    const {id, area: {name, countryCode}, name: compName } = props
    const [detail, setDetail] = useState({});
    
    const getDetails = (compId) => {
        fetch(`http://api.football-data.org/v2/competitions/${compId}`, {
            headers: { 'X-Auth-Token': '6a7c673ff8744f4a89bef61d69edc7f3' },
            dataType: 'json',
            type: 'GET',
        })
        .then(resp => resp.json())
        .then(data => setDetail(data))
        .catch(err => {
            console.log(err);
            alert('Sorry You didnt have access to this competition')
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