function HelloWorld(props) {
    const { myName } = props;
    return(
        <h1>Hello World {myName}</h1>
    )
}

export { HelloWorld };