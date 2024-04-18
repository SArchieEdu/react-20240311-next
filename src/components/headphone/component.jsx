"use client";

import { Button } from "@/components/Button/component";

export const Headphone = ({ headphone }) => {
  return (
    <div>
      <div>Headphone: {headphone.name}</div>
      <Button onClick={console.log}>-</Button>
      <Button onClick={console.log}>+</Button>
    </div>
  );
};
