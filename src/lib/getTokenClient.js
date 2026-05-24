import { authClient } from "./auth-client";
export async function getTokenClient() {
  try {
    const { data } = await authClient.token();
    return data?.token || null;
  } catch (error) {
    return null;
  }
}
