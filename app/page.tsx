"use client";
import { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import { languages } from "../utils/utilities";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);

  return (
    <main>
      <header>
        <LanguageSelector />
      </header>
      <div className="code-editor-ref">
        <CodeEditor language={language} />
      </div>
    </main>
  );
}
