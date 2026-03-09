"use client";
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { Move, Check } from 'lucide-react';

interface FramePreviewProps {
	frameUrl?: string;
	frameColor?: string;
	userImage?: string;
	userScale?: number;
	userRotate?: number;
	userImgPos?: { x: number; y: number };
	onImageDrag?: (pos: { x: number; y: number }) => void;
}

export default function FramePreview({
	frameUrl,
	frameColor = '#4A90E2',
	userImage,
	userScale = 100,
	userRotate = 0,
	userImgPos = { x: 0, y: 0 },
	onImageDrag
}: FramePreviewProps) {
	const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);
	const [moveMode, setMoveMode] = useState(false);

	useEffect(() => {
		if (!userImage) {
			setNaturalSize(null);
			return;
		}

		let isMounted = true;
		const img = new window.Image();
		img.onload = () => {
			if (!isMounted) return;
			setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
		};
		img.src = userImage;

		return () => {
			isMounted = false;
		};
	}, [userImage]);

	const userImageDisplaySize = useMemo(() => {
		if (!naturalSize || naturalSize.width <= 0 || naturalSize.height <= 0) {
			return { width: 520, height: 520 };
		}

		const maxSide = 520;
		const ratio = maxSide / Math.max(naturalSize.width, naturalSize.height);

		return {
			width: Math.max(1, Math.round(naturalSize.width * ratio)),
			height: Math.max(1, Math.round(naturalSize.height * ratio))
		};
	}, [naturalSize]);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
		if (!onImageDrag || !userImage) return;
		
		// Check if it's a touch event and move mode is disabled
		const isTouchEvent = 'touches' in e;
		if (isTouchEvent && !moveMode) return;
		
		e.preventDefault();
		
		// Handle both mouse and touch events
		const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
		const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
		
		const startX = clientX - userImgPos.x;
		const startY = clientY - userImgPos.y;

		const handleMouseMove = (moveEvent: MouseEvent) => {
			const newX = moveEvent.clientX - startX;
			const newY = moveEvent.clientY - startY;
			onImageDrag({ x: newX, y: newY });
		};
		
		const handleTouchMove = (moveEvent: TouchEvent) => {
			moveEvent.preventDefault();
			const newX = moveEvent.touches[0].clientX - startX;
			const newY = moveEvent.touches[0].clientY - startY;
			onImageDrag({ x: newX, y: newY });
		};

		const handleEnd = () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleEnd);
			document.removeEventListener('touchmove', handleTouchMove);
			document.removeEventListener('touchend', handleEnd);
			document.removeEventListener('touchcancel', handleEnd);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleEnd);
		document.addEventListener('touchmove', handleTouchMove, { passive: false });
		document.addEventListener('touchend', handleEnd);
		document.addEventListener('touchcancel', handleEnd);
	};
	return (
		<div className="flex flex-col items-center w-full gap-4">
			<div 
				id="frame-preview"
				className="relative w-[90vw] max-w-[500px] aspect-square md:max-w-[620px] shadow-2xl overflow-hidden"
				style={{
					backgroundColor: frameColor,
					touchAction: 'none'
				}}
			>
				{/* Move mode overlay indicator for mobile */}
				{moveMode && userImage && (
					<div className="absolute inset-0 z-20 pointer-events-none border-4 border-yellow-400 bg-yellow-400/5">
						<div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
							<Move className="w-4 h-4" />
							Move Mode Active
						</div>
					</div>
				)}
				
				<div className="absolute inset-0 flex items-center justify-center bg-white" style={{ touchAction: 'none' }}>
					   {userImage ? (
						   <div
							   data-image-wrapper="true"
							   className={`absolute select-none ${moveMode ? 'cursor-move' : 'cursor-default md:cursor-move'}`}
							   style={{
								   transform: `scale(${userScale / 100}) rotate(${userRotate}deg)`,
								   transformOrigin: 'center',
								   left: `${userImgPos.x}px`,
								   top: `${userImgPos.y}px`,
								   touchAction: 'none',
								   userSelect: 'none',
								   WebkitUserSelect: 'none',
								   width: `${userImageDisplaySize.width}px`,
								   height: `${userImageDisplaySize.height}px`
							   }}
							   onMouseDown={handleMouseDown}
							   onTouchStart={handleMouseDown}
						   >
							   <Image
								   src={userImage}
								   alt="User uploaded"
								   width={userImageDisplaySize.width}
								   height={userImageDisplaySize.height}
								   draggable={false}
								   unoptimized={userImage.startsWith('data:')}
								   priority
								   style={{ pointerEvents: 'none' }}
							   />
						   </div>
					   ) : (
						<div className="text-center text-gray-400">
							<div className="text-6xl mb-2">📷</div>
							<p className="text-sm">User photo will appear here</p>
						</div>
					)}
				</div>
				{frameUrl && (
					<div className="absolute inset-0 pointer-events-none z-10">
						<Image
							src={frameUrl}
							alt="Frame overlay"
							fill
							className="object-cover"
							priority
							sizes="(max-width: 680px) 100vw, 680px"
						/>
					</div>
				)}
			</div>
			
			{/* Mobile move mode toggle button */}
			{userImage && (
				<button
					onClick={() => setMoveMode(!moveMode)}
					className={`md:hidden px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg flex items-center gap-2 ${
						moveMode 
							? 'bg-yellow-400 text-black hover:bg-yellow-500' 
							: 'bg-blue-500 text-white hover:bg-blue-600'
					}`}
				>
					{moveMode ? (
						<>
							<Check className="w-5 h-5" />
							Done Moving
						</>
					) : (
						<>
							<Move className="w-5 h-5" />
							Move Photo
						</>
					)}
				</button>
			)}
		</div>
	);
}
