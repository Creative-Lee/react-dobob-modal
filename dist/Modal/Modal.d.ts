import { PropsWithChildren } from 'react';
type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};
declare const Modal: ({ children, isOpen, closeModal }: PropsWithChildren<ModalProps>) => JSX.Element;
export default Modal;
