export async function onLoginSubmitService(data: any) {
  const requestData = { ...data, action: "login" };
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return await response.json();
}
