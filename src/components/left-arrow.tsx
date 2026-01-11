import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft04FreeIcons } from "@hugeicons/core-free-icons";

export default function ArrowLeftIcon() {
	return (
		<a href="/" className="flex items-center">
			<HugeiconsIcon icon={ArrowLeft04FreeIcons} size={24} strokeWidth={1.5} />
			to Home
		</a>
	);
}
