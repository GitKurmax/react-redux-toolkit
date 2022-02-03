import React, {useEffect} from 'react'
import {RootState} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, fetchUserById} from '../../redux/slices/counterSlice'

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchUserById())

    })

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
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