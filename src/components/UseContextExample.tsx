"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const ThemeContext = createContext<{ theme: string; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // 인라인 스타일로 배경/글자색 변경
  const style = {
    background: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#222",
    minHeight: 120,
    padding: 16,
    borderRadius: 8,
    transition: "all 0.3s",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={style}>{children}</div>
    </ThemeContext.Provider>
  );
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);
  return (
    <p style={{ fontWeight: 600, marginBottom: 8 }}>
      현재 테마: {theme}
    </p>
  );
}

function ThemeToggleButton() {
  const { toggle } = useContext(ThemeContext);
  return (
    <button
      onClick={toggle}
      style={{
        padding: "8px 16px",
        borderRadius: 6,
        background: "#eee",
        color: "#222",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
      }}
    >
      테마 전환
    </button>
  );
}

export default function UseContextExample() {
  return (
    <ThemeProvider>
      <ThemedText />
      <ThemeToggleButton />
    </ThemeProvider>
  );
} 