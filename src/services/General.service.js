import http from '../http-conf'

class General {
    getRegional() {
        return http.post('/getRegional', {})
    }
    getKcu(data) {
        return http.post('/getKcu', data)
    }
    getKc(data) {
        return http.post('/getKc', data)
    }
}

export default new General();