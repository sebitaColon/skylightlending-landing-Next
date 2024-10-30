export const updateState = async (estado: boolean,
    id: number) => {
    const action = "updateState"
    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({estado, action}),
    });
    if (!response.ok) {
      throw new Error('Failed in update user');
    }
    return await response.json();
};

export const updateUser = async ({...data}) => {
  const action = "updateUser"
  const response = await fetch(`http://localhost:3000/api/user/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...data, action}),
  });
  if (!response.ok) {
    throw new Error('Failed in update user data');
  }
  return await response.json();
};

export const fetchAdminData = async () => {
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

export const logoutAdmin = async () =>{
    const response = await fetch(`http://localhost:3000/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
};