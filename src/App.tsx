/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutDashboard, TrendingUp, History, Activity, ShieldCheck, DollarSign } from 'lucide-react';

export default function App() {
  const activePositions = [
    { symbol: 'BTC/USD', type: 'BUY', entry: '64,230.00', pl: '+420.50' },
    { symbol: 'ETH/USD', type: 'SELL', entry: '3,450.00', pl: '-12.30' },
  ];

  const history = [
    { symbol: 'SOL/USD', type: 'BUY', exit: '145.00', pl: '+15.20' },
    { symbol: 'BTC/USD', type: 'SELL', exit: '65,000.00', pl: '-200.00' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8 font-sans">
      <nav className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="text-emerald-500" /> Trade-Bot Web
        </h1>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#" className="text-emerald-500">Dashboard</a>
          <a href="#">Active Trades</a>
          <a href="#">History</a>
          <span className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            System Online
          </span>
        </div>
      </nav>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total P&L (USD)', value: '$12,450.20', icon: DollarSign },
          { label: 'Win Rate (%)', value: '78.5%', icon: ShieldCheck },
          { label: 'Total Trades', value: '1,240', icon: Activity },
          { label: 'Current Balance', value: '$45,890.00', icon: LayoutDashboard },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
        <h2 className="text-xl font-bold mb-4">Active Positions</h2>
        <div className="hidden md:block">
          <table className="w-full text-left">
            <thead><tr className="text-gray-400 border-b border-gray-800"><th>Symbol</th><th>Type</th><th>Entry</th><th>Live P&L</th></tr></thead>
            <tbody>{activePositions.map((p, i) => <tr key={i} className="border-b border-gray-800"><td>{p.symbol}</td><td>{p.type}</td><td>{p.entry}</td><td className={p.pl.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}>{p.pl}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="md:hidden grid gap-4">
          {activePositions.map((p, i) => <div key={i} className="border-b border-gray-800 pb-4"><div>{p.symbol} ({p.type})</div><div>P&L: {p.pl}</div></div>)}
        </div>
      </section>

      <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Trade History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead><tr className="text-gray-400 border-b border-gray-800"><th>Symbol</th><th>Type</th><th>Exit</th><th>P&L</th></tr></thead>
            <tbody>{history.map((p, i) => <tr key={i} className="border-b border-gray-800"><td>{p.symbol}</td><td>{p.type}</td><td>{p.exit}</td><td className={p.pl.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}>{p.pl}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
