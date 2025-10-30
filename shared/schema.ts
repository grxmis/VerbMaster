import { z } from "zod";

// Verb conjugation schema
export const verbConjugationSchema = z.object({
  verb: z.string(),
  isIrregular: z.boolean(),
  conjugations: z.object({
    presentSimple: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    presentContinuous: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    pastSimple: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    pastContinuous: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    future: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    presentPerfect: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    pastPerfect: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
    futurePerfect: z.object({
      i: z.string(),
      you: z.string(),
      heSheIt: z.string(),
      we: z.string(),
      they: z.string(),
    }),
  }),
});

export type VerbConjugation = z.infer<typeof verbConjugationSchema>;

// Verb search request
export const verbSearchSchema = z.object({
  verb: z.string().min(1),
});

export type VerbSearch = z.infer<typeof verbSearchSchema>;
