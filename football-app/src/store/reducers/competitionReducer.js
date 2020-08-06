const initialState = {
    competitions: [],
    detail: {},
};

function competitionReducer(state = initialState, action) {
 
    switch (action.type) {
        case "SET_COMPETITIONS":
            const availables = [2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021];
            const result = [];
            action.payload.competitions.forEach(e => {
                if (availables.includes(e.id)) {
                    result.push(e)
                }
            });
            return {...state, competitions: result };
        case "SET_COMPETITION":
            return {...state, detail: action.payload.detail};
            
        default:
        return state
    }
}

export default competitionReducer;