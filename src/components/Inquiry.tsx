"use client";

import { useId, useRef } from "react";

export function Inquiry({ subject, children, tone = "forest" }: { subject: string; children: React.ReactNode; tone?: "forest" | "cream" | "wheat" }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  return <>
    <button ref={trigger} className={`button button-${tone}`} onClick={() => dialog.current?.showModal()}>{children}</button>
    <dialog ref={dialog} className="inquiry-dialog" aria-labelledby={titleId} onClose={() => trigger.current?.focus()}
      onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="dialog-content">
        <h2 id={titleId}>Consulta informativa</h2>
        <p className="inquiry-subject">{subject}</p>
        <p>Los canales oficiales de contacto están pendientes de confirmar.</p>
        <p className="muted">Esta es una propuesta conceptual. No se ha enviado una solicitud ni se ha realizado una compra o suscripción.</p>
        <form method="dialog"><button className="button button-forest" autoFocus>Entendido</button></form>
      </div>
    </dialog>
  </>;
}
