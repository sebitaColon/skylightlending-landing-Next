export async function resetPasswordService(
  data: any,
  emailToken: string | null
) {
  const requestData = { ...data, emailToken };
  const response = await fetch(`http://localhost:3000/api/auth`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return await response.json();
}