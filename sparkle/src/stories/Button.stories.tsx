import type { Meta } from "@storybook/react";
import React from "react";

import { PlusIcon } from "@sparkle/icons";

import { Button } from "../index_with_tw_base";

const meta = {
  title: "Primitives/Button",
} satisfies Meta;

export default meta;

export const IconButtonExamples = () => (
  <div className="s-flex s-flex-col s-gap-4">
    <div className="s-flex s-items-center s-gap-4">
      <Button size="xs" icon={PlusIcon} isPulsing />
      <Button size="xs" variant="highlight" icon={PlusIcon} />
      <Button size="xs" variant="secondary" icon={PlusIcon} />
      <Button size="xs" variant="warning" icon={PlusIcon} />
      <Button size="xs" variant="outline" icon={PlusIcon} />
      <Button size="xs" variant="ghost" icon={PlusIcon} />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="sm" icon={PlusIcon} />
      <Button size="sm" variant="highlight" icon={PlusIcon} />
      <Button size="sm" variant="secondary" icon={PlusIcon} />
      <Button size="sm" variant="warning" icon={PlusIcon} />
      <Button size="sm" variant="outline" icon={PlusIcon} />
      <Button size="sm" variant="ghost" icon={PlusIcon} />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="md" icon={PlusIcon} />
      <Button size="md" variant="highlight" icon={PlusIcon} />
      <Button size="md" variant="secondary" icon={PlusIcon} />
      <Button size="md" variant="warning" icon={PlusIcon} />
      <Button size="md" variant="outline" icon={PlusIcon} />
      <Button size="md" variant="ghost" icon={PlusIcon} />
    </div>
  </div>
)
export const ButtonXSExamples = () => (
  <div className="s-flex s-flex-col s-gap-4">
    <div className="s-flex s-items-center s-gap-4">
      <Button size="xs" label="Button" />
      <Button size="xs" variant="highlight" label="Button" />
      <Button size="xs" variant="secondary" label="Button" />
      <Button size="xs" variant="warning" label="Button" />
      <Button size="xs" variant="outline" label="Button" />
      <Button size="xs" variant="ghost" label="Button" />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="xs" label="Button" isLoading />
      <Button size="xs" variant="highlight" label="Button" disabled />
      <Button size="xs" variant="secondary" label="Button" disabled />
      <Button size="xs" variant="warning" label="Button" disabled />
      <Button size="xs" variant="outline" label="Button" disabled />
      <Button size="xs" variant="ghost" label="Button" disabled />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="xs" label="Button" isLoading />
      <Button size="xs" variant="highlight" label="Button" isLoading />
      <Button size="xs" variant="secondary" label="Button" isLoading />
      <Button size="xs" variant="warning" label="Button" isLoading />
      <Button size="xs" variant="outline" label="Button" isLoading />
      <Button size="xs" variant="ghost" label="Button" isLoading />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="xs" icon={PlusIcon} label="Button" />
      <Button size="xs" variant="highlight" icon={PlusIcon} label="Button" />
      <Button size="xs" variant="secondary" icon={PlusIcon} label="Button" />
      <Button size="xs" variant="warning" icon={PlusIcon} label="Button" />
      <Button size="xs" variant="outline" icon={PlusIcon} label="Button" />
      <Button size="xs" variant="ghost" icon={PlusIcon} label="Button" />
    </div>
    </div>
)
export const ButtonSMExamples = () => (
  <div className="s-flex s-flex-col s-gap-4">
    <div className="s-flex s-items-center s-gap-4">
      <Button size="sm" label="Button" />
      <Button size="sm" variant="highlight" label="Button" />
      <Button size="sm" variant="warning" label="Button" />
      <Button size="sm" variant="outline" label="Button" />
      <Button size="sm" variant="ghost" label="Button" />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="sm" label="Button" isLoading />
      <Button size="sm" variant="highlight" label="Button" isLoading />
      <Button size="sm" variant="secondary" label="Button" isLoading />
      <Button size="sm" variant="warning" label="Button" isLoading />
      <Button size="sm" variant="outline" label="Button" isLoading />
      <Button size="sm" variant="ghost" label="Button" isLoading />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="sm" icon={PlusIcon} label="Button" />
      <Button size="sm" variant="highlight" icon={PlusIcon} label="Button" />
      <Button size="sm" variant="secondary" icon={PlusIcon} label="Button" />
      <Button size="sm" variant="warning" icon={PlusIcon} label="Button" />
      <Button size="sm" variant="outline" icon={PlusIcon} label="Button" />
      <Button size="sm" variant="ghost" icon={PlusIcon} label="Button" />
    </div>
  </div>
)
export const ButtonMDExamples = () => (
  <div className="s-flex s-flex-col s-gap-4">
    <div className="s-flex s-items-center s-gap-4">
      <Button size="md" label="Button" />
      <Button size="md" variant="highlight" label="Button" />
      <Button size="md" variant="warning" label="Button" />
      <Button size="md" variant="outline" label="Button" />
      <Button size="md" variant="ghost" label="Button" />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="md" label="Button" isLoading />
      <Button size="md" variant="highlight" label="Button" isLoading />
      <Button size="md" variant="secondary" label="Button" isLoading />
      <Button size="md" variant="warning" label="Button" isLoading />
      <Button size="md" variant="outline" label="Button" isLoading />
      <Button size="md" variant="ghost" label="Button" isLoading />
    </div>
    <div className="s-flex s-items-center s-gap-4">
      <Button size="md" icon={PlusIcon} label="Button" />
      <Button size="md" variant="highlight" icon={PlusIcon} label="Button" />
      <Button size="md" variant="secondary" icon={PlusIcon} label="Button" />
      <Button size="md" variant="warning" icon={PlusIcon} label="Button" />
      <Button size="md" variant="outline" icon={PlusIcon} label="Button" />
      <Button size="md" variant="ghost" icon={PlusIcon} label="Button" />
    </div>
  </div>
);