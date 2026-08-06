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
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <div className="absolute inset-0 grid place-items-center bg-background">
        <div className="text-center">
          <UserRound size={56} strokeWidth={1} className="mx-auto text-foreground/15" />
          <span className="mt-3 block text-[9px] tracking-luxury uppercase text-foreground/30">
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
          onError={() => setCandidate((c) => c + 1)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      )}
    </div>
  );
}
