import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  cursor: pointer;
`

export const ModalContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 36px;
  border-radius: 8px 8px 0px 0px;
  background-color: #fff;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
`
