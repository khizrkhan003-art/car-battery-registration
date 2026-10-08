import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQSection from '@/components/content/FAQSection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/jsonld'

export const metadata: Metadata = generatePageMetadata({
  title: 'How to Change a Car Battery at Home (UK Step-by-Step DIY Guide)',
  description: 'Easy, safe DIY guide on changing your car battery. Terminal disconnect order, tools required, memory savers, and avoiding short circuits.',
  path: '/guides/how-to-change-car-battery-uk',
  keywords: ['how to change car battery uk', 'car battery terminal disconnect order', 'which terminal to disconnect first negative positive']
})

export default function HowToChangeBatteryGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'How to Change a Car Battery', href: '/guides/how-to-change-car-battery-uk' },
  ]

  const faqs = [
    {
      question: 'Which terminal do I disconnect first when removing a battery?',
      answer: 'Always disconnect the Negative terminal (marked with a minus symbol "-" and usually with a black cable) first. This disconnects the vehicle chassis ground. If your metal spanner touches the car body while undoing the negative clamp, no short circuit will occur.'
    },
    {
      question: 'Which terminal do I reconnect first when installing the new battery?',
      answer: 'Always reconnect the Positive terminal (marked with a plus symbol "+" and red cap/cable) first, and the Negative terminal last.'
    },
    {
      question: 'Will changing my car battery reset the radio or immobiliser?',
      answer: 'In older cars, disconnecting the battery may require entering an audio radio security code. In modern European cars, temporary memory may be lost (electric window pinch calibration or clock), but the engine immobiliser and key fob programming will remain safely stored.'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs.map(b => ({ label: b.label, url: b.href })))} />
        <JsonLd data={generateFAQSchema(faqs)} />

        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <article className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded">
              Step-by-Step Tutorial
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-gray-950 mt-3 mb-4 leading-tight">
              How to Change a Car Battery at Home: UK DIY Guide
            </h1>
            <div className="text-xs text-gray-500 flex items-center gap-3">
              <span>By UK Automotive Engineering Team</span>
              <span>•</span>
              <span>8 Min Read</span>
              <span>•</span>
              <span>Updated October 2026</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              Replacing a car battery yourself is one of the easiest DIY vehicle maintenance jobs. It typically takes between 15 and 30 minutes, requires only basic hand tools, and can save you between £30 and £80 in garage fitting fees.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Tools &amp; Equipment Required</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>10mm combination spanner or 10mm socket wrench (standard for UK battery clamps)</li>
              <li>13mm socket with extension bar (standard for bottom hold-down clamp bolt)</li>
              <li>Safety glasses and protective gloves</li>
              <li>Wire terminal brush or sandpaper (to clean terminal contacts)</li>
              <li>Petroleum jelly or terminal grease (to prevent future corrosion)</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl not-prose my-6">
              <h4 className="font-bold text-red-950 text-base">⚠️ Critical Safety Warning: Terminal Order</h4>
              <p className="text-red-900 text-sm mt-1">
                <strong>Disconnect NEGATIVE (-) FIRST. Reconnect NEGATIVE (-) LAST.</strong>
                <br />
                If you try to remove the positive terminal first while the negative is still grounded, touching any bare metal engine part with your wrench will cause an explosive electrical short circuit that can melt tools and explode the battery casing.
              </p>
            </div>

            <h2 className="text-2xl font-bold font-heading text-gray-950 pt-4">Step-by-Step Instructions</h2>
            
            <div className="space-y-6 not-prose">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 1: Preparation &amp; Ignition Off</span>
                <p className="text-sm text-gray-700">
                  Park your vehicle on flat ground with the handbrake firmly applied. Switch off the engine, headlights, radio, and all interior electrics. Remove the key from the ignition (in keyless cars, keep the fob at least 5 metres away) and wait 5 minutes for vehicle electronic control units (ECUs) to enter sleep mode.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 2: Disconnect the Negative (-) Terminal</span>
                <p className="text-sm text-gray-700">
                  Locate the negative terminal (black cable, marked with a &ldquo;-&rdquo; sign). Use your 10mm spanner to loosen the nut. Gently twist and wiggle the clamp off the terminal post. Tuck the cable securely to the side away from the battery.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 3: Disconnect the Positive (+) Terminal</span>
                <p className="text-sm text-gray-700">
                  Flip open the red plastic protective cover on the positive terminal (marked with a &ldquo;+&rdquo; sign). Loosen the clamp nut and lift the cable away from the battery.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 4: Remove the Hold-Down Clamp</span>
                <p className="text-sm text-gray-700">
                  At the bottom edge of the battery tray, locate the metal bracket clamping the B13 base flange. Use your 13mm socket with an extension bar to unscrew the retaining bolt, taking care not to drop the bolt down the engine bay.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 5: Lift Out Old Battery &amp; Inspect Tray</span>
                <p className="text-sm text-gray-700">
                  Carefully lift the old battery out (be prepared: car batteries weigh between 15kg and 25kg). Inspect the battery tray for dirt or acid residue and wipe it clean.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 6: Install New Battery &amp; Connect Positive (+) First</span>
                <p className="text-sm text-gray-700">
                  Lower the new battery into the tray ensuring positive and negative posts face the correct orientation. Re-fit and torque down the bottom hold-down clamp. Connect the POSITIVE terminal first and tighten firmly.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-primary-600 text-sm block mb-1">Step 7: Connect Negative (-) Terminal Last</span>
                <p className="text-sm text-gray-700">
                  Attach the negative terminal clamp (a tiny spark when contacting is completely normal). Tighten the clamp until it cannot be twisted by hand. Apply a light dab of terminal grease.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          </div>

          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-heading mb-2">Need to Find the Right Battery First?</h3>
            <p className="text-gray-300 text-sm mb-6">Enter your UK registration to find exact dimensions and terminal polarity.</p>
            <Link
              href="/"
              className="inline-block bg-[#FFD200] text-black font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#ffdb33] transition-colors shadow-md"
            >
              Search by Number Plate &rarr;
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
