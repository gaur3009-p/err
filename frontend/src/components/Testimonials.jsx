import React from 'react'

export default function Testimonials(){
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
