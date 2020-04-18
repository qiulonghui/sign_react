import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

function ModalTransition(props) {
  return (
    <div>
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="mask"
        unmountOnExit
        // onEnter={() => {}}
        onExited={props.transitionExited}
      >
        {props.renderMask()}
      </CSSTransition>

      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="modal"
        unmountOnExit
        // onEnter={() => {}}
        onExited={props.transitionExited}
      >
        {props.renderModal()}
      </CSSTransition>
    </div>
  )
}

export default ModalTransition