import './warning.css';

export default (props: {title: string, text: string}) => {
    return (<div className="warning--wrap">
        <p className="warning--header">{props.title}</p>
        <p className="warning--text">{props.text}</p>
    </div>)
}