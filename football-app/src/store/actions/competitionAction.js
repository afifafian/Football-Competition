export const getCompetitions = () => {
    return (dispatch, getState) => {
        fetch("https://api.football-data.org/v2/competitions", {
            headers: { 'X-Auth-Token': '6a7c673ff8744f4a89bef61d69edc7f3' },
            dataType: 'json',
            type: 'GET',
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch ({
                type: "SET_COMPETITIONS",
                payload: {
                    competitions: data.competitions
                }
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
};

export const getCompetitionDetail = (compId) => {
    return (dispatch, getState) => {
        fetch(`https://api.football-data.org/v2/competitions/${compId}`, {
            headers: { 'X-Auth-Token': '6a7c673ff8744f4a89bef61d69edc7f3' },
            dataType: 'json',
            type: 'GET',
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch ({
                type: "SET_COMPETITION",
                payload: {
                    detail: data
                }
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
};