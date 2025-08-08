function Child(props) {
    return (
        <div>
            <h2>Component Con</h2>
            <p>Props user name: {props.userName}</p>
            <p>Props count: {props.count}</p>
        </div>
    );
}
export default Child;