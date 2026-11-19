"use client";

import { useEffect, useRef } from "react";

const seenKey = "vitalflour-intro-seen";

export function IntroVideo() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const overlay = dialog.current;
    const player = video.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!overlay || !player || motion.matches || (location.hash && location.hash !== "#inicio")) return;
    try {
      if (sessionStorage.getItem(seenKey)) return;
    } catch { /* Storage may be unavailable in private browsing. */ }

    let disposed = false;
    const finish = () => {
      if (disposed) return;
      disposed = true;
      player.pause();
      overlay.close();
    };
    const remember = () => {
      try { sessionStorage.setItem(seenKey, "1"); } catch { /* Playback still works. */ }
    };
    const motionChanged = () => { if (motion.matches) finish(); };
    overlay.showModal();
    player.addEventListener("playing", remember, { once: true });
    player.addEventListener("ended", finish);
    player.addEventListener("error", finish);
    overlay.addEventListener("close", finish);
    motion.addEventListener("change", motionChanged);
    player.src = "/assets/video/loader.mp4";
    player.play().catch(finish);
    const timeout = window.setTimeout(finish, 6500);
    return () => {
      disposed = true;
      clearTimeout(timeout);
      player.removeEventListener("playing", remember);
      player.removeEventListener("ended", finish);
      player.removeEventListener("error", finish);
      overlay.removeEventListener("close", finish);
      motion.removeEventListener("change", motionChanged);
      player.pause();
      overlay.close();
    };
  }, []);

  return <dialog ref={dialog} className="intro-video" aria-label="Introducción de VitalFlour">
    <video ref={video} muted playsInline preload="none" aria-hidden="true" />
  </dialog>;
}
