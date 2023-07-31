import {apiClient} from "./ApiClient";


export const emailValidService = (userId, flag) => apiClient.post('/api/v1/mail/confirm', {
  email: userId,
  flag: flag,
})

export const findPwdService = (userId, flag) => apiClient.post('/api/v1/user/updatePw', {
  email: userId,
  flag: flag,
})

export const findIdService = (userPhone) => apiClient.post('/api/v1/user/getUserInfoByPhoneNum', {
  phone : userPhone
})


export const signUp = (id, pwd, phone, birthBefore, birthAfter , addr, name) => apiClient.post('/api/v1/user', {
  userId: id,
  userPassword: pwd,
  userPhone: phone,
  userBirth: `${birthBefore + birthAfter}`,
  userAddr: addr,
  userName: name,
})

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})

export const updateUserPwd = (id, currPwd, changePwd) => apiClient.post('/api/v1/user/loginUpdatePw', {
  id : id,
  currPwd : currPwd,
  changePwd : changePwd,
})


/*
* userid : 아이디 \ㅜ
* userName : 이름
* userPhone : 핸드폰번호
* userDesiredJobGroup : 희망 직군 (ex : 개발)
* userDesiredJob : 희망 직무 (ex : 웹 풀스택 개발자)
* userDesiredJobGroupCareer : 직무경력
* userJobSkill : 주요스킬
* userLastCompany : 최종경력 회사이름
* userLastJobGroup : 최종경력 직무
* userLastJobGroupCareer : 최종경력 재직기간
* userLastSchoolName : 최종학교
* userLastSchoolStatus : 이수상태
* userLastSchoolDept : 학과
* setUserJobCareerYn : 신입인지 경력인지
* */
export const updateUserJobProfile = (userid, userName, userPhone, userDesiredJobGroup, userDesiredJob, userDesiredJobGroupCareer, userJobSkill, userLastCompany, userLastJobGroup, userLastJobGroupCareer, userLastSchoolName, userLastSchoolStatus, userLastSchoolDept, setUserJobCareerYn) => apiClient.post('/api/v1/user/updateJobProfile', {
  userId: userid,
  userName: userName,
  userPhone: userPhone,
  userDesiredJobGroup: userDesiredJobGroup,
  userDesiredJob: userDesiredJob,
  userDesiredJobGroupCareer: userDesiredJobGroupCareer,
  userJobSkill: userJobSkill,
  userLastCompany: userLastCompany,
  userLastJobGroup: userLastJobGroup,
  userLastJobGroupCareer: userLastJobGroupCareer,
  userLastSchoolName: userLastSchoolName,
  userLastSchoolStatus: userLastSchoolStatus,
  userLastSchoolDept: userLastSchoolDept,
  userJobCareerYn: setUserJobCareerYn
})

export const fileUpload = (formData) => apiClient.post('/api/v1/user/uploadFile', formData, {headers: {'Content-Type': 'multipart/form-data'}})