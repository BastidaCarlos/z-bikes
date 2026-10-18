import { useState, useEffect } from "react";

export const useCountdown = (targetDate) => {
    const [ timeLeft, setTimeLeft ] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: false
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetMs = Date.parse(targetDate);
            const currentMs = new Date().getTime();

            if (isNaN(targetMs)) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false }
            }

            const difference = targetMs - currentMs;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true }
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
                isCompleted: false
            }
        }

        const initialValue = calculateTimeLeft();
        setTimeLeft(initialValue)
        
        if (initialValue.isCompleted) return;

        const intervalId = setInterval(() => {
            const updateValue = calculateTimeLeft();
            setTimeLeft(updateValue);

            if (updateValue.isCompleted) {
                clearInterval(intervalId)
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate])

    return timeLeft;
}; 