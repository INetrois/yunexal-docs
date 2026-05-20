import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "class-variance-authority";

const pillVariants = cva(
	"mb-4 flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border px-[11px] py-[4px] backdrop-blur-xl",
	{
		variants: {
			variant: {
				default: "border-brand/30 bg-brand/10 text-brand",
				success: "border-violet-400/30 bg-violet-400/10 text-violet-300",
				warning: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
				error: "border-purple-400/30 bg-purple-400/10 text-purple-300"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
);

const PyroPill = ({ 
	children, 
	leftChild,
	variant,
	className 
}: { 
	children: React.ReactNode; 
	leftChild?: React.ReactNode;
	className?: string;
} & VariantProps<typeof pillVariants>) => {
	return (
		<div data-pyro-ui="pill" className={cx(pillVariants({ variant, className }))}>
			{leftChild}
			<div className="font-medium text-sm">{children}</div>
		</div>
	);
};

export default PyroPill;
