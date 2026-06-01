import { Bell, Menu, Moon, Search } from "lucide-react";

function Header({ onOpenSidebar }) {
  return (
    <header className="h-16 lg:h-20 bg-white border-b border-slate-200 px-3 sm:px-4 lg:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
        >
          <Menu size={20} />
        </button>

        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Buscar en MERCI..."
            className="w-full h-10 lg:h-11 pl-11 pr-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none text-sm focus:border-blue-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 ml-3">
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <button className="hidden sm:flex w-10 h-10 rounded-full border border-slate-200 items-center justify-center text-slate-600 hover:bg-slate-100">
          <Moon size={18} />
        </button>

        <div className="hidden md:flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            MF
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              María Fernández
            </p>
            <p className="text-xs text-slate-500">Administradora</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;