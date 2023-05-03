var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CloseButton, ModalContent, ModalOverlay } from './styled';
var Modal = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, closeModal = _a.closeModal;
    return (_jsx(_Fragment, { children: isOpen ? (_jsxs(_Fragment, { children: [_jsx(ModalOverlay, { onClick: closeModal }), _jsxs(ModalContent, { children: [children, _jsx(CloseButton, __assign({ onClick: closeModal }, { children: "\u2716" }))] })] })) : null }));
};
export default Modal;
