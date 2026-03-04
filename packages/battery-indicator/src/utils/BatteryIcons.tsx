import { MdBatteryChargingFull, MdBattery0Bar, MdBattery1Bar, MdBattery2Bar, MdBattery3Bar, MdBattery4Bar, MdBattery5Bar, MdBattery6Bar } from 'react-icons/md'

export function BatteryIcon({ pct, charging }: { pct: number, charging: boolean }) {
  if (charging) return <MdBatteryChargingFull size={18} />
  if (pct <= 5) return <MdBattery0Bar size={18} />
  if (pct <= 15) return <MdBattery1Bar size={18} />
  if (pct <= 30) return <MdBattery2Bar size={18} />
  if (pct <= 45) return <MdBattery3Bar size={18} />
  if (pct <= 60) return <MdBattery4Bar size={18} />
  if (pct <= 80) return <MdBattery5Bar size={18} />
  return <MdBattery6Bar size={18} />
}