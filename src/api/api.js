import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://htmlweb.ru/json/service/inflect'
})

const API_KEY = '763fb1a96e9e5e0077ae6a0858178f7b'

export const weatherAPI = {
    getWordCase(word, wordCase) {
        return instance.get(`/?inflect=${word}&grammems=${wordCase}&nolimit&html&letter_case=ucfirst&api_key=${API_KEY}`)
            .then(responsive => responsive.data)
    }
}
