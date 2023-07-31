import {executeJwtAuthenticationTokenService} from "./api/ApiPostService";
import {apiClient} from "./api/ApiClient";

export const login = async (userId, userPwd) => {

  const res = {
    isLogin : false,
    token : null,
    loginEnteredTime : Date.now(),
    userId : null,
    userName : null,
    userPhone : null,
    userBirth : null,
    userAddr : null,
    userJobEnterdYn : null,
    userDesiredJobGroupCareer : null,
    userDesiredJobGroup : null,
    userDesiredJob : null,
    userJobSkill : null,
    userLastCompany : null,
    userLastJobGroup : null,
    userLastJobGroupCareer : null,
    userLastSchoolName : null,
    userLastSchoolStatus : null,
    userLastSchoolDept : null,
    userJobCareerYn : null,
  }

  try {
    // 로그인과 동시에 userId 와 pwd 를 이용한 Jwt Token 발행 함수..
    const response = await executeJwtAuthenticationTokenService(userId, userPwd);

    if (response.status === 200) {

      const jwtToken = 'Bearer ' + response.data.token;

      res.isLogin = true;
      res.token = jwtToken;
      res.userId = response.data.userId;
      res.userName = response.data.userName;
      res.userPhone = response.data.userPhone;
      res.userBirth = response.data.userBirth;
      res.userAddr = response.data.userAddr;
      res.userJobEnterdYn = response.data.userJobEnterdYn;
      res.userDesiredJobGroupCareer = response.data.userDesiredJobGroupCareer;
      res.userDesiredJobGroup = response.data.userDesiredJobGroup;
      res.userDesiredJob = response.data.userDesiredJob;
      res.userJobSkill = response.data.userJobSkill;
      res.userLastCompany = response.data.userLastCompany;
      res.userLastJobGroup = response.data.userLastJobGroup;
      res.userLastJobGroupCareer = response.data.userLastJobGroupCareer;
      res.userLastSchoolName = response.data.userLastSchoolName;
      res.userLastSchoolStatus = response.data.userLastSchoolStatus;
      res.userLastSchoolDept = response.data.userLastSchoolDept;
      res.userJobCareerYn = response.data.userJobCareerYn;

      // 토큰 인증 성공시 모든 API에 기본 요청 토큰 설정..
      apiClient.interceptors.request.use((config) => {
        config.headers.Authorization = jwtToken;
        return config;
      });

      return res;
    } else {

      return res;
    }

  } catch (error) {
    return res;
  }
}

