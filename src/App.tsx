import { useState } from 'react'
import Modal from './components/Modal'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <button onClick={openModal}>열기</button>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div>content 1</div>
          <div>content 2</div>
          <div>content 3</div>
        </Modal>
      </div>
    </>
  )
}

export default App
