import { Link } from 'react-router-dom';

export function NotFound() {
    return(
        <>
            <h1>Oopsy Poopsy</h1>
            <h3>Looks like you are deviating from the designated program</h3>
            <h3><Link to="/">Go Home</Link></h3>
        </>
    )
}