import { useEffect, useState } from "react";

type Battery = {
    percentage: number;
    isCharging: boolean;
}

export default function fetchBatteryPercent(): Battery {
    let [batteryStats, setBatteryStats] = useState<Battery>({
        percentage: 1,
        isCharging: false,
    })
    useEffect(() => {
        let battery: any = null;
        let updateBattery: any = null;

        const initBattery = async () => {
            let nav: any = navigator;
            if (typeof nav === "undefined" || !nav || !nav.getBattery) {
                setBatteryStats({
                    percentage: 1,
                    isCharging: false,
                });
                return;
            }
            battery = await nav.getBattery();
            updateBattery = () => {
                setBatteryStats({
                    percentage: battery.level ?? 1,
                    isCharging: !!battery.charging,
                });
            }
            updateBattery();
            battery.addEventListener("levelchange", updateBattery);
            battery.addEventListener("chargingchange", updateBattery);
        };

        initBattery();

        return () => {
            if (battery && updateBattery) {
                battery.removeEventListener("levelchange", updateBattery);
                battery.removeEventListener("chargingchange", updateBattery);
            }
        }
    }, []);
    return batteryStats;
}