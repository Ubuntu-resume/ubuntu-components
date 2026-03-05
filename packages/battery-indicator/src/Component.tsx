import fetchBatteryPercent from "./utils/fetchBatteryPercent";
import { BatteryIcon } from "./utils/BatteryIcons";

export default function Battery(props: {
  percent?: number;
  isChargingCurrent?: boolean;
  style?: React.CSSProperties;
}) {
  const { percent, isChargingCurrent, style } = props;

  // Call the hook unconditionally to respect the Rules of Hooks
  const batteryStats = fetchBatteryPercent();
  const isManual = typeof percent === "number";
  const finalPercentage = isManual ? Math.round(percent) : Math.round(batteryStats.percentage * 100);
  const finalCharging = isManual ? (isChargingCurrent ?? false) : batteryStats.isCharging;

  return <div style={{
    display: "flex", alignItems: "center", gap: `${style?.gap ?? ".1rem"}`, fontSize: `${style?.fontSize ?? "0.7rem"}`
  }}>
    <BatteryIcon pct={finalPercentage} charging={finalCharging} />
    <text>{finalPercentage}%</text>
  </div>
}
