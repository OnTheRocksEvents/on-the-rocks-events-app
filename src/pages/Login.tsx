import React, { useState } from "react";
import { login } from "@/firebase";
import { useTranslation } from "react-i18next";

const Login: React.FC<{ setRole: Function }> = ({ setRole }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      const user = result.user;
      // Aquí definir lógica de rol basado en usuario
      setRole("employee"); // ejemplo temporal
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder={t("email")} value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder={t("password")} value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">{t("login")}</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
};

export default Login;
