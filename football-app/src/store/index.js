import {createStore} from "redux";

const initialState = {
    favorites: [],
};

function favoriteReducer(state = initialState, action) {
    let angka = []
    
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            state.favorites.forEach(e => {
                angka.push(e.id)
            });
            if (angka.includes(action.payload.data.id)) {
                return state
            } else {
                return {...state,
                    favorites: state.favorites.concat(action.payload.data)
                };
            }
        default:
        return state
    }
}

const store = createStore(favoriteReducer);

export default store;