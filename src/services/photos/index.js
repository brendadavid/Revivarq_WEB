import axios from 'axios';
import { Constants } from 'configs/constants';
import { PostPhotos, GetPhotos } from 'configs/api_routes';

export const postPhotos = async (photos) => {

    const bodyFormData = new FormData();
    
    for (let index = 0; index < photos.length; index++) {
        bodyFormData.append('avatar',photos[index]);
        bodyFormData.append('name','avatar');
    }
    let route = PostPhotos;
    const response = await axios({
        method: 'post',
        url: route.url,
        timeout: 5000,
        data: bodyFormData,
        headers:{
            "Content-Type": 'multipart/form-data; boundary=--------------------------904308923144875942940971',
            'accept': '*/*'
        } 
    })
    if (response) {
        const api_response = response.data
        return api_response
    } else {
        return { statusDesc: 'Erro obtendo resposta do servidor.', statusCode: Constants.InternalServerError }
    }

}

export const getPhotos = async () => {
  const param= '?file='
  const image = 'avatar-157409410385791.jpeg'
  let route = GetPhotos;
  const response = await axios({
      method: 'get',
      url: route.url+param+image,
      timeout: 5000,
      data: {},
      headers:{
          "Content-Type": 'multipart/form-data; boundary=--------------------------904308923144875942940971',
          'accept': '*/*'
      } 
  })
  if (response) {
      
      const api_response = response.data
      console.log(api_response)
      return api_response
  } else {
      return { statusDesc: 'Erro obtendo resposta do servidor.', statusCode: Constants.InternalServerError }
  }

}