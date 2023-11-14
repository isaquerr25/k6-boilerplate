import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    stages: [
        // ramp-up from 1 to 5 VUs in 5s
        { duration: '5s', target: 5 },

        // stay at rest on 5 VUs for 30s
        { duration: '30s', target: 5 },

        // ramp-down from 5 to 0 VUs in 5s
        { duration: '5s', target: 0 }
    ],
}

export default function () {
    const response = http.get('http://10.109.54.13/80')
    check(response, { "status is 200": (r) => r.status === 200 })
    sleep(.300)
}