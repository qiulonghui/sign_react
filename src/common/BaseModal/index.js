import React from 'react'
import {ModalMask, ModalWrapper} from './style'
import ModalTransition from '../ModalTransition/index'

function renderModalWrapper (props){
  return (
    <ModalWrapper onClick={props.handleClose}>{props.children}</ModalWrapper>
  )
}

function BaseModal (props) {
  return (
    <ModalTransition {...props}
      renderMask={()=><ModalMask />} 
      renderModal={()=>renderModalWrapper(props)}
    />
  )
} 

export default BaseModal