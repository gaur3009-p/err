import React from 'react'
import WaitlistForm from './WaitlistForm'

export default function Hero(){
  return (
    <section className="py-12 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold">Stay close when you&apos;re apart</h1>
        <p className="mt-4 text-lg text-slate-700">PartnerPresence creates an ethically-designed AI stand-in of your partner — voice, warmth, and memory — with strict consent and anti-addiction safeguards.</p>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>Consent-first voice cloning</li>
          <li>Partner-priority mode & cooldowns</li>
          <li>Designed to encourage real interactions</li>
        </ul>
        <div className="mt-6">
          <WaitlistForm />
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-gradient-to-r from-white/60 to-slate-50 shadow">
        <div className="h-64 flex items-center justify-center bg-slate-100 rounded-lg">
          <div className="text-center p-4">
            <div className="text-xl font-medium">Audio message demo</div>
            <div className="mt-4 text-slate-600">(Placeholder UI — integrate voice player in product)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
