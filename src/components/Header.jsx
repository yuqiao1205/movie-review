import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="glass glass-border max-w-6xl mx-auto rounded-3xl">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          <Link href={"/"} className="group flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/5 dark:bg-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-fuchsia-500 shadow-[0_0_0_3px_rgba(255,255,255,0.08)]" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-current/80">Movie Review</div>
              <div className="text-lg font-bold bg-gradient-to-r from-sky-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent group-hover:brightness-110 transition">
                Lauren’s Picks
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden sm:flex items-center gap-2">
              <MenuItem title="home" address="/" Icon={AiFillHome} />
              <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
            </nav>
            <div className="h-10 w-px bg-slate-900/10 dark:bg-white/10 hidden sm:block" />
            <DarkModeSwitch />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden px-4 pb-3">
          <nav className="flex items-center justify-center gap-2">
            <MenuItem title="home" address="/" Icon={AiFillHome} />
            <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
          </nav>
        </div>
      </div>
    </header>
  );
}
