import type { Meta } from "@storybook/react";
import React from "react";

import {
  Input,
  Label,
  NewButton,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@sparkle/components";

const meta = {
  title: "NewLayouts/Sheet",
} satisfies Meta;

export default meta;

export function Demo() {
  return (
    <div className="s-flex s-flex-col s-gap-6">
      <SheetDemo />
    </div>
  );
}

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetDemo = (typeof SHEET_SIDES)[number];

export function SheetDemo() {
  return (
    <div className="s-grid s-grid-cols-2 s-gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <NewButton variant="outline" label={side} />
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="s-grid s-gap-4 s-py-4">
              <div className="s-grid s-grid-cols-4 s-items-center s-gap-4">
                <Label htmlFor="name" className="s-text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value="Pedro Duarte"
                  className="s-col-span-3"
                />
              </div>
              <div className="s-grid s-grid-cols-4 s-items-center s-gap-4">
                <Label htmlFor="username" className="s-text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value="@peduarte"
                  className="s-col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <NewButton type="submit" label="Save changes" />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
