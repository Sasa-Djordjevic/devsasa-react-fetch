import mystyles from './ButtonsPages.module.css';

const ButtonsPages = (props) => {
    return (
        <div className={mystyles['container-btn']}>
            {props.previous && <button onClick={props.urlLinkPrevious} className={mystyles.button}>Previous</button>}
            {props.next && <button onClick={props.urlLinkNext} className={mystyles.button}>Next</button>}
        </div>
    );
};

export default ButtonsPages;