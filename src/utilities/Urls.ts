const baseUrl = 'https://martlok.com/';

type props = {
  home: string;
  login: string;
  forgetPassword: string;
  signup: string;
  api: string;
};
const Urls = (): props => {
  return {
    home: `${baseUrl}mobile/home/`,
    login: `${baseUrl}app/mobile/login/`,
    forgetPassword: `${baseUrl}app/mobile/recovery/`,
    signup: `${baseUrl}app/mobile/register/`,
    api: `${baseUrl}app/api/account/login/index.php`,
  };
};

export default Urls;
