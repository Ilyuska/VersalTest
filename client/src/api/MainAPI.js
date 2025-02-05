import axios from 'axios'
import { projects } from "./TempAPI/OurProjects"
import { trusts } from "./TempAPI/information"
import { menu } from "./TempAPI/MenuItemsAPI"
import { order } from './TempAPI/Order'

const API_BASE_URL = "http://localhost:5173/"
axios.defaults.baseURL = API_BASE_URL


export const getTrusts = async () => {
    try {
        const response = await trusts //axios.get('link')
        return response //response.data
    } catch (error){
        console.log(error)
    }
} 

export const getProjects = async () => {
    try {
        const response = await projects //axios.get('link')
        return response //response.data
    } catch (error){
        console.log(error)
    }
} 

export const getMenu = async () => {
    try {
        const response = await menu //axios.get('menu')
        return response //response.data
    } catch (error){
        console.log(error)
    }
} 


//JWT login + register + добавить в запрос JWT
export const setLoginCode = async (phoneNomber) => {
    try {
        const response = await phoneNomber //axios.post('auth/send-code', {phone: phoneNomber})
        return response //response.data
    } catch (error){
        console.log(error)
        throw error
    }
}

export const completeLoginCode = async (phoneNomber, code) => {
    try {
        const response = await phoneNomber //axios.post('auth/complete-code', {phone: phoneNomber, code})
        const token = "a1b2c3d4" //response.data
        localStorage.setItem('token', token)
        return response //response.data
    } catch (error){
        console.log(error)
        throw error
    }
} 

export const setRegisterCode = async (phoneNomber) => {
    try {
        const response = await phoneNomber //axios.post('register/send-code', {phone: phoneNomber})
        return response //response.data
    } catch (error){
        console.log(error)
        throw error
    }
}

export const completeRegisterCode = async (phoneNomber, code, name) => {
    try {
        const response = await code //axios.post('register/complete-code', {phone: phoneNomber, code, name: name})
        const token = "a1b2c3d4" //response.data
        localStorage.setItem('token', token)
        console.log(`Вы вошли \n Имя: ${name} \n Телефон: ${phoneNomber} \n code: ${code} \n token: ${token}`)
        return response //response.data
    } catch (error){
        console.log(error)
        throw error
    }
} 


//Template -- виды гостей (в них поле меню это корзина данного вида пользователя)

export const getOrder = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await order //axios.get('order', {headers: {Authorization: `Bearer ${token}`,},})
        return response //response.data
    } catch (error){
        console.log(error)
        throw error
    }
} 

export const patchTemplates = async (templateData) => {
    try {
        const token = localStorage.getItem('token')
        const response = await templateData //axios.patch('templates', templateData, {headers: {Authorization: `Bearer ${token}`,},})
        console.log(`Добавлено ${templateData}`)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const patchCart = async (item) => {
    try {
        const token = localStorage.getItem('token')
        const response = await templateData //axios.patch('dishes', item, {headers: {Authorization: `Bearer ${token}`,},})
        console.log(`Добавлено ${templateData}`)
    } catch (error) {
        console.log(error)
        throw error
    }
}