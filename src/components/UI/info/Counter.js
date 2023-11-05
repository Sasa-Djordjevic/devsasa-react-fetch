import mystyles from './Counter.module.css';

const Counter = (props) => {
    return (
        <p className={mystyles.counter}>
            <span>{props.total}/{props.curentNumber}</span>
        </p>
    );
};

export default Counter;