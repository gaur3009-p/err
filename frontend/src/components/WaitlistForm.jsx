import React, {useState} from 'react'
import axios from 'axios'

export default function WaitlistForm(){
  const [email, setEmail] = useState('')
  const [partnerEmail, setPartnerEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try{
      await axios.post('/api/waitlist', { email, partnerEmail })
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
