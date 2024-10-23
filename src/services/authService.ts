export const logoutUser = async () => {
  const response = await fetch('http://localhost:3000/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Logout failed');
  }
  return await response.json();
};

export const fetchUserData = async () => {
  const response = await fetch('http://localhost:3000/api/logout', {
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

export const updateState = async (estado: boolean,
  id: number) => {
    const action = "updateState"
  const response = await fetch(`http://localhost:3000/api/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({estado, action}),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return await response.json();
};