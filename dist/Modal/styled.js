var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var ModalOverlay = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  cursor: pointer;\n"], ["\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  cursor: pointer;\n"])));
export var ModalContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 20px 36px;\n  border-radius: 8px 8px 0px 0px;\n  background-color: #fff;\n"], ["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 20px 36px;\n  border-radius: 8px 8px 0px 0px;\n  background-color: #fff;\n"])));
export var CloseButton = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 16px;\n  right: 20px;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 16px;\n  right: 20px;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
