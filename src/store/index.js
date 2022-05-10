import axios from 'axios'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './reducers'

const reducer = combineReducers({
    index: indexReducer
})

const serverAxios = axios.create({
    baseURL: 'https://www.kayrain.cn/api'
})

const clientAxios = axios.create({
    baseURL: '/'
}) 

// 服务端使用
export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

// 客户端使用
export const getClientStore = () => {
    const defaultStore = window.__context ? window.__context : {}
    return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}