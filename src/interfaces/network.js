import { isWeb } from '@/utils/env'
import { LOADING } from '@/interfaces/indicator'
import axios from 'axios'
const base_url = process.env.API_URL

export function GET(url, params = {}, loading = true) {
    if (isWeb()) {
        url = computeUrl(url, params)
        url = base_url + url
        return new Promise((resolve, reject) => {
            loading && LOADING('show')
            axios.get(url, { params }).then(res => {
                LOADING('hide')
                resolve(res)
            }).catch(err => {
                LOADING('hide')
                reject(err)
            })
        })
    } else {
        // todo 其它环境的实现
    }
}

export function POST(url, params = {}, loading = true) {

    if (isWeb()) {
        url = base_url + url
        return new Promise((resolve, reject) => {
            loading && LOADING('show')
            axios.post(url, params).then(res => {
                LOADING('hide')
                resolve(res)
            }).catch(err => {
                LOADING('hide')
                reject(err)
            })
        })
    } else {
        // todo 其它环境的实现
    }
}

export default {
    GET,
    POST
}

function computeUrl(url, params) {
    if (url.indexOf('a_a_a_a') > -1) {
        if (params.sort === 'date') {
            url = url.replace('a_a_a_a_a_a_a_a_a_a_a_a', 'a_a_a_a_a_a_a_3_-1_a_a_a')
        } else if (params.sort === 'sale') {
            url = url.replace('a_a_a_a_a_a_a_a_a_a_a_a', 'a_a_a_a_a_a_a_2_-1_a_a_a')
        } else if (params.sort === 'priceUp') {
            url = url.replace('a_a_a_a_a_a_a_a_a_a_a_a', 'a_a_a_a_a_a_a_1_1_a_a_a')
        } else if (params.sort === 'priceDown') {
            url = url.replace('a_a_a_a_a_a_a_a_a_a_a_a', 'a_a_a_a_a_a_a_1_-1_a_a_a')
        }
        return url
    } else {
        return url
    }
}