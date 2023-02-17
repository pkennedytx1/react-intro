import { useState } from "react"

function CoffeeOrderForm(props) {
    const { setCoffeeOrders, coffeeOrders } = props
    const [updatedName, setUpdatedName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [coffeeOrder, setCoffeeOrder] = useState('')
    const [coffeeErrorMessage, setCoffeeErrorMessage] = useState('')
    const processValue = () => {
        const validateStringRegex = /[a-z]/i
        if (!updatedName || !coffeeOrder) {
            if (!updatedName) {
                setErrorMessage('No empty fields allowed')
            }
            if (!coffeeOrder) {
                setCoffeeErrorMessage('No empty fields allowed')
            }
            return false;
        }
        if (!validateStringRegex.test(updatedName)) {
            setErrorMessage('No puntuation or numbers allowed')
            return false
        }
        setCoffeeOrders([
            {
                name: updatedName,
                order: coffeeOrder,
            },
            ...coffeeOrders,
        ])
        setUpdatedName('')
        setCoffeeOrder('')
    }
    return(
        <>  
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <label>Name</label>
                <input
                    value={updatedName}
                    onChange={(e) => {
                        setErrorMessage('')
                        setUpdatedName(e.target.value)
                    }}
                />
                <span className='error-text'>{errorMessage}</span>
                <label>Coffee Order</label>
                <select value={coffeeOrder} onChange={(e) => setCoffeeOrder(e.target.value)}>
                    <option value=''>Please Select a Coffee Order</option>
                    <option value='Cortado'>Cortado</option>
                    <option value='Cappuccino'>Cappuccino</option>
                    <option value='Late'>Late</option>
                    <option value='Drip Coffee'>Drip Coffee</option>
                </select>
                <span className='error-text'>{coffeeErrorMessage}</span>
            </div>
            <button onClick={() => processValue()} >
                Order Coffee
            </button>
        </>
    )
}

export { CoffeeOrderForm }