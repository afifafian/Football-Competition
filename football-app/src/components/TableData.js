import React, { Component } from "react";

class TableData extends Component {
    render() {
        const {id, area: {name, countryCode}, name: teamName } = this.props.data
        return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{countryCode}</td>
            <td>{teamName}</td>
        </tr>
        )
    }
}

export default TableData;