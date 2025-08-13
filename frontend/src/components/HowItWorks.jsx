import React from 'react'

export default function HowItWorks(){
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
