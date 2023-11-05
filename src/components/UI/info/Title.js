import mystyles from './Title.module.css';

const Title = (props) => {
    return (
        <div className={mystyles.section}>
            <h1 className={mystyles.h1}>{props.title}</h1>
        </div>);
}

export default Title;