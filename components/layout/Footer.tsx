import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-black flex items-center justify-center font-black text-lg">
                ⚡
              </span>
              <span className="font-extrabold text-xl text-white font-heading">
                CarBattery<span className="text-primary-500">Finder</span>
              </span>
              <span className="bg-[#003399] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                UK
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              The United Kingdom&apos;s trusted independent automotive battery finder. We cross-reference official DVLA vehicle records with OEM fitment databases to guarantee the exact battery size and Stop-Start technology for your car.
            </p>
            <div className="pt-2 text-xs text-amber-400/90 font-medium">
              🇬🇧 Designed specifically for UK motorists &amp; MOT standards.
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Popular UK Battery Codes
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/battery-size/096" className="hover:text-amber-400 transition-colors">Type 096 (LN3 / Golf, Focus, A3)</Link></li>
              <li><Link href="/battery-size/096agm" className="hover:text-amber-400 transition-colors">Type 096 AGM (Stop-Start Standard)</Link></li>
              <li><Link href="/battery-size/027" className="hover:text-amber-400 transition-colors">Type 027 (LN2 / Fiesta, Polo, Astra)</Link></li>
              <li><Link href="/battery-size/027agm" className="hover:text-amber-400 transition-colors">Type 027 AGM (Hatchback Stop-Start)</Link></li>
              <li><Link href="/battery-size/063" className="hover:text-amber-400 transition-colors">Type 063 (Small Petrol / Corsa, 500)</Link></li>
              <li><Link href="/battery-size/075" className="hover:text-amber-400 transition-colors">Type 075 (Low Profile Ford &amp; Vauxhall)</Link></li>
              <li><Link href="/battery-size/019agm" className="hover:text-amber-400 transition-colors">Type 019 AGM (BMW, Audi, Range Rover)</Link></li>
              <li><Link href="/battery-size/054" className="hover:text-amber-400 transition-colors">Type 054 (Toyota Hybrid 12V Aux)</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Guides &amp; Technical Help
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/guides/agm-vs-efb-batteries" className="hover:text-amber-400 transition-colors">AGM vs EFB: Stop-Start Explained</Link></li>
              <li><Link href="/guides/how-to-change-car-battery-uk" className="hover:text-amber-400 transition-colors">How to Change a Car Battery (DIY Guide)</Link></li>
              <li><Link href="/guides/stop-start-battery-coding-explained" className="hover:text-amber-400 transition-colors">Why Stop-Start Batteries Require BMS Coding</Link></li>
              <li><Link href="/guides/car-battery-recycling-uk" className="hover:text-amber-400 transition-colors">UK Battery Recycling &amp; Scrap Value</Link></li>
              <li><Link href="/battery-health-checker" className="hover:text-amber-400 transition-colors">Interactive Battery Health Diagnostic</Link></li>
              <li><Link href="/car-battery" className="hover:text-amber-400 transition-colors">Complete Buyer&apos;s Guide &amp; Specs</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              UK Vehicle Makes
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/batteries/ford" className="hover:text-amber-400 transition-colors">Ford (Fiesta, Focus, Puma, Kuga)</Link></li>
              <li><Link href="/batteries/volkswagen" className="hover:text-amber-400 transition-colors">Volkswagen (Golf, Polo, Tiguan)</Link></li>
              <li><Link href="/batteries/bmw" className="hover:text-amber-400 transition-colors">BMW (1 Series, 3 Series, 5 Series)</Link></li>
              <li><Link href="/batteries/vauxhall" className="hover:text-amber-400 transition-colors">Vauxhall (Corsa, Astra, Mokka)</Link></li>
              <li><Link href="/batteries/nissan" className="hover:text-amber-400 transition-colors">Nissan (Qashqai, Juke, Micra)</Link></li>
              <li><Link href="/batteries/audi" className="hover:text-amber-400 transition-colors">Audi (A1, A3, A4, Q3, Q5)</Link></li>
              <li><Link href="/batteries/toyota" className="hover:text-amber-400 transition-colors">Toyota (Yaris, Corolla Hybrid)</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} UK Car Battery Finder. All rights reserved.
            </p>
            <p className="text-center md:text-right max-w-xl">
              <strong>Affiliate Disclosure:</strong> When you purchase batteries via links to retail partners (including Halfords, Tayna Batteries, Euro Car Parts, and Amazon UK), we may earn an affiliate commission. Pricing and stock are checked regularly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
