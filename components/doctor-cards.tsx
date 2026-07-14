import Image from "next/image";
import { DOCTOR_LIST } from "@/lib/doctors";

/**
 * Shared doctor card grid — the single rendering of the team used by the
 * homepage and every city page, so the two can never drift again. Cards show
 * the short `cardBio` (canonical homepage copy). Drop it inside a section that
 * supplies its own heading/intro. Presentational only (no hooks) so it works in
 * both the client homepage and the server city route.
 */
export function DoctorCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {DOCTOR_LIST.map((d) => (
        <article key={d.name} className="card">
          <Image
            src={d.image}
            alt={d.name}
            width={80}
            height={80}
            className="mb-4 h-20 w-20 rounded-full object-cover"
          />
          <h3 className="font-heading text-lg text-charcoal">{d.name}</h3>
          <p className="text-sm font-medium text-green">{d.creds}</p>
          <p className="mt-3 text-sm text-charcoal-soft">{d.cardBio}</p>
        </article>
      ))}
    </div>
  );
}
