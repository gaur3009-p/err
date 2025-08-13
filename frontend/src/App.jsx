import React, { useState } from 'react'

function WaitlistForm(){
  const [email, setEmail] = useState('')
  const [partnerEmail, setPartnerEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try{
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, partnerEmail })
      })
      if(!res.ok) throw new Error('network')
      setStatus('ok')
      setEmail('')
      setPartnerEmail('')
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3 max-w-md">
      <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" className="w-full p-3 rounded border" />
      <input required value={partnerEmail} onChange={e=>setPartnerEmail(e.target.value)} placeholder="Partner's email" className="w-full p-3 rounded border" />
      <div className="flex items-center gap-3">
        <button type="submit" className="px-4 py-2 rounded bg-primary text-white">Join Waitlist</button>
        {status === 'loading' && <div>Sending...</div>}
        {status === 'ok' && <div className="text-green-600">Thanks — we&apos;ll email you!</div>}
        {status === 'error' && <div className="text-red-600">Something went wrong.</div>}
      </div>
    </form>
  )
}

function Hero(){
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

function HowItWorks(){
  const steps = [
    {title: 'Consent & Setup', body: 'Both partners agree and upload short voice samples and messages.'},
    {title: 'Personalization', body: 'We build a voice and personality profile — controlled by both partners.'},
    {title: 'Use & Boundaries', body: 'AI stays available with limits and nudges to connect in person.'}
  ]
  return (
    <section id="how" className="py-12">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg bg-white">
            <div className="text-lg font-semibold">{s.title}</div>
            <div className="mt-2 text-slate-600">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features(){
  const items = [
    {title: 'Anti-addiction design', body: 'Conversation limits, cooldowns, and nudges to contact your partner.'},
    {title: 'Partner-priority mode', body: 'AI steps back when the real partner is available.'},
    {title: 'Privacy & Consent', body: 'End-to-end encryption and joint control over training data.'}
  ]
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Designed for healthy connection</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg border">
            <div className="font-semibold">{it.title}</div>
            <div className="mt-2 text-slate-600">{it.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Safety(){
  return (
    <section id="safety" className="py-12">
      <h2 className="text-2xl font-semibold">Privacy & Safety</h2>
      <div className="mt-4 text-slate-700 space-y-3">
        <p><strong>Consent-first:</strong> Both partners must opt in to training data (voice, messages).</p>
        <p><strong>Usage transparency:</strong> Activity logs visible to both partners.</p>
        <p><strong>Controls:</strong> Set conversational boundaries, turn off features, and export/delete data.</p>
      </div>
    </section>
  )
}

function Testimonials(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Stories</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg border">
          <div className="text-lg font-medium">"We felt closer during deployment"</div>
          <div className="mt-2 text-slate-600">— Military family, beta user</div>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <div className="text-lg font-medium">"It nudged me to call instead of just texting"</div>
          <div className="mt-2 text-slate-600">— Long-distance couple, beta user</div>
        </div>
      </div>
    </section>
  )
}

export default function App(){
  return (
    <div className="min-h-screen text-gray-800">
      <header className="max-w-6xl mx-auto p-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-semibold">PartnerPresence</div>
          <div className="space-x-4">
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#safety" className="hover:underline">Safety</a>
            <a href="#waitlist" className="hover:underline">Join Waitlist</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <HowItWorks />
        <Features />
        <Safety />
        <Testimonials />

        <section id="waitlist" className="py-12">
          <h2 className="text-2xl font-semibold">Join the waitlist</h2>
          <div className="mt-6">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} PartnerPresence — Built for real connection. Privacy-first.
      </footer>
    </div>
  )
}
