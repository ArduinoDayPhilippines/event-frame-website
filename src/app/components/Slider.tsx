"use client";

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1
}: SliderProps) {
  return (
    <div className="mb-4">
      <label className="block text-black text-sm font-semibold mb-2">
        {label}: {value}{label === 'Rotate' ? '°' : '%'}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer slider"
        style={{
          accentColor: '#FFC107'
        }}
      />
    </div>
  );
}
