import { MouseEvent } from 'react';

import classes from './Modal.module.scss';

import { ReactComponent as Close } from '../../../assets/icons/close.svg';

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal = ({ children, isOpen, setIsOpen }: IProps) => {
  if (!isOpen) return <></>;

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  const handleModalOverlayClick = () => {
    setIsOpen(false);
  };

  const handleModalBoxClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={classes.mainContainer} onClick={handleModalOverlayClick} data-testid='ModalOverlay'>
      <div className={classes.modalBox} onClick={handleModalBoxClick}>
        <Close className={classes.closeButton} onClick={handleCloseButtonClick} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
