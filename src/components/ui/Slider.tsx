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
				 <label className="block text-gray-700 text-sm font-medium mb-2">
						 {label}: <span className="font-mono text-gray-900">{value}{label === 'Rotate' ? '°' : '%'}</span>
				 </label>
				 <input
						 type="range"
						 min={min}
						 max={max}
						 step={step}
						 value={value}
						 onChange={(e) => onChange(Number(e.target.value))}
						 className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer focus:outline-none slider"
						 style={{ accentColor: '#333' }}
				 />
				 <style jsx>{`
					 input[type='range'].slider::-webkit-slider-thumb {
						 appearance: none;
						 width: 16px;
						 height: 16px;
						 background: #fff;
						 border: 2px solid #333;
						 border-radius: 50%;
					 }
					 input[type='range'].slider::-moz-range-thumb {
						 width: 16px;
						 height: 16px;
						 background: #fff;
						 border: 2px solid #333;
						 border-radius: 50%;
					 }
					 input[type='range'].slider::-ms-thumb {
						 width: 16px;
						 height: 16px;
						 background: #fff;
						 border: 2px solid #333;
						 border-radius: 50%;
					 }
					 input[type='range'].slider::-webkit-slider-thumb:active {
						 background: #eee;
					 }
					 input[type='range'].slider::-moz-range-thumb:active {
						 background: #eee;
					 }
					 input[type='range'].slider::-ms-thumb:active {
						 background: #eee;
					 }
				 `}</style>
		 </div>
	);
}
