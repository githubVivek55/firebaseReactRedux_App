const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    default:
      return state;
  }
};

export default projectReducer;
