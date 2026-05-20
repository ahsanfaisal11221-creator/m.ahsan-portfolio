import { animate } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  active: boolean;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  duration = 1.6,
  active,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: Props) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [active, duration, value]);

  const text =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
