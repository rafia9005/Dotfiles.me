"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
			<div className="flex flex-col items-center gap-4">
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
					className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full"
				/>
				<p className="text-sm text-muted-foreground">Loading...</p>
			</div>
		</div>
	);
}
