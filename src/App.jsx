import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const launchDate = new Date('2025-09-19T00:00:00').getTime();
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = launchDate - now;
			setCountdown({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000)
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.3 }
		}
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	return (
		<div className="coming-soon-container">
			<div className="pixel-grid-overlay"></div>

			<motion.div
				className="centered-content"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.h1 className="company-name" variants={itemVariants}>
					OnyxTech
				</motion.h1>

				<motion.div className="tagline-container" variants={itemVariants}>
					<h2 className="tagline">Your Pixel-Perfect Kaizen</h2>
					<p className="subtitle">Crafting innovative experiences for Android, iOS and the web</p>


					<div className="leadership-container">
						<div className="leader">
							<span className="leader-name">Aarushi J</span>
							<span className="leader-title">( CEO )</span>
						</div>
						<div className="divider"></div>
						<div className="leader">
							<span className="leader-name">Homee J</span>
							<span className="leader-title">( CTO )</span>
						</div>
					</div>
				</motion.div>

				<motion.div className="platforms-container" variants={itemVariants}>
					<div className="platform-card android">
						<div className="platform-icon">
							<svg viewBox="0 0 24 24">
								<path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.3-.15-.68-.04-.85.26l-1.85 3.2c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.71c-.16-.3-.54-.41-.85-.26-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
							</svg>
						</div>
						<span className="platform-name">Android</span>
					</div>

					<div className="platform-card ios">
						<div className="platform-icon">
							<svg viewBox="0 0 24 24">
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
							</svg>
						</div>
						<span className="platform-name">iOS</span>
					</div>

					<div className="platform-card web">
						<div className="platform-icon">
							<svg viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
							</svg>
						</div>
						<span className="platform-name">Web</span>
					</div>
				</motion.div>

				<motion.div className="countdown-container" variants={itemVariants}>
					{Object.entries(countdown).map(([unit, value]) => (
						<div key={unit} className="countdown-box">
							<span className="countdown-value">{value}</span>
							<span className="countdown-label">
								{unit.charAt(0).toUpperCase() + unit.slice(1)}
							</span>
						</div>
					))}
				</motion.div>

				<motion.form className="subscribe-form" variants={itemVariants}>
					<input
						type="email"
						placeholder="Enter your email"
						className="email-input"
						required
					/>
					<motion.button
						type="submit"
						className="notify-button"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						Notify Me
					</motion.button>
				</motion.form>

				<motion.footer className="footer" variants={itemVariants}>
					<div className="social-links">
						{['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
							<a
								key={social}
								href="#"
								className="social-icon"
								aria-label={social}
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									{social === 'Twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
									{social === 'LinkedIn' && (
										<>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
											<rect x="2" y="9" width="4" height="12" />
											<circle cx="4" cy="4" r="2" />
										</>
									)}
									{social === 'GitHub' && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />}
								</svg>
							</a>
						))}
					</div>
					<p className="copyright">© {new Date().getFullYear()} OnyxTech. All rights reserved.</p>
					<p className="made-with-love">Made with <span className="heart">❤</span> by Homee J</p>
				</motion.footer>
			</motion.div>
		</div>
	);
}

export default App;