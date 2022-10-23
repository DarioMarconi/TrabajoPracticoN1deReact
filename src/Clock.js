import React, {useState, useEffect } from 'react'

const NestedComponet = ()=> {
    const [estado, setEstado] = useState(null)
    useEffect(() => {
        setEstado('estado')
    }, [])

    return (
        <h1>Component anidado, {estado} </h1>
    )
    }

const Clock = (props) => {
    const {name} = props
    const [date, setDate] = useState(new Date())



    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
            );

        return () =>{
            clearInterval(timerID);
        }

    },[])

    const tick = () => {
        setDate(new Date());
    }

    return (
        <div>
            <NestedComponet/>
        </div>
        );
}
export default Clock