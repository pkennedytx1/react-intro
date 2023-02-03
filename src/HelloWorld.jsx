function HelloWorld(garbage) {
    const { myName } = garbage;
    return(
        <h1>Hello World {myName}</h1>
    )
}

export { HelloWorld };