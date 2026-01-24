/**
 * Handles global error boundary for the application.
 * This component can be used to wrap around other components
 * to catch and display errors in a user-friendly manner.
 */

"use client";

import "./globals.css";
import { useState } from "react";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred!",
}: {
  message: string;
}) => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) throw new Error(message);

  return (
    <button title="Simulate an error" onClick={() => setThrowError(true)}>
      Simulate Error
    </button>
  );
};

export default function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <div>
      <h1>Global Error Boundary Wrapper</h1>
      <ErrorSimulator message="Simulated error from ErrorWrapper!" />
      <div>{children}</div>
    </div>
  );
}