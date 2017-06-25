import React from 'react';
import { connect } from 'react-redux';

import { translateExpression, translateBack, goToNext, invertTranslation } from '../actions.js';
import { flashcardContent } from '../EnEspContent.js';
import '../index.css';

export const FlashcardPresentation = ({flashcardModel, flip, translationHidden, translateBack, goToNext, invertTranslation}) => {

  const flashcardClassName = translationHidden ? "flashcard" : "flashcard flipped"

  return <div>
    <button className="invert-translation" onClick={invertTranslation}>
    {translationHidden ? "Spanish -> English" : "English -> Spanish"}
    </button>
    <div className="flashcard-container">
      <div className={flashcardClassName} onClick={e => flip(translationHidden)}>
        <div className="front">
          <span>
            <span className="current-language">
              {flashcardModel.language}
            </span>
            {flashcardModel.expression}
          </span>
        </div>
        <div className="back">
          <span>
            <span className="current-language">
              {flashcardModel.languageTranslation}
            </span>
            {flashcardModel.translation}
          </span>
        </div>
      </div>
    </div>
    <button className="next" onClick={goToNext}>Next Card</button>
  </div>
}

function mapStateToProps(state) {
  return {
    flashcardModel: flashcardContent[state.currentFlashcard],
    translationHidden: state.translate.translationHidden,
  }
}

function toggleTranslation(dispatch, translationHidden) {
  if (translationHidden) {
    dispatch(translateExpression())
  } else {
    dispatch(translateBack())
  }
}

function mapDispatchToProps(dispatch) {
  return {
    flip: (translationHidden) => {
      toggleTranslation(dispatch, translationHidden)
    },
    goToNext: () => {
      dispatch(goToNext())
    },
    invertTranslation: () => {
      dispatch(invertTranslation())
    }
  }
}

export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)
