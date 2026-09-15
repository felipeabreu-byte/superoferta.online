"use client";

import React, { AnchorHTMLAttributes, Suspense } from "react";
import { useUtmUrl } from "@/hooks/useUtmUrl";
import { Button, ButtonProps } from "@/components/ui/Button";

interface CheckoutButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  buttonProps?: ButtonProps;
  children: React.ReactNode;
}

function CheckoutLink({ href, buttonProps, children, className, ...props }: CheckoutButtonProps) {
  const urlWithUtm = useUtmUrl(href);

  return (
    <a href={urlWithUtm} className={className} {...props}>
      <Button {...buttonProps}>{children}</Button>
    </a>
  );
}

export function CheckoutButton(props: CheckoutButtonProps) {
  const { href, className, buttonProps, children, ...rest } = props;
  return (
    <Suspense fallback={
      <a href={href} className={className} {...rest}>
        <Button {...buttonProps}>{children}</Button>
      </a>
    }>
      <CheckoutLink {...props} />
    </Suspense>
  );
}
