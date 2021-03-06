import axios from 'axios'
import { Constants } from 'configs/constants';
import { UpdateReforms, GetReforms, PostReform } from 'configs/api_routes';

export const getReforms = async (user) => {

    let route = GetReforms;
    const response = await axios({
        method: 'get',
        url: route.url,
        timeout: 5000,
        data:user,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    })

    if (response) {
        return response.data.data
    } else {
        return { statusDesc: 'Erro obtendo resposta do servidor.', statusCode: Constants.InternalServerError }
    }
}

export const editReform = async (reform) => {

    let route = UpdateReforms;
    const response = await axios({
        method: route.method,
        url: route.url,
        timeout: 5000,
        data:reform,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    })

    if (response) {
        return response.data
    } else {
        return { statusDesc: 'Erro obtendo resposta do servidor.', statusCode: Constants.InternalServerError }
    }
}

export const postReform = async (reform) => {

    let userID = sessionStorage.getItem("id");

    reform.userId = userID;

    let route = PostReform;
    
    const response = await axios({
        method: 'post',
        url: route.url,
        timeout: 5000,
        data:reform,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
    })

    if (response) {
        return response.data
    } else {
        return { statusDesc: 'Erro obtendo resposta do servidor.', statusCode: Constants.InternalServerError }
    }
}

