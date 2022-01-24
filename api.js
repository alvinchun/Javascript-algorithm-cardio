import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://dapi.kakao.com/vs/search/book',
  headers: {
    // 'app_id': app_id, //<-- add app id here
    'app_key': process.env.KAKAOAPI_KEY, //<-- add app key here
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    },
});

export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/',
        // 'params': {
        //     'search':'parameter',
        // },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    })
}