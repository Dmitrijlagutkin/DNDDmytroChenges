import { ADD_COLUMN } from '../types'
import { ADD_ITEM } from '../types'
import { CHANGE_COLUMN_NAME } from '../types/'
import { SET_CURRENT_CLIP_PAD } from '../types/'
import { DELETE_COLUMN } from '../types/'
import { CHANGE_ITEM } from '../types/index'
import { DELETE_ITEM } from '../types/index'

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload })
export const addItem = (payload) => ({type: ADD_ITEM, payload })
export const changeColumnName = (payload) => ({type: CHANGE_COLUMN_NAME, payload})
export const deleteColumn = (payload) => ({type: DELETE_COLUMN, payload})
export const setCurrentClipPad = (payload) => ({type: SET_CURRENT_CLIP_PAD, payload})
export const changeItem = (payload) => ({type: CHANGE_ITEM, payload})
export const deleteItem = (payload) => ({type: DELETE_ITEM, payload})


