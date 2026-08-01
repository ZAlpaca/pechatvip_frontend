"use client";

import { useEffect } from "react";

/**
 * Защита контента: перехват Ctrl+C, Ctrl+U, F12 на клиенте.
 * Не блокирует копирование внутри полей ввода / textarea / contenteditable.
 */
export function ContentProtection() {
  useEffect(() => {
    const isEditable = (el: EventTarget | null) => {
      const node = el as HTMLElement | null;
      if (!node) return false;
      const tag = node.tagName;
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        node.isContentEditable
      );
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // F12 — DevTools
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl+U — просмотр исходного кода
      if (mod && key === "u") {
        e.preventDefault();
        return;
      }
      // Ctrl+C / Ctrl+X — копирование/вырезание (не в полях ввода)
      if ((mod && (key === "c" || key === "x")) && !isEditable(e.target)) {
        e.preventDefault();
        return;
      }
      // Ctrl+S — сохранение страницы
      if (mod && key === "s") {
        e.preventDefault();
        return;
      }
    };

    const onContextMenu = (e: MouseEvent) => {
      const node = e.target as HTMLElement | null;
      if (node && !isEditable(e.target)) e.preventDefault();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return null;
}
