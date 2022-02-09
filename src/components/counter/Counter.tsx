import React, {useEffect} from 'react'
import {RootState} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from '../../redux/slices/counterSlice'

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h3 style={{background: "#00000015", padding: 10}}>Counter component</h3>
            <div style={{margin: 35}}>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span style={{padding: 20}}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}