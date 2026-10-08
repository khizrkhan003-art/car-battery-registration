import { validateUKRegistration } from '../lib/validators/ukRegistration.js'
import { vehicleLookupService } from '../lib/providers/VehicleLookupProvider.js'

async function runTests() {
  console.log('=== RUNNING UK BATTERY FINDER TESTS ===')

  // 1. Validate UK Registration Formats
  const testPlates = [
    { input: 'ea18wxy', expected: true, normalized: 'EA18 WXY' },
    { input: 'FL15 GTY', expected: true, normalized: 'FL15 GTY' },
    { input: 'BV67KLO', expected: true, normalized: 'BV67 KLO' },
    { input: 'invalid12345', expected: false },
  ]

  for (const t of testPlates) {
    const res = validateUKRegistration(t.input)
    console.log(`Plate: ${t.input} -> valid: ${res.valid}, normalized: ${res.normalized}`)
    if (t.expected !== res.valid) {
      console.error(`FAIL: expected ${t.expected} but got ${res.valid}`)
    }
  }

  // 2. Test Lookup Service
  const lookup1 = await vehicleLookupService.lookupRegistration('EA18 WXY')
  console.log('\nLookup EA18 WXY result:', lookup1.data?.make, lookup1.data?.model, lookup1.data?.batteryGroup, 'StopStart:', lookup1.data?.hasStopStart)

  const lookup2 = await vehicleLookupService.lookupRegistration('FL15 GTY')
  console.log('Lookup FL15 GTY result:', lookup2.data?.make, lookup2.data?.model, lookup2.data?.batteryGroup)

  const lookup3 = await vehicleLookupService.lookupRegistration('BV67 KLO')
  console.log('Lookup BV67 KLO result:', lookup3.data?.make, lookup3.data?.model, lookup3.data?.batteryGroup)

  console.log('\n=== ALL TESTS COMPLETED ===')
}

runTests().catch(console.error)
