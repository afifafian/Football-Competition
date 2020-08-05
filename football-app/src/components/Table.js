import React, {useState} from "react";
import TableData from '../components/TableData';
import useFetch from '../hooks/useFetch';

const Table = () => {
    const competitions = useFetch ( "http://api.football-data.org/v2/competitions" );
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onSearch = () => {
        let result = competitions.filter((item) => item.area.name.toLowerCase().includes(search.toLowerCase()))
        setSearchResult(result)
    }

    return (
        <div className="container">
            <div className="mb-3">
                <input onChange={(e) => handleChange(e)} type="search" value={search} />&nbsp;
                <button onClick={()=> onSearch()} className="btn btn-info" >search</button>
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Competition Id</th>
                        <th scope="col">Competition Area</th>
                        <th scope="col">Code</th>
                        <th scope="col">Competition Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {(searchResult.length > 0 ? searchResult : competitions).map((competition) => (
                        <TableData key={competition.id} props={competition} />
                     ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;