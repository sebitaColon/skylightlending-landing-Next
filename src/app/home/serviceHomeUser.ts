export const fetchUserData = async () => {
  const response = await fetch('https://skylightlending-landing-next-4p2utm5va.vercel.app/api/auth', {
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