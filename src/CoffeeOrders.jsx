function CoffeeOrders(props) {
    const { coffeeOrders } = props
    console.log(coffeeOrders)
    return (
        <>
            {coffeeOrders.length === 0 && <p>No Orders</p>}
            {coffeeOrders?.map((order) => {
                return (
                    <div key={`${order.name}-${order.order}`}>
                        {order.name} - {order.order}
                    </div>
                )
            })}
        </>
    )
}

export default CoffeeOrders