import { NextRequest, NextResponse } from 'next/server'
import { vehicleLookupService } from '@/lib/providers/VehicleLookupProvider'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { registration } = body

    if (!registration || typeof registration !== 'string') {
      return NextResponse.json(
        { success: false, error: { code: 'BAD_REQUEST', message: 'Registration number is required' } },
        { status: 400 }
      )
    }

    const result = await vehicleLookupService.lookupRegistration(registration)

    if (!result.success) {
      return NextResponse.json(result, { status: 400 })
    }

    return NextResponse.json(result, { status: 200 })
  } catch (error: any) {
    console.error('API lookup error:', error)
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'SERVER_ERROR',
          message: error.message || 'An error occurred during vehicle lookup.'
        }
      },
      { status: 500 }
    )
  }
}
