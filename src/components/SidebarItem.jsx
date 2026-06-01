import { NavLink } from "react-router-dom";

function SidebarItem({ item, collapsed, onClick }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      title={collapsed ? item.name : ""}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
          collapsed ? "justify-center" : ""
        } ${
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <Icon size={20} className="shrink-0" />

      {!collapsed && (
        <span className="whitespace-nowrap font-medium">{item.name}</span>
      )}
    </NavLink>
  );
}

export default SidebarItem;