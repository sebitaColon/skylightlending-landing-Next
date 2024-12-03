export async function onForgotSubmitService(data: any) {
  const requestData = { ...data, action: "forgotPassword" };
  const response = await fetch("https://skylightlending-landing-next-4p2utm5va.vercel.app/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return await response.json();
}
