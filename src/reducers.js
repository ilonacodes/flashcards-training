const initState = {
  translationHidden: true
}

export const translateReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'TRANSLATE_EXPRESSION':
      return Object.assign({}, state, {
        translationHidden: false,
      })

    case 'TRANSLATE_BACK':
      return Object.assign({}, state, {
        translationHidden: true,
      })

      default:
        return state;
  }
}
