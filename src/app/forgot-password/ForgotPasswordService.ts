export async function onForgotSubmitService(data: any) {
  const requestData = { ...data, action: "forgotPassword" };
  const response = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return await response.json();
}
