export const ApiClient = async (path, method = "GET", body = {}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    ...(body && ["POST", "PUT", "PATCH"].includes(method)
      ? { body: JSON.stringify(body) }
      : {}),
  });
  const data = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
};
