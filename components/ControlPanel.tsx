import React, { useState } from 'react';
import { Battery, Cpu, Lock, Power, RefreshCw, Shield, Wifi } from 'lucide-react';
import { Card } from './ui/Card';

const devices = [
  { name: 'Main server', id: 'UNIT A-01', status: 'Online', detail: 'Load 24%', Icon: Cpu, tone: 'text-app-success' },
  { name: 'Gateway node', id: 'UNIT B-12', status: 'Standby', detail: 'Signal -42 dBm', Icon: Wifi, tone: 'text-app-warning' },
  { name: 'Backup power', id: 'UNIT C-04', status: 'Attention', detail: 'Charge 12%', Icon: Battery, tone: 'text-app-danger' },
];
export const ControlPanel: React.FC = () => {
  const [locked, setLocked] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [scanCount, setScanCount] = useState(0);
  return (
    <div className="space-y-5 pb-8">
      <div className="rounded-xl border border-app-warning/20 bg-app-warning/5 px-4 py-3 text-xs leading-relaxed text-app-warning" role="note">Demo simulation only — these controls do not connect to or operate real hardware.</div>
      <Card title="Sample devices" headerAction={<span className="text-[10px] font-mono uppercase text-app-muted">3 sample nodes</span>}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {devices.map(({name,id,status,detail,Icon,tone}) => (
            <div key={id} className="rounded-xl border border-app-border bg-app-bg/80 p-4">
              <div className="mb-5 flex items-start justify-between"><Icon size={22} className="text-app-primary" /><span className={['text-[10px] font-semibold uppercase', stopped ? 'text-app-muted' : tone].join(' ')}>{stopped ? 'Paused' : status}</span></div>
              <h3 className="font-semibold text-app-text">{name}</h3><p className="mt-1 font-mono text-xs text-app-muted">{id}</p>
              <p className="mt-4 border-t border-app-border pt-3 text-xs text-app-muted">{detail}</p>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setScanCount(v=>v+1)} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-app-border px-4 py-2 text-sm text-app-text hover:border-app-primary"><RefreshCw size={16} /> Rescan sample devices</button>
        {scanCount > 0 && <p className="mt-3 text-xs text-app-success" role="status">Simulation scan #{scanCount} complete: 3 sample devices found.</p>}
      </Card>
      <Card title="Simulated system controls">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div><h3 className="font-semibold text-app-text">Local control state</h3><p className="mt-2 max-w-md text-sm text-app-muted">{stopped ? 'Simulation paused. Resume to return to the sample operating state.' : locked ? 'Controls are locked locally in this demo.' : 'No live connections. Changes affect only this view.'}</p></div>
          <div className="flex flex-wrap gap-3">
            <button type="button" disabled={stopped} onClick={() => setLocked(v=>!v)} className="inline-flex items-center gap-2 rounded-xl border border-app-border bg-app-bg px-4 py-3 text-sm font-medium hover:border-app-primary disabled:cursor-not-allowed disabled:opacity-40">{locked ? <Lock size={16} /> : <Shield size={16} />}{locked ? 'Unlock demo' : 'Lock demo'}</button>
            <button type="button" onClick={() => { setStopped(v=>!v); setLocked(false); }} className={['inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white', stopped ? 'bg-app-success/80 hover:bg-app-success' : 'bg-app-danger/85 hover:bg-app-danger'].join(' ')}><Power size={16} /> {stopped ? 'Resume simulation' : 'Stop simulation'}</button>
          </div>
        </div>
      </Card>
    </div>
  );
};
