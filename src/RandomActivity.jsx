import { useState, useEffect } from "react";
import axios from 'axios'

function RandomActivity() {
    const [randomActivity, setRandomActivity] = useState({});
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        getRandomActivity();
    }, [])

    
    const getRandomActivity = async () => {
        try {
            const response = await axios.get('https://www.boredapi.com/api/activity');
            console.table(response.data);
            setRandomActivity(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <>
            <div>
                <h3>{randomActivity.activity || null}</h3>
                {randomActivity.link && <a href={`${randomActivity.link}`}>Link to activity</a>}
            </div>
            <button onClick={() => getRandomActivity()}>Generate Random Activity</button>
            <button onClick={() => setTrigger(!trigger)} >Trigger useeffect</button>
        </>
    )
}

export default RandomActivity;