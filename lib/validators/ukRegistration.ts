export function validateUKRegistration(registration: string): { valid: boolean; normalized?: string; error?: string } {
  if (!registration) {
    return { valid: false, error: 'Registration is required' }
  }

  const cleaned = registration.toUpperCase().replace(/\s+/g, '')

  // Current format: AB12 CDE
  const currentRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{3}$/
  // Prefix format: A123 BCD
  const prefixRegex = /^[A-Z][0-9]{1,3}[A-Z]{3}$/
  // Suffix format: ABC 123D
  const suffixRegex = /^[A-Z]{3}[0-9]{1,3}[A-Z]$/
  // NI format: AAZ 1234
  const niRegex = /^[A-Z]{1,3}[0-9]{1,4}$/

  if (currentRegex.test(cleaned)) {
    return { valid: true, normalized: `${cleaned.slice(0, 4)} ${cleaned.slice(4)}` }
  }
  
  if (prefixRegex.test(cleaned)) {
    const match = cleaned.match(/^([A-Z][0-9]{1,3})([A-Z]{3})$/)
    return { valid: true, normalized: match ? `${match[1]} ${match[2]}` : cleaned }
  }

  if (suffixRegex.test(cleaned)) {
    const match = cleaned.match(/^([A-Z]{3})([0-9]{1,3}[A-Z])$/)
    return { valid: true, normalized: match ? `${match[1]} ${match[2]}` : cleaned }
  }

  if (niRegex.test(cleaned)) {
    const match = cleaned.match(/^([A-Z]{1,3})([0-9]{1,4})$/)
    return { valid: true, normalized: match ? `${match[1]} ${match[2]}` : cleaned }
  }

  return { valid: false, error: 'Invalid UK registration format' }
}
