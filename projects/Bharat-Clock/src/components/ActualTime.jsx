import { useEffect, useState } from "react";


function ActualTime() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {

        const Interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(Interval)
        }
    }, [])

    return <h2>current date : {time.toLocaleDateString()} and time is {time.toLocaleTimeString()}</h2>
}
export default ActualTime