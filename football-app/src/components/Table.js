import React, {useState, useEffect} from "react";
import TableData from '../components/TableData';
import {useDispatch, useSelector} from "react-redux";
import {getCompetitions} from '../store/actions/competitionAction';

const Table = () => {
    const dispatch = useDispatch();
    const {competitions, loading} = useSelector((state) => state.competitionReducer);
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onSearch = () => {
        let result = competitions.filter((item) => String(item.id).includes(search))
        setSearchResult(result)
    }

    useEffect(() => {
        dispatch(getCompetitions());   
    },[dispatch])

    if (loading) {
        return (
            <div className="container">
                <h2>Please Wait....</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="mb-3">
                <input onChange={(e) => handleChange(e)} type="search" value={search} placeholder="input competition id here" />&nbsp;
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