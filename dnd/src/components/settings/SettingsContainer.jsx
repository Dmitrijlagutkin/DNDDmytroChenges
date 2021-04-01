import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Settings from './Settings'
import {useDispatch} from 'react-redux'
import {chengeClipPadName} from '../../redux/actions/index'

export default function SettingsContainer({isOpenSettings, onClickButtonSettingsHandler}) {
    const history = useHistory()
    const { data } = useSelector((state)=> state)
    const {currentClipPad} = useSelector((state) => state)
    const currentClipPadName = Object.keys(currentClipPad)[0]
    const clipPadNamesList = Object.keys(data)
    const currentEmail =  Object.keys(currentClipPad).length && currentClipPad[currentClipPadName].emailSettings
    const [name, setName] = useState("");
    const [users, setUsers] = useState("")
    const [inputValueName, setInputValueName] = useState("")
    const [inputValueEmail, setInputValueEmail] = useState("")
    const dispatch = useDispatch()
    

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

    const handleChange = (e) => {
      setName(e.target.value)
      setInputValueName(e.target.value)
      setInputValueEmail(e.target.value)
    }

    // const newData = {
    //   ...data,
    //   data[]
    // }
    
    const onClickConfirmChenges = () => {
      dispatch(chengeClipPadName({inputValueName, data, currentClipPadName}))
      onClickButtonSettingsHandler()
    }


    const onChangeInputValueName = (e) => setInputValueName(e.target.value)
    const onChangeInputValueEmail = (e) => setInputValueEmail(e.target.value)

             
    return(<Settings 
            isOpenSettings={isOpenSettings}
            onClickButtonSettingsHandler={onClickButtonSettingsHandler}
            handleChange={handleChange}
            currentClipPadName={currentClipPadName}
            clipPadNamesList={clipPadNamesList}
            users={users}
            name={name}
            currentClipPad={currentClipPad}
            inputValueName={inputValueName}
            onChangeInputValueName={onChangeInputValueName}
            inputValueEmail={inputValueEmail}
            onChangeInputValueEmail={onChangeInputValueEmail}
            currentClipPad={currentClipPad}
            currentEmail={currentEmail}
            onClickConfirmChenges={onClickConfirmChenges}
            />)
}