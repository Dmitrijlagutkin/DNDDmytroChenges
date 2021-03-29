import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Settings from './Settings'

export default function SettingsContainer({isOpenSettings, onClickButtonSettingsHandler}) {
    const history = useHistory()
    const { data } = useSelector((state)=> state)
    const {currentClipPad} = useSelector((state) => state)
    const currentClipPadName = Object.keys(currentClipPad)[0]
    const clipPadNamesList = Object.keys(data)
    const [name, setName] = useState('');

    const [users, setUsers] = useState([])

    useEffect(()=>{
        Object.keys(currentClipPad).length && setUsers(currentClipPad[currentClipPadName].users)
    }, [currentClipPad])

    useEffect(()=>selectedClipPad(name), [name])
    const selectedClipPad = (name) => {
        if (!!name && name !== currentClipPadName) {
             history.push(`/clip-board/${name}`)
           return data[name] 
        }
    }

    const handleChange = (event) => {
        setName(event.target.value); 
      };
             
    return(<Settings 
            isOpenSettings={isOpenSettings}
            onClickButtonSettingsHandler={onClickButtonSettingsHandler}
            handleChange={handleChange}
            currentClipPadName={currentClipPadName}
            clipPadNamesList={clipPadNamesList}
            users={users}
            name={name}
            currentClipPad={currentClipPad}
            />)
}