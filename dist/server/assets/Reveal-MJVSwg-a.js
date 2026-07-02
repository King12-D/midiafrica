import { jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/site/Reveal.tsx
function Reveal({ children, delay = 0, y = 24, className, as: _as, ...rest }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			y,
			opacity: 0
		},
		whileInView: {
			y: 0,
			opacity: 1
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.7,
				0,
				.2,
				1
			]
		},
		className,
		...rest,
		children
	});
}
//#endregion
export { Reveal as t };
