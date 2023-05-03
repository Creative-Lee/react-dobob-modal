import { PropsWithChildren } from 'react'
import { CloseButton, ModalContent, ModalOverlay } from './styled'

type ModalProps = {
  isOpen: boolean
  closeModal: () => void
}

const Modal = ({ children, isOpen, closeModal }: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen ? (
        <>
          <ModalOverlay onClick={closeModal} />
          <ModalContent>
            {children}
            <CloseButton onClick={closeModal}>✖</CloseButton>
          </ModalContent>
        </>
      ) : null}
    </>
  )
}

export default Modal
