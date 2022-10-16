export const refreshTokenSetup = (res) => {
    //Timing to renew access token

    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60)* 1000;

    let refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();

      refreshTiming =  (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log('newAuthRes:', newAuthRes);

      console.log('new auth token' + newAuthRes.id_token);

      setTimeout(refreshToken, refreshTiming);
    };

    setTimeout(refreshToken, refreshTiming)

}