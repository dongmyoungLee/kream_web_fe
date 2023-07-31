import ReactDom from 'react-dom';

const PopupDom = ({ children }) => {
  const el = document.querySelector('#popupDom');
  return ReactDom.createPortal(children, el);
};

export default PopupDom;