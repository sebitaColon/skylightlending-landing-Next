export const updateUserProfile = async ({...data}) => {
    const action = "updateUserProfile"
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/user/${data.id}`, {
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
  
  export const fetchUserData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/auth`, {
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
  