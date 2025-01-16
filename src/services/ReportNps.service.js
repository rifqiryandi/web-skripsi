import http from '../http-conf'

class ReportNps {
    getReportNps(data) {
        return http.post('/skripsi/api/nps',data)
    }
}

export default new ReportNps();
