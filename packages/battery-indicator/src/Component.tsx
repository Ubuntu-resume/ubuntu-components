import fetchBatteryPercent from "./utils/fetchBatteryPercent";
import { BatteryIcon } from "./utils/BatteryIcons";

export default function Battery(props: {
  percent?: number;
  isChargingCurrent?: boolean;
}) {
  const { percent, isChargingCurrent } = props;

  // Call the hook unconditionally to respect the Rules of Hooks
  const batteryStats = fetchBatteryPercent();

  const isManual = typeof percent === "number";
  const finalPercentage = isManual ? Math.round(percent) : batteryStats.percentage;
  const finalCharging = isManual ? (isChargingCurrent ?? false) : batteryStats.isCharging;

  return <BatteryIcon pct={finalPercentage} charging={finalCharging} />;
}
