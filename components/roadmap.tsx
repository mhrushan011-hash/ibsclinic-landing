interface RoadmapStep {
  n: number;
  h: string;
  p: string;
}

interface RoadmapProps {
  steps: ReadonlyArray<RoadmapStep>;
}

export function Roadmap({ steps }: RoadmapProps) {
  return (
    <div>
      {/* DESKTOP: horizontal milestones with connecting dashed line */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.n} className="relative">
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] border-t-2 border-dashed border-green/40 md:block"
                  />
                )}
                <div className="relative flex justify-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green font-heading text-xl font-bold text-white shadow-card ring-4 ring-green-tint">
                    {step.n}
                  </span>
                </div>
                <div className="mt-6 rounded-[16px] border border-gray-border bg-white p-5 text-center">
                  <h3 className="font-heading text-lg text-charcoal">{step.h}</h3>
                  <p className="mt-2 text-sm text-charcoal-soft">{step.p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE: vertical timeline */}
      <ol className="md:hidden">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.n} className="relative flex gap-4 pb-8 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-12 h-[calc(100%-2rem)] w-0.5 bg-green/30"
                />
              )}
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green font-heading text-base font-bold text-white ring-4 ring-green-tint">
                {step.n}
              </span>
              <div className="flex-1 rounded-[16px] border border-gray-border bg-white p-4">
                <h3 className="font-heading text-lg text-charcoal">{step.h}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{step.p}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
