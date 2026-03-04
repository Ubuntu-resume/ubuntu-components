# @ubuntu-web/live-battery-indicator

A React component for displaying a battery indicator icon with a percentage and charging status. It can **automatically fetch device battery status using the native browser API**, or accept manual override props.

![alt text](https://raw.githubusercontent.com/Ubuntu-resume/ubuntu-components/main/packages/battery-indicator/assets/image.png) ![alt text](https://raw.githubusercontent.com/Ubuntu-resume/ubuntu-components/main/packages/battery-indicator/assets/image-1.png) ![alt text](https://raw.githubusercontent.com/Ubuntu-resume/ubuntu-components/main/packages/battery-indicator/assets/image-2.png)


## Installation

Install via your preferred package manager:

```bash
npm install @ubuntu-web/battery-indicator
```
```bash
yarn add @ubuntu-web/battery-indicator
```
```bash
pnpm add @ubuntu-web/battery-indicator
```

**Note:** This package requires `react` (v18+) and `react-icons` as peer dependencies.

## Usage

Import the `Battery` component into your React application to start using it.

### Automatic Mode

By default, if you don't provide the `percent` prop, the component will attempt to use the browser's native `navigator.getBattery()` API. It automatically updates the UI whenever the device's battery level or charging status changes!

```tsx
import { Battery } from "@ubuntu-web/battery-indicator";

export default function App() {
  return (
    <div>
      <Battery />
    </div>
  )
}
```

### Manual Mode

You can manually control the displayed battery value and charging status by passing the `percent` prop. This is useful if you need to mock the UI, or if you're fetching battery data from another source.

```tsx
import { Battery } from "@ubuntu-web/battery-indicator";

export default function App() {
  return (
    <div>
      <Battery 
        percent={50} 
        isChargingCurrent={false} 
        style={{ gap: "10rem", fontSize: "1rem" }} 
      />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `percent` | `number` | `undefined` | The battery percentage (0 to 100). Passing this activates manual mode. |
| `isChargingCurrent` | `boolean` | `false` | Whether to display the charging lightning icon symbol. (Only takes effect in manual mode). |
| `style` | `React.CSSProperties` | `undefined` | Inline styling for the wrapper element. `gap` defaults to `0.1rem` and `fontSize` defaults to `0.7rem`. |

## License

MIT
