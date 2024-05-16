export const UserInfo = () => {
  const userDataString = localStorage.getItem('token');
  let userData;
  if (userDataString) {
    userData = JSON.parse(userDataString);
  }
  return userData;
};
