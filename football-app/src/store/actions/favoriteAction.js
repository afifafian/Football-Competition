export const addToFavorite = props => {
    return {
      type: "ADD_TO_FAVORITE",
      payload: {
        props
      }
    };
};
