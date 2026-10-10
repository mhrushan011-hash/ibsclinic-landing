import type { GutPageData } from "./types";
import { PELVIC_FLOOR } from "./pelvic-floor-dysfunction";
import { TOILET_POSTURE } from "./toilet-posture-for-constipation";
import { IBS_DIET } from "./ibs-diet";
import { GAS_AND_BLOATING } from "./gas-and-bloating";
import { METABOLIC_HEALTH } from "./ibs-and-metabolic-health";
import { LAXATIVE_DEPENDENCY } from "./laxative-dependency";

export const GUT_PAGES: ReadonlyArray<GutPageData> = [
  PELVIC_FLOOR,
  TOILET_POSTURE,
  IBS_DIET,
  GAS_AND_BLOATING,
  METABOLIC_HEALTH,
  LAXATIVE_DEPENDENCY,
];
