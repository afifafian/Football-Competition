const initialState = {
    favorites: [],
};

function favoriteReducer(state = initialState, action) {
 
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            const favIds = state.favorites.map(fav => fav.id );
            if (favIds.includes(action.payload.props.id)) return state
            return { ...state, favorites: state.favorites.concat(action.payload.props) };
            
        default:
        return state
    }
}

export default favoriteReducer;