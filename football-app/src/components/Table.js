import React, { Component } from "react";
import TableData from '../components/TableData';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            footballs: [],
            // competition: {}
        }
    }
    componentDidMount() {
        fetch( "http://api.football-data.org/v2/competitions" ,{
            headers: { 'X-Auth-Token': '6a7c673ff8744f4a89bef61d69edc7f3' },
            dataType: 'json',
            type: 'GET',
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({ footballs: data.competitions.slice(0, 10) });
        });
    }
    render() {
        return (
        <div className="container">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Competition Id</th>
                        <th scope="col">Competition Area</th>
                        <th scope="col">Code</th>
                        <th scope="col">Competition Name</th>
                    </tr>
                </thead>
                <tbody>
                     {this.state.footballs.map((football, id) => {
                        return <TableData key={id} data={football} />;
                    })}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Table;