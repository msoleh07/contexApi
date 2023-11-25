import React from 'react'
import { useStateValue } from '../../context/stateProvider'

function Home() {
    const [state, dispatch] = useStateValue()
    // console.log(state);

    let submitData = () => {
        dispatch({
            type: "SEND",
            payload: "User information for Fozilkhon"
        })
    }

    return (
        <div className='home'>
            <h2>{state && state.userInfo}</h2>

            <button onClick={submitData}>SendInfo</button>
        </div>
    )
}

export default Home
