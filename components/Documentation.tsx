import React from 'react';
import { BookOpen, Cloud, Github, LockKeyhole } from 'lucide-react';
import { Card } from './ui/Card';

export function Documentation() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card title="What is Bio-System?">
        <div className="space-y-3 text-sm leading-7 text-app-muted">
          <BookOpen className="text-app-primary" size={26} />
          <p>Bio-System is a standalone React interface prototype. Dashboards, charts, specimens, process topology and device controls use sample data, not live telemetry.</p>
          <p>Use the left navigation, or swipe the navigation row on mobile. The specimen explorer has searchable list and swarm views.</p>
        </div>
      </Card>
      <Card title="Run locally">
        <div className="space-y-3 text-sm leading-7 text-app-muted">
          <Github className="text-app-primary" size={26} />
          <p>Install Node.js 22 or newer. Clone the repository and run <code className="rounded bg-app-bg px-2 py-1 text-app-text">npm install</code> followed by <code className="rounded bg-app-bg px-2 py-1 text-app-text">npm run dev</code>.</p>
          <p>Run <code className="rounded bg-app-bg px-2 py-1 text-app-text">npm run check</code> to validate types and create the production bundle.</p>
        </div>
      </Card>
      <Card title="Cloudflare-native hosting">
        <div className="space-y-3 text-sm leading-7 text-app-muted">
          <Cloud className="text-app-primary" size={26} />
          <p>Wrangler deploys the prebuilt SPA as Cloudflare Workers Static Assets. Static asset requests are free on Cloudflare's supported free tier.</p>
          <p>GitHub Actions validates pull requests and deploys commits merged to master when Cloudflare credentials are configured.</p>
        </div>
      </Card>
      <Card title="Security and data">
        <div className="space-y-3 text-sm leading-7 text-app-muted">
          <LockKeyhole className="text-app-primary" size={26} />
          <p>This template does not collect user data or require a database, backend, Gemini key or paid account. Demo controls never send commands to real devices.</p>
          <p>Interface preferences are stored only in your browser. See README.md for deployment credentials and usage limitations.</p>
        </div>
      </Card>
    </div>
  );
}
