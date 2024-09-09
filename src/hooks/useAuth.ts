import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { type AuthContextType } from "../interfaces/auth";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a provider!");
  }

  return context;
};
