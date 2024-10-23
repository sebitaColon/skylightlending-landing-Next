export async function onRegisterSubmitService(data: any) {
  const requestData = { ...data, action: "register" };
  const response = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return await response.json();
}
