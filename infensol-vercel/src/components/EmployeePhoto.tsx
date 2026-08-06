import { useState } from "react";
import { UserRound } from "lucide-react";
import { cn, toPhotoSlug } from "@/lib/utils";

const EXTENSIONS = ["png", "webp", "jpg", "jpeg"];

export function EmployeePhoto({
  name,
  alt,
  className = "",
}: {
  name: string;
  alt: string;
  className?: string;
}) {
  const [candidate, setCandidate] = useState(0);
  const candidates = EXTENSIONS.map(
    (ext) => `/images/team/members/${toPhotoSlug(name)}.${ext}`,
  );
  const src = candidate < candidates.length ? candidates[candidate] : null;

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-card", className)}>
      {/* Premium silhouette fallback — shown only when no local photo exists */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-card to-onyx">
        <div className="text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-champagne/20 bg-champagne/5">
            <UserRound size={40} strokeWidth={1} className="text-champagne/30" />
          </div>
          <span className="mt-4 block text-[9px] tracking-luxury uppercase text-foreground/30">
            Photo Coming Soon
          </span>
        </div>
      </div>

      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1280px) 320px, (min-width: 1024px) 300px, (min-width: 768px) 350px, 100vw"
          onError={() => setCandidate((c) => c + 1)}
          className="relative h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      )}
    </div>
  );
}
