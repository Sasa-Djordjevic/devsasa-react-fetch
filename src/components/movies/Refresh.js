import mystyles from './Refresh.module.css';

const Refresh = (props) => {
    return (
        <div className={mystyles.section}>
            <h2>No more movies.</h2>
            <button className={mystyles.button} onClick={props.refreshHandler}>Refresh</button>
        </div>
    );
}

export default Refresh;