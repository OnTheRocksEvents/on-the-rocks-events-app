import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import agents from "../../data/agents.json";

const Chatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const { t } = useTranslation();

  const handleSend = () => {
    if (!input) return;
    const agent = agents[Math.floor(Math.random() * agents.length)];
    setHistory((h) => [
      ...h,
      `👤: ${input}`,
      `🤖 ${agent.name}: ${agent.reply}`,
    ]);
    setInput("");
  };

  return (
    <div className="glass-card chatbot">
      <h3>💬 {t("chatbot")}</h3>
      <div className="chat-history">
        {history.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        placeholder={t("askAgent")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>{t("send")}</button>
    </div>
  );
};
export default Chatbot;
