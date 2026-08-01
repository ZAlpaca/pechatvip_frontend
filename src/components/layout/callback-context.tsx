"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface CallbackContextValue {
  open: boolean;
  openCallback: () => void;
  closeCallback: () => void;
}

const CallbackContext = createContext<CallbackContextValue | null>(null);

export function CallbackProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openCallback = useCallback(() => setOpen(true), []);
  const closeCallback = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openCallback, closeCallback }),
    [open, openCallback, closeCallback],
  );

  return (
    <CallbackContext.Provider value={value}>
      {children}
    </CallbackContext.Provider>
  );
}

export function useCallbackModal() {
  const ctx = useContext(CallbackContext);
  if (!ctx) throw new Error("useCallbackModal must be used within CallbackProvider");
  return ctx;
}
