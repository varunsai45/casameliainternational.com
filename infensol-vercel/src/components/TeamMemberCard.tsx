import { Linkedin } from "lucide-react";
import { EmployeePhoto } from "./EmployeePhoto";
import { Reveal } from "./Reveal";
import { toPhotoSlug } from "@/lib/utils";
import type { Employee } from "@/data/team";

export function TeamMemberCard({
  member,
  index,
}: {
  member: Employee;
  index: number;
}) {
  const tooltipId = `linkedin-${toPhotoSlug(member.name)}`;

  return (
    <Reveal delay={(index % 4) * 80} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-onyx shadow-luxe transition-all duration-300 ease-out hover:-translate-y-2 hover:border-champagne/50 hover:shadow-glow">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-champagne/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <EmployeePhoto
            name={member.name}
            alt={`${member.name}, ${member.designation} at CASAMELIA International`}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/0 to-onyx/0"
          />
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <h3 className="font-display text-xl leading-snug text-white lg:text-2xl">
            {member.name}
          </h3>
          <p className="mt-2 text-[10px] tracking-luxury uppercase text-champagne">
            {member.designation}
          </p>
          <div className="mt-4 h-px w-12 bg-gradient-to-r from-champagne to-transparent" />
          <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-foreground/60">
            {member.intro}
          </p>

          <div className="mt-6 flex items-center justify-end border-t border-border/60 pt-5">
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} on LinkedIn — opens in a new tab`}
                title="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/40 text-champagne transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-champagne hover:text-primary-foreground hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60"
              >
                <Linkedin size={15} strokeWidth={1.5} aria-hidden />
              </a>
            ) : (
              <span
                tabIndex={0}
                aria-describedby={tooltipId}
                aria-disabled="true"
                className="group/tip relative inline-flex h-9 w-9 cursor-not-allowed place-items-center rounded-full border border-champagne/25 text-champagne/40 outline-none focus-visible:ring-2 focus-visible:ring-champagne/60"
              >
                <Linkedin size={15} strokeWidth={1.5} aria-hidden />
                <span
                  id={tooltipId}
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap border border-champagne/30 bg-onyx px-3 py-1.5 text-[9px] tracking-luxury uppercase text-champagne opacity-0 transition-opacity duration-300 group-hover/tip:opacity-100 group-focus/tip:opacity-100"
                >
                  LinkedIn Profile Coming Soon
                </span>
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
