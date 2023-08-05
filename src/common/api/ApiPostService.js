import {apiClient} from "./ApiClient";


export const emailValidService = (userId) => apiClient.post(`/api/v1/mail/${userId}`, {
  email: userId
})

export const findPwdService = (userId, flag) => apiClient.post('/api/v1/user/updatePw', {
  email: userId,
  flag: flag,
})

export const findIdService = (userPhone) => apiClient.post('/api/v1/user/getUserInfoByPhoneNum', {
  phone : userPhone
})


export const signUp = (id, pwd, addr, name, phone) => apiClient.post('/api/v1/members/insert', {
  id: id,
  password: pwd,
  address: addr,
  username: name,
  phoneNum : phone

})

export const loginAction = (id, password) => apiClient.post('/api/v1/members/login', {
  id: id,
  password : password
})

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})

export const updateUserPwd = (id, currPwd, changePwd) => apiClient.post('/api/v1/user/loginUpdatePw', {
  id : id,
  currPwd : currPwd,
  changePwd : changePwd,
})

export const updateUserInfo = (userName, userAddr) => apiClient.post('/api/v1/members/update', {
  username : userName,
  address : userAddr
})

export const fileUpload = (formData) => apiClient.post('/api/v1/user/uploadFile', formData, {headers: {'Content-Type': 'multipart/form-data'}})