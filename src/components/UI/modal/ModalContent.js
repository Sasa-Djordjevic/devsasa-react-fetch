import mystyles from './ModalContent.module.css';

const ModalContent = (props) => {
    return (
        <div className={mystyles.overlay}>
            <div className={mystyles.section}>
                <div className={mystyles.modal}>
                    <h2>{props.title}</h2>
                    <h3>{props.releaseDate}</h3>
                    <p>{props.openingText}</p>
                    <div className={mystyles.holder}>
                        <button className={mystyles['close-btn']} onClick={props.onClickCloseHandler}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalContent;