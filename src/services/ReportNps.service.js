import http from '../http-conf'

class ReportNps {
    getReportNps(data) {
        return http.post('/skripsi/api/nps',data)
    }

    getReportSentiment(data) {
        return http.post('/skripsi/api/getFeedbackCustomer',data)
    }
}

export default new ReportNps();
