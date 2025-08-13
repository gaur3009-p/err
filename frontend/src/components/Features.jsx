import React from 'react'

export default function Features(){
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
