import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

function ModalTransition(props) {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="modal"
      unmountOnExit
      // onEnter={() => {}}
      onExited={props.transitionExited}
    >
      {props.children}
    </CSSTransition>
  )
}

export default ModalTransition