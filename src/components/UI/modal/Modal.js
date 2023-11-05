import React, {Fragment} from "react";
import ReactDom from "react-dom";

import ModalContent from './ModalContent';

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<ModalContent 
                title={props.title}
                releaseDate={props.releaseDate}
                openingText={props.openingText}
                onClickCloseHandler={props.onClickCloseHandler}
            />, document.getElementById("modal-root"))}
        </Fragment>
    );
};

export default Modal;