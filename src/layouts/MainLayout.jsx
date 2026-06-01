import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-950/50 z-40 lg:hidden"
        />
      )}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div
        className={`flex-1 min-w-0 transition-all duration-300 ${
          sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"
        }`}
      >
        <Header onOpenSidebar={() => setSidebarOpen(true)} />

        <main className="p-3 sm:p-4 lg:p-6">
          <div className="bg-white border border-slate-200 rounded-2xl lg:rounded-3xl shadow-sm min-h-[calc(100vh-104px)] p-4 sm:p-5 lg:p-8 overflow-x-hidden">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;