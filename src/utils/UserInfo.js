export const UserInfo = () => {
  const userDataString = localStorage?.getItem('token');
  let userData = null;
  if (userDataString) {
    try {
      userData = JSON?.parse(userDataString);
    } catch (error) {
      console.error('Error parsing JSON for token:', error);
    }
  }
  return userData;
};

export const UserInfoSwathi = () => {
  const userDataString = localStorage?.getItem('tokenSwathi');
  let userData = null;
  if (userDataString) {
    try {
      userData = JSON?.parse(userDataString);
    } catch (error) {
      console.error('Error parsing JSON for tokenSwathi:', error);
    }
  }
  return userData;
};
