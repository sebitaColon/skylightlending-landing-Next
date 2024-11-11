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