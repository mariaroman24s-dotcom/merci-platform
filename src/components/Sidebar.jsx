import {
  LayoutDashboard,
  Bot,
  PhoneCall,
  History,
  BookOpen,
  CircleHelp,
  Workflow,
  Users,
  Building2,
  Store,
  Cloud,
  BarChart3,
  ClipboardList,
  Settings,
  ChevronLeft,
  X,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const menuSections = [
  {
    title: "Principal",
    items: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Operación",
    items: [
      {
        name: "Agentes Virtuales",
        path: "/agentes-virtuales",
        icon: Bot,
      },
      {
        name: "Extensiones",
        path: "/extensiones",
        icon: PhoneCall,
      },
      {
        name: "Historial de Llamadas",
        path: "/historial-llamadas",
        icon: History,
      },
    ],
  },
  {
    title: "Inteligencia Artificial",
    items: [
      {
        name: "Base de Conocimiento",
        path: "/base-conocimiento",
        icon: BookOpen,
      },
      {
        name: "Preguntas Frecuentes",
        path: "/preguntas-frecuentes",
        icon: CircleHelp,
      },
      {
        name: "Automatizaciones",
        path: "/automatizaciones",
        icon: Workflow,
      },
    ],
  },
  {
    title: "Administración",
    items: [
      {
        name: "Usuarios",
        path: "/usuarios",
        icon: Users,
      },
      {
        name: "Departamentos",
        path: "/departamentos",
        icon: Building2,
      },
      {
        name: "Sucursales",
        path: "/sucursales",
        icon: Store,
      },
    ],
  },
  {
    title: "Integraciones",
    items: [
      {
        name: "Cloud UCM",
        path: "/cloud-ucm",
        icon: Cloud,
      },
    ],
  },
  {
    title: "Analítica",
    items: [
      {
        name: "Reportes",
        path: "/reportes",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Sistema",
    items: [
      {
        name: "Auditoría",
        path: "/auditoria",
        icon: ClipboardList,
      },
      {
        name: "Configuración",
        path: "/configuracion",
        icon: Settings,
      },
    ],
  },
];

function Sidebar({ isOpen, onClose, collapsed, onToggleCollapse }) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen bg-slate-950 text-white flex flex-col transition-all duration-300
      ${collapsed ? "lg:w-20" : "lg:w-72"}
      ${isOpen ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div
        className={`h-16 lg:h-20 flex items-center border-b border-slate-800 ${
          collapsed ? "justify-center px-3" : "justify-between px-5"
        }`}
      >
        <div className="flex items-center min-w-0">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center font-bold shrink-0">
            M
          </div>

          {!collapsed && (
            <div className="ml-3">
              <h1 className="text-lg font-bold leading-tight">MERCI</h1>
              <p className="text-xs text-slate-400">AI Platform</p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 hover:bg-slate-800"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-5 overflow-y-auto scrollbar-hidden">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">
            {!collapsed && (
              <p className="px-3 mb-2 text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                {section.title}
              </p>
            )}

            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.path}
                  item={item}
                  collapsed={collapsed}
                  onClick={onClose}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="hidden lg:block p-4 border-t border-slate-800">
        <button
          onClick={onToggleCollapse}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:bg-slate-800 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <ChevronLeft
            size={20}
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />

          {!collapsed && <span>Colapsar</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;