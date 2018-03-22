const viewForm = (state = { status: true }, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return {...state,
        status: action.status
      }
    default:
      return state;
  }
}

export default viewForm;