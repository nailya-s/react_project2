import React from 'react';
import s from './Modal.module.css';


const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [s.modal];

    if (visible) {
        rootClasses.push(s.active);
    } 
    
    return (
        <div className={rootClasses.join(' ')}>
            <div className={s.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal
