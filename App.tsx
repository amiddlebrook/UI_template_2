import React, { useState } from 'react';
import { Activity, CircleDot, ShieldCheck } from 'lucide-react';
import { SolarNavigation } from './components/SolarNavigation';
import { Dashboard } from './components/Dashboard';
import { DataGrid } from './components/DataGrid';
import { Analytics } from './components/Analytics';
import { ProcessFlow } from './components/ProcessFlow';
import { ControlPanel } from './components/ControlPanel';
import { Documentation } from './components/Documentation';
import { SettingsPanel } from './components/SettingsPanel';
import { ViewState } from './types';

const titles: Record<ViewState, { title: string; summary: string }> = {
  [ViewState.DASHBOARD]: { title: 'System overview', summary: 'Your simulated ecosystem at a glance' },
  [ViewState.ANALYTICS]: { title: 'Analytics', summary: 'Explore sample activity and distribution data' },
  [ViewState.DATA_GRID]: { title: 'Biosphere explorer', summary: 'Search, inspect and filter specimens' },
  [ViewState.PROCESS]: { title: 'Process topology', summary: 'A visualization of the sample workflow' },
  [ViewState.CONTROLS]: { title: 'Control center', summary: 'Safely try the interactive controls in demo mode' },
  [ViewState.SETTINGS]: { title: 'Preferences', summary: 'Customize your local interface experience' },
  [ViewState.DOCS]: { title: 'Documentation', summary: 'How to run, deploy, and extend Bio-System' },
};

const content: Record<ViewState, React.ReactNode> = {
  [ViewState.DASHBOARD]: <Dashboard />,
  [ViewState.ANALYTICS]: <Analytics />,
  [ViewState.DATA_GRID]: <DataGrid />,
  [ViewState.PROCESS]: <ProcessFlow />,
  [ViewState.CONTROLS]: <ControlPanel />,
  [ViewState.SETTINGS]: <SettingsPanel />,
  [ViewState.DOCS]: <Documentation />,
};

export default function App() {
  const [activeView, setActiveView] = useState<ViewState>(ViewState.DASHBOARD);
  const page = titles[activeView];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-app-bg text-app-text lg:h-screen lg:flex-row">
      <div className="pointer-events-none absolute -top-60 right-0 h-[550px] w-[550px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-20 h-80 w-80 rounded-full bg-violet-500/5 blur-[100px]" />
      <SolarNavigation activeView={activeView} onViewChange={setActiveView} />
      <main className="relative flex min-w-0 flex-1 flex-col lg:overflow-hidden">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-app-border/70 bg-app-surface/40 px-5 py-4 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-app-primary/25 bg-app-primary/10 text-app-primary"><Activity size={18} /></div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.23em] text-app-muted">Control room / 02</p>
              <p className="text-sm font-semibold text-app-text">Bio-System workspace</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-app-warning/30 bg-app-warning/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-app-warning"><CircleDot size={13} /> DEMO DATA</span>
            <span className="hidden items-center gap-2 text-xs text-app-muted sm:inline-flex"><ShieldCheck size={15} className="text-app-success" /> Static • No API keys</span>
          </div>
        </header>
        <section className="flex-1 overflow-y-auto px-4 pb-10 pt-6 sm:px-8 lg:min-h-0">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.23em] text-app-primary">BIOSYSTEM / {activeView.replace('_', ' ')}</p>
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{page.title}</h1>
              <p className="mt-2 text-sm text-app-muted">{page.summary}</p>
            </div>
            <span className="rounded-lg border border-app-border bg-app-surface/70 px-3 py-2 font-mono text-[10px] tracking-wide text-app-muted">BUILD 2.2 • CLOUDFLARE READY</span>
          </div>
          <div className="min-h-[520px] lg:h-[calc(100%-110px)]">{content[activeView]}</div>
        </section>
      </main>
    </div>
  );
}
