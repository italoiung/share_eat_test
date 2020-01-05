const add = (state, { payload }) => ({
    ...state,
    places: state.places.map(place => (place.name === payload.place.name ? payload.place : place)),
})

const createReducer = handlers => (state, action) => {
    if (!handlers.hasOwnProperty(action.type)) {
        return state;
    }

    return handlers[action.type](state, action);
}

export default createReducer({
    'ADD_MEAL': add
})