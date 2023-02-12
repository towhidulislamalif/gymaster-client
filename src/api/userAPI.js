// add user to database
export const addUser = async (user) => {
  const data = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  };
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}users/${user.email}`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};
// process.env.REACT_APP_SERVER_URL
// get user from database
export const getUser = async () => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}users`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  const users = await response.json();
  return users;
};
