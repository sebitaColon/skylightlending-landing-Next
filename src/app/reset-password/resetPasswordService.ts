export async function resetPasswordService(
  data: any,
  emailToken: string | null
) {
  const requestData = { ...data, emailToken };
  const response = await fetch(`https://skylightlending-landing-next-4p2utm5va.vercel.app/api/auth`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return await response.json();
}