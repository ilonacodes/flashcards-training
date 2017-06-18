import React from 'react';
import { connect } from 'react-redux';

import { translateExpression } from '../actions.js';
import { flashcardContent } from '../EnEspContent.js';
import '../index.css';

export const FlashcardPresentation = ({flashcardModel, flip, translationHidden}) => {
  return <div className="flashcard" onClick={e => flip()}>
    <p>Hello {translationHidden ? flashcardModel.expression : flashcardModel.translation}</p>
  </div>
}

function mapStateToProps(state) {
  return {
    flashcardModel: flashcardContent[0],
    translationHidden: state.translationHidden,
  }
}

function mapDispatchToProps(dispatch) {
  return { flip: () => dispatch(translateExpression()) }
}

export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)
