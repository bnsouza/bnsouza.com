import React, {forwardRef} from "react";
import {Link as LinkI18n} from "@/i18n/routing";
import * as Headless from "@headlessui/react";

export const Link = forwardRef(function Link(
  props: {href: "/" | "/about" | "/work" | "/contact"} & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <LinkI18n {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
