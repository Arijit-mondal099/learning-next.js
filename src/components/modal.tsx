"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

interface ImageModalProps {
  children: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({ children }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 inset-0 mx-auto bg-black/60 p-10 flex items-center justify-center"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="bg-gray-50 rounded-lg shadow overflow-hidden sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
      >
        {children}
      </div>
    </div>
  );
};

export default ImageModal;
