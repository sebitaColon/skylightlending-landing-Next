export const logoutUser = async () => {
  const action = "logout"
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action),
  });
  return await response.json();
};

export const fetchUserData = async () => {
  const response = await fetch('http://localhost:3000/api/auth', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return await response.json();
};