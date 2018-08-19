import api from '@/services/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  }
}

// API CALL Example
// autentiacaionService.register({
//  email: 'hello@gmail.com',
//  password: '12345@abc'
// })
