import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Icon } from "@sparkle/components/Icon";
import Spinner, { SpinnerProps } from "@sparkle/components/Spinner";
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@sparkle/components/Tooltip";
import { ChevronDownIcon } from "@sparkle/icons";
import { classNames } from "@sparkle/lib/utils";

export const BUTTON_VARIANTS = [
  "primary",
  "highlight",
  "warning",
  "outline",
  "secondary",
  "ghost",
] as const;
export type ButtonVariantType = (typeof BUTTON_VARIANTS)[number];

const variantButtonStyles: Record<ButtonVariantType, string> = {
  primary:
    "s-bg-primary-800 s-text-primary-50 hover:s-text-white hover:s-bg-primary-600 active:s-bg-primary-900 disabled:s-bg-primary-400",
  highlight:
    "s-bg-action-500 s-text-white hover:s-bg-action-400 active:s-bg-action-600 disabled:s-bg-action-300",
  warning:
    "s-bg-warning-500 s-text-white hover:s-bg-warning-400 active:s-bg-warning-600  disabled:s-bg-warning-300",
  outline:
    "s-border s-text-primary-950 s-border-border-dark s-bg-background hover:s-text-primary-900 hover:s-bg-primary-100 hover:s-border-primary-200 active:s-bg-primary-300 disabled:s-text-primary-400 disabled:s-border-structure-100",
  secondary:
    "s-border s-border-primary-200/0 s-bg-primary-200 s-text-primary-950 hover:s-text-primary-900 hover:s-bg-primary-100 hover:s-border-primary-200 active:s-bg-primary-200 disabled:s-text-primary-500",
  ghost:
    "s-border s-border-primary-200/0 s-text-primary-950 hover:s-bg-primary-100 hover:s-text-primary-900 active:s-bg-primary-200 hover:s-border-primary-200 disabled:s-text-primary-400",
};

const buttonVariants = cva(
  "s-inline-flex s-items-center s-justify-center s-whitespace-nowrap s-font-medium s-ring-offset-background s-transition-colors s-duration-200 focus-visible:s-outline-none focus-visible:s-ring-2 focus-visible:s-ring-ring focus-visible:s-ring-offset-2 disabled:s-pointer-events-none",
  {
    variants: {
      variant: variantButtonStyles,
      size: {
        xs: "s-h-7 s-px-2.5 s-rounded-lg s-text-xs s-gap-1.5",
        sm: "s-h-9 s-px-3 s-rounded-xl s-text-sm s-gap-2",
        md: "s-h-12 s-px-4 s-py-2 s-rounded-2xl s-text-base s-gap-2.5",
        icon: "s-h-10 s-w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

type SpinnerVariant = NonNullable<SpinnerProps["variant"]>;

const spinnerVariantsMap: Record<ButtonVariantType, SpinnerVariant> = {
  primary: "light",
  highlight: "light",
  warning: "light",
  outline: "dark",
  secondary: "dark",
  ghost: "dark",
};

const spinnerVariantsMapIsLoading: Record<ButtonVariantType, SpinnerVariant> = {
  primary: "light",
  highlight: "light",
  warning: "light",
  outline: "slate400",
  secondary: "slate400",
  ghost: "slate400",
};

interface ButtonProps extends MetaButtonProps {
  label?: string;
  icon?: React.ComponentType;
  isSelect?: boolean;
  isLoading?: boolean;
  isPulsing?: boolean;
  tooltip?: string; // Added tooltip prop
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      icon,
      isLoading = false,
      variant = "primary",
      tooltip,
      isSelect = false,
      isPulsing = false,
      ...props
    },
    ref
  ) => {
    const hasIcon = Boolean(icon);

    let spinnerVariant;

    if (isLoading) {
      spinnerVariant =
        spinnerVariantsMapIsLoading[
          variant as keyof typeof spinnerVariantsMapIsLoading
        ] || "slate400";
    } else {
      spinnerVariant =
        spinnerVariantsMap[variant as keyof typeof spinnerVariantsMap] ||
        "slate400";
    }
    const content = isLoading ? (
      <>
        <div className="-s-mx-0.5">
          <Spinner
            size={props.size as "xs" | "sm" | "md"}
            variant={spinnerVariant}
          />
        </div>
        {label}
        {isSelect && <Icon visual={ChevronDownIcon} size="xs" />}
      </>
    ) : (
      <>
        {hasIcon && (
          <Icon
            visual={icon}
            size={props.size as "xs" | "sm" | "md"}
            className="-s-mx-0.5"
          />
        )}
        {label}
        {isSelect && (
          <Icon size="xs" visual={ChevronDownIcon} className="-s-mr-1" />
        )}
      </>
    );

    const buttonElement = (
      <MetaButton
        ref={ref}
        variant={variant}
        disabled={isLoading || props.disabled}
        hasVisual={hasIcon || isLoading}
        {...props}
        className={isPulsing ? "s-animate-pulse" : ""}
        style={
          {
            "--pulse-color": "#93C5FD",
            "--duration": "1.5s",
          } as React.CSSProperties
        }
      >
        {content}
      </MetaButton>
    );

    return tooltip ? (
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger>{buttonElement}</TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    ) : (
      buttonElement
    );
  }
);

interface ButtonBarProps {
  children: React.ReactNode;
  className?: string;
}

export const NewButtonBar: React.FC<ButtonBarProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("s-flex s-flex-row s-gap-2", className || "")}>
      {children}
    </div>
  );
};

export interface MetaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hasVisual?: boolean;
}

const MetaButton = React.forwardRef<HTMLButtonElement, MetaButtonProps>(
  (
    { className, variant, size = "sm", asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={classNames(
          buttonVariants({ variant, size }),
          className || ""
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
MetaButton.displayName = "Button";

export { buttonVariants, MetaButton };
