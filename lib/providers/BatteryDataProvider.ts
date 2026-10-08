import { APIResponse, Vehicle, VehicleBatteryResult, BatteryGroupInfo } from '@/types'
import { batteryGroups, getBatteryGroupBySlug } from '@/data/battery-groups'

export interface BatteryDataProviderInterface {
  getBatteryForVehicle(vehicle: Vehicle): Promise<APIResponse<VehicleBatteryResult>>
  getBatteryGroup(groupSize: string): Promise<APIResponse<BatteryGroupInfo>>
  getAllBatteryGroups(): Promise<BatteryGroupInfo[]>
  searchBatteries(query: string): Promise<BatteryGroupInfo[]>
}

class StaticBatteryDataProvider implements BatteryDataProviderInterface {
  async getBatteryForVehicle(vehicle: Vehicle): Promise<APIResponse<VehicleBatteryResult>> {
    return {
      success: true,
      data: {
        vehicle,
        battery: {
          groupSize: 'H6',
          technology: 'AGM',
          voltage: 12,
          cca: 760,
          length: 278,
          width: 175,
          height: 190,
          terminalLayout: 'Standard',
          startStopCompatible: true
        },
        isDemo: true
      }
    }
  }

  async getBatteryGroup(groupSize: string): Promise<APIResponse<BatteryGroupInfo>> {
    const group = batteryGroups.find(g => g.groupSize.toLowerCase() === groupSize.toLowerCase()) || getBatteryGroupBySlug(groupSize.toLowerCase())
    if (!group) {
      return { success: false, error: { code: 'NOT_FOUND', message: 'Battery group not found' } }
    }
    return { success: true, data: group }
  }

  async getAllBatteryGroups(): Promise<BatteryGroupInfo[]> {
    return batteryGroups
  }

  async searchBatteries(query: string): Promise<BatteryGroupInfo[]> {
    const lowerQuery = query.toLowerCase()
    return batteryGroups.filter(g => g.groupSize.toLowerCase().includes(lowerQuery) || g.slug.includes(lowerQuery) || g.alternateNames?.some(n => n.toLowerCase().includes(lowerQuery)))
  }
}

export function getBatteryDataProvider(): BatteryDataProviderInterface {
  return new StaticBatteryDataProvider()
}
