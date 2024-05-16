export const UserInfo = () => {
  const userDataString = localStorage.getItem('userData');
  let userData;
  if (userDataString) {
    userData = JSON.parse(userDataString);
  }
  return userData;
};
