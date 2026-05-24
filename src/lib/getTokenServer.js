import { headers } from "next/headers";
import { auth } from "./auth";

export async function getTokenServer() {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });
    return token || null;
  } catch (error) {
    return null;
  }
}
