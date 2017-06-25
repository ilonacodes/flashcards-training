import { flashcardContent } from './EnEspContent';

const initState = {
  translationHidden: true,
  invertedTranslation: false,
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

    case 'NEXT_FLASHCARD':
      return Object.assign({}, state, {
        translationHidden: !state.invertedTranslation,
      })

    case 'INVERT_TRANSLATION':
      return Object.assign({}, state, {
        invertedTranslation: !state.invertedTranslation,
        translationHidden: state.invertedTranslation,
      })

    default:
      return state;
  }
}

export const currentFlashcardReducer = (state = 0, action) => {
  switch(action.type) {
    case 'NEXT_FLASHCARD':
    if (state < flashcardContent.length - 1) {
      return state + 1;
    }
    return 0;

    default:
      return state;
  }
}
