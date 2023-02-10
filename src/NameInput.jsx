import { useState } from "react"

function NameInput(props) {
    const {setName} = props;
    const [updatedName, setUpdatedName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const processValue = () => {
        const validateStringRegex = /[a-z]/i
        if (!updatedName) {
            setErrorMessage('No empty fields allowed')
            return false;
        }
        if (!validateStringRegex.test(updatedName)) {
            setErrorMessage('No puntuation or numbers allowed')
            return false
        }
        setName(updatedName)
        setUpdatedName('')
    }
    return(
        <>  
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <input
                    value={updatedName}
                    onChange={(e) => {
                        setErrorMessage('')
                        setUpdatedName(e.target.value)
                    }}
                />
                <span className='error-text'>{errorMessage}</span>
            </div>
            <button onClick={() => processValue()} >
                Update Name
            </button>
        </>
    )
}

export { NameInput }