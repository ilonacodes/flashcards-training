import {flashcardContent} from "./EnEspContent";

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

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomFlashcard = () => {
    return getRandomInt(0, flashcardContent.length - 1)
}

export const currentFlashcardReducer = (state = getRandomFlashcard(), action) => {
    switch (action.type) {
        case 'NEXT_FLASHCARD':
            return getRandomFlashcard()

        default:
            return state;
    }
}
