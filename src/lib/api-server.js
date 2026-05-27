
export const ApiServer = async (path, method = "GET", body = {}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`, {
    method: method,
    
    headers: {
      "content-type": "application/json",
    },
    ...(body && ["POST", "PUT", "PATCH"].includes(method)
      ? { body: JSON.stringify(body) }
      : {}),
  });
 try {
   const data = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
 } catch (error) {
  console.log(error)
  return {
    ok: false,
    status: response.status,
    data: null,
  }
 }
};
