import React, {useEffect} from 'react'
import {RootState} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUserById, hideList} from '../../redux/slices/thunkSlice'

export function ThunkExample() {
    const list = useSelector((state: RootState) => state.thunkExample.list)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchUserById())
    }

    const handleHide = () => {
        dispatch(hideList())
    }

    return (
        <div>
            <h3 style={{background: "#00000015", padding: 10}}>ThunkExample component</h3>
            <div style={{margin: 35}}>
                <button onClick={handleClick}>Fetch list</button>
                <button onClick={handleHide}>Hide list</button>
                {list?.map((item, index) => {
                    return <p key={index}>{item.title}</p>
                }) }
            </div>
        </div>
    )
}