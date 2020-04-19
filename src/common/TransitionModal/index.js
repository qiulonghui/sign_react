import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {ModalMask, ModalWrapper} from './style'
import './style.css'

function TransitionModal(props) {
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
        <ModalMask />
      </CSSTransition>

      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="modal"
        unmountOnExit
        // onEnter={() => {}}
        onExited={props.transitionExited}
      >
        <ModalWrapper onClick={props.handleClose}>
          {props.children}
        </ModalWrapper>
      </CSSTransition>
    </div>
  )
}

export default TransitionModal