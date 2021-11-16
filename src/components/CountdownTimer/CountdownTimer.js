import {useState, useEffect} from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from "../Utils/CountdownTimerUtils"

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <>
    <div className="secTimer">

        <div className="timerSec">

            <div className="countClock" >
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
    <span>:</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
        </div>
       
        <div className="countdownLabel">
            <span className="typeLabel">Days</span>
            <span className="typeLabel">Hours</span>
            <span className="typeLabel">Minutes</span>
            <span className="typeLabel">Seconds</span>
        </div>

        </div>

 </div>

        </div>


        
        </>
    );
}

export default CountdownTimer;