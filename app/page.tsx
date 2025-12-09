"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Home() {
  const [] = React.useState("");

  const data = window.localStorage.getItem("todos");

  function handleAddTodo(todo: string) {
    window.localStorage.setItem("todos", [todo].toString());
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-semibold">Create Todo</p>
      <div className="flex gap-4">
        <Input />
        <Button>SUBMIT</Button>
      </div>
    </div>
  );
}
