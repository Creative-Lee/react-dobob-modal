### 간단한 모달 컴포넌트입니다.

## 설치 방법

`npm i react-dobob-modal`

## 사용 방법

- Modal 컴포넌트 불러오기

`import { Modal } from 'react-dobob-modal'`

## Props

```ts
type ModalProps = {
  isOpen: boolean
  closeModal: () => void
}
```

### isOpen

모달 열기 / 닫기에 사용될 상태

### closeModal

모달을 닫는 함수(외부 상태를 변경시키는 함수)

### children

모달 내부에 표시할 컨텐츠

## 사용 예시

```ts
import { Modal } from 'react-dobob-modal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} closeModal={modalClose}>
        //contents
      </Modal>
    </div>
  )
}

export default App
```
