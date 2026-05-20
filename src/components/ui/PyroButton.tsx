import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import LoadingIcon from "@/components/ui/LoadingIcon";
import { PyroLink } from "@/components/ui/PyroLink";

const button = cva(
	[
		"relative",
		"flex",
		"items-center",
		"justify-center",
		"rounded-full",
		"font-bold",
		"gap-4",
		"select-none",
		"transition-all",
		"outline-none",
		"border-2",
		"border-transparent",
		"ring-0",
		"focus-visible:ring-2",
		"focus-visible:ring-offset-2",
		"focus-visible:ring-brand",
		"focus-visible:ring-offset-[black]",
	],
	{
		variants: {
			variant: {
				primary: ["bg-brand", "text-white", "hover:bg-brand/80"],
				secondary: ["bg-brand/15", "text-white", "hover:bg-brand/25", "border-brand/30", "hover:border-brand/40"],
				tertiary: ["bg-brand/20", "text-white", "hover:bg-brand/30", "border-brand/30", "hover:border-brand/40"],
				quaternary: ["bg-[#120d1f]", "text-white", "hover:bg-[#1a1330]", "border-[#332356]", "hover:border-[#4b30a3]"],
			},
			size: {
				ghost: [],
				small: ["py-1", "px-4", "text-sm"],
				medium: ["py-2", "px-8", "text-base"],
				large: ["py-3", "px-10", "text-lg"],
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	}
);

export const PyroButton = ({
	children,
	leftChildren,
	rightChildren,
	pendingChildren,
	href,
	external = false,
	isArrow,
	isPending,
	className = "",
	...props
}: {
	children: React.ReactNode;
	leftChildren?: React.ReactNode;
	rightChildren?: React.ReactNode;
	pendingChildren?: React.ReactNode;
	href?: string;
	external?: boolean;
	isArrow?: boolean;
	isPending?: boolean;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>) => {
	const buttonContent = isPending ? (
		<>
			<div className="p-0.5">
				<LoadingIcon className="text-white" />
			</div>
			{pendingChildren}
		</>
	) : (
		<>
			{leftChildren}
			{children}
			{rightChildren}
			{isArrow && <ArrowRightIcon className="h-4 w-4" />}
		</>
	);

	if (href) {
		return (
			<PyroLink href={href} external={external} className={twMerge(cx(button(props), className))} {...props}>
				{buttonContent}
			</PyroLink>
		);
	}

	return (
		<button
			className={clsx(twMerge(cx(button(props), className)), {
				"pointer-events-none opacity-40": isPending,
			})}
			disabled={isPending}
			{...props}
		>
			{buttonContent}
		</button>
	);
};
