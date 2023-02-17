function MakeOrder({ setCoffeeOrders, coffeeOrders }) {
    const makeOrder = () => {
        const orders = coffeeOrders
        orders.pop()
        setCoffeeOrders([...orders]);
    }
    return(
        <>
            {coffeeOrders.length > 0 &&
                <button onClick={() => makeOrder()}>Make Order</button>
            }
        </>
    )
}

export default MakeOrder