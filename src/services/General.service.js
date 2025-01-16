import http from '../http-conf'

class General {
    getGeneral(data) {
        return http.post('/skripsi/api/nps',data)
    }
}

export default new ReportNps();
