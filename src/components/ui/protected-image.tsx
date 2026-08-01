"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";

/**
 * next/image с защитой контента: запрет drag и контекстного меню.
 * Клиентский компонент — можно использовать из Server Components,
 * где нельзя передавать обработчики событий в клиентские компоненты.
 */
export function ProtectedImage({ alt, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}
