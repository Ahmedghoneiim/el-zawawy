import { useState } from "react";
import { HomePage } from "./features/Home/HomePage";
import AdhkarSection from "./features/Home/AdhkarSection";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      {activeTab === "home" ? (
        <HomePage onNavigate={(tab) => setActiveTab(tab)} />
      ) : (
        <AdhkarSection onNavigate={(tab) => setActiveTab(tab)} />
      )}
    </div>
  );
}