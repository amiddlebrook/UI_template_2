import React from 'react';
import { Activity, BarChart3, BookOpen, Database, GitBranch, LayoutDashboard, Settings, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

type Props = { activeView: ViewState; onViewChange: (view: ViewState) => void };
const items = [
  { id: ViewState.DASHBOARD, label: 'Overview', icon: LayoutDashboard },
  { id: ViewState.ANALYTICS, label: 'Analytics', icon: BarChart3 },
  { id: ViewState.DATA_GRID, label: 'Data explorer', icon: Database },
  { id: ViewState.PROCESS, label: 'Process topology', icon: GitBranch },
  { id: ViewState.CONTROLS, label: 'Controls', icon: SlidersHorizontal },
  { id: ViewState.SETTINGS, label: 'Settings', icon: Settings },
  { id: ViewState.DOCS, label: 'Documentation', icon: BookOpen },
];

export const SolarNavigation: React.FC<Props> = ({ activeView, onViewChange }) => {
  const buttons = (mobile: boolean) => items.map(({ id, label, icon: Icon }) => {
    const active = activeView === id;
    return (
      <button
        key={id}
        type="button"
        aria-current={active ? 'page' : undefined}
        onClick={() => onViewChange(id)}
        className={[
          'group flex shrink-0 items-center gap-3 rounded-xl border text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-primary',
          mobile ? 'px-3 py-2.5' : 'w-full px-4 py-3',
          active ? 'border-app-primary/30 bg-app-primary/15 font-semibold text-white shadow-glow' : 'border-transparent text-app-muted hover:border-app-border hover:bg-app-surface hover:text-white',
        ].join(' ')}
      >
        <Icon size={mobile ? 16 : 19} className={active ? 'text-app-primary' : 'text-app-muted group-hover:text-app-primary'} />
        <span className="whitespace-nowrap">{label}</span>
        {!mobile && active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-app-primary" />}
      </button>
    );
  });

  return (
    <>
      <aside className="relative z-10 hidden w-64 shrink-0 flex-col border-r border-app-border/70 bg-[#101625]/90 px-4 py-7 lg:flex">
        <div className="mb-11 flex items-center gap-3 px-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-app-primary/30 bg-app-primary/10 text-app-primary">
            <Activity size={23} />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#101625] bg-app-success" />
          </div>
          <div><p className="text-lg font-bold tracking-tight text-white">BIO<span className="text-app-primary">SYSTEM</span></p><p className="text-[10px] font-mono uppercase tracking-[0.15em] text-app-muted">Organic interface / 2.2</p></div>
        </div>
        <p className="mb-3 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-app-muted">Workspace</p>
        <nav aria-label="Main navigation" className="space-y-1">{buttons(false)}</nav>
        <div className="mt-auto rounded-2xl border border-app-primary/15 bg-gradient-to-br from-app-primary/10 to-app-surface p-4">
          <div className="mb-3 flex items-center justify-between"><Sparkles className="text-app-primary" size={18} /><span className="rounded-full bg-app-warning/10 px-2 py-1 text-[9px] font-bold text-app-warning">SIMULATED</span></div>
          <p className="text-sm font-semibold text-white">Explore the ecosystem</p>
          <p className="mt-1 text-xs leading-relaxed text-app-muted">A living interface prototype. Interactions stay in this browser; no devices are connected.</p>
        </div>
      </aside>
      <div className="relative z-20 border-b border-app-border/70 bg-[#101625] lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-base font-bold tracking-tight text-white">BIO<span className="text-app-primary">SYSTEM</span></span>
          <span className="text-[10px] font-mono tracking-widest text-app-muted">UI / 02</span>
        </div>
        <nav aria-label="Mobile navigation" className="flex gap-1 overflow-x-auto px-3 pb-3">{buttons(true)}</nav>
      </div>
    </>
  );
};
