import React from 'react';
import Button from '@material-ui/core/Button'
import SelectInput from '@material-ui/core/Select/SelectInput';

const Countdown = () => {
    const [timer, settimer] = React.useState(0);
    let counting = true;

    const startcounter = async () => {
        settimer(timer + 1);
    }


    return (
        <>
            <label>{timer}</label>
            <Button onClick={startcounter}>Start</Button>
        </>    
        )
}

export default Countdown;