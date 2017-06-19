import React from 'react';
import { connect } from 'react-redux';

import { translateExpression, translateBack } from '../actions.js';
import { flashcardContent } from '../EnEspContent.js';
import '../index.css';

export const flip = (e) => e.preventDefault()

export const FlashcardPresentation = ({flashcardModel, flip, translationHidden, translateBack}) => {

  const flashcardClassName = translationHidden ? "flashcard" : "flashcard flipped"

  return <div className="flashcard-container">
    <div className={flashcardClassName} onClick={e => flip(translationHidden)}>
      <div className="front"><span>{flashcardModel.expression}</span></div>
      <div className="back"><span>{flashcardModel.translation}</span></div>
    </div>
  </div>
}

function mapStateToProps(state) {
  return {
    flashcardModel: flashcardContent[0],
    translationHidden: state.translationHidden,
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
    }
  }
}

export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)
