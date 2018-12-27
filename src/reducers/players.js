// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function players(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_SCOUTS' :
      // return the update state
      console.log("Incrementing scouts!!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], scouts: state[i].scouts + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default players;
