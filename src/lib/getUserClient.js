import { authClient } from "./auth-client";

export const getUserClient = () => {
  const { data: session } = authClient.useSession();
  return session?.user;
};
