import { getTokenClient } from "./getTokenClient";

export const ApiClient = async ({
  path,
  method = "GET",
  body = {},
  auth = false,
}) => {
  let token = null;
  if (auth) {
    token = await getTokenClient();
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`, {
    method: method,

    headers: {
      "content-type": "application/json",
      ...(auth && {
        Authorization: `Bearer ${token}`,
      }),
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
    console.log(error);
    return {
      ok: response.ok,
      status: response.status,
      data: null,
    };
  }
};
