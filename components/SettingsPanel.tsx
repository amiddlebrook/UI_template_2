import React, { useEffect, useState } from 'react';
import { Eye, RotateCcw } from 'lucide-react';
import { Card } from './ui/Card';

const KEY = 'bio-system-motion';
export function SettingsPanel() {
  const [motion, setMotion] = useState(() => {
    try { return localStorage.getItem(KEY) !== 'off'; }
    catch { return true; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle('reduced-motion', !motion);
    try { localStorage.setItem(KEY, motion ? 'on' : 'off'); } catch { /* storage unavailable */ }
    return () => document.documentElement.classList.remove('reduced-motion');
  }, [motion]);

  return (
    <div className="max-w-3xl">
      <Card title="Interface preferences">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <div className="flex items-start gap-3">
            <Eye className="mt-1 text-app-primary" size={22} />
            <div><h2 className="font-semibold text-app-text">Motion effects</h2><p className="mt-1 max-w-lg text-sm leading-relaxed text-app-muted">Turn off decorative transitions and animations. Your operating system's reduced-motion preference is always respected.</p></div>
          </div>
          <button type="button" role="switch" aria-checked={motion} onClick={() => setMotion(v => !v)} className={['relative h-8 w-14 rounded-full transition-colors', motion ? 'bg-app-primary' : 'bg-app-border'].join(' ')}>
            <span className={['absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all', motion ? 'left-7' : 'left-1'].join(' ')} />
            <span className="sr-only">Toggle motion effects</span>
          </button>
        </div>
        <div className="mt-6 border-t border-app-border pt-5">
          <button type="button" onClick={() => setMotion(true)} className="inline-flex items-center gap-2 rounded-lg border border-app-border px-3 py-2 text-xs text-app-muted hover:border-app-primary hover:text-white"><RotateCcw size={14} /> Restore defaults</button>
        </div>
      </Card>
    </div>
  );
}
