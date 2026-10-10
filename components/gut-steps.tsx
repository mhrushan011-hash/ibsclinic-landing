import type { Step } from "@/lib/gut-pages/types";
import { InlineText } from "@/components/inline-text";

interface GutStepsProps {
  steps: ReadonlyArray<Step>;
  /** Text for a closing row that shows the pattern repeating. */
  loop?: string;
}

export function GutSteps({ steps, loop }: GutStepsProps) {
  return (
    <ol className={loop ? "gut-steps gut-steps--loop" : "gut-steps"}>
      {steps.map((s, i) => (
        <li key={s.title} className="gut-steps__item">
          <span className="gut-steps__num" aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <h3 className="gut-steps__title">{s.title}</h3>
            <p className="gut-steps__body">
              <InlineText text={s.body} />
            </p>
          </div>
        </li>
      ))}
      {loop && (
        <li className="gut-steps__repeat" aria-label={loop}>
          <span aria-hidden="true">&#8635;</span> {loop}
        </li>
      )}
    </ol>
  );
}
