import type { VerbConjugation } from "@shared/schema";

// Common irregular verbs with their forms
const IRREGULAR_VERBS: Record<string, {
  base: string;
  thirdPerson: string;
  pastSimple: string;
  pastParticiple: string;
  presentParticiple: string;
}> = {
  be: {
    base: "be",
    thirdPerson: "is",
    pastSimple: "was",
    pastParticiple: "been",
    presentParticiple: "being",
  },
  have: {
    base: "have",
    thirdPerson: "has",
    pastSimple: "had",
    pastParticiple: "had",
    presentParticiple: "having",
  },
  do: {
    base: "do",
    thirdPerson: "does",
    pastSimple: "did",
    pastParticiple: "done",
    presentParticiple: "doing",
  },
  go: {
    base: "go",
    thirdPerson: "goes",
    pastSimple: "went",
    pastParticiple: "gone",
    presentParticiple: "going",
  },
  make: {
    base: "make",
    thirdPerson: "makes",
    pastSimple: "made",
    pastParticiple: "made",
    presentParticiple: "making",
  },
  take: {
    base: "take",
    thirdPerson: "takes",
    pastSimple: "took",
    pastParticiple: "taken",
    presentParticiple: "taking",
  },
  come: {
    base: "come",
    thirdPerson: "comes",
    pastSimple: "came",
    pastParticiple: "come",
    presentParticiple: "coming",
  },
  see: {
    base: "see",
    thirdPerson: "sees",
    pastSimple: "saw",
    pastParticiple: "seen",
    presentParticiple: "seeing",
  },
  know: {
    base: "know",
    thirdPerson: "knows",
    pastSimple: "knew",
    pastParticiple: "known",
    presentParticiple: "knowing",
  },
  get: {
    base: "get",
    thirdPerson: "gets",
    pastSimple: "got",
    pastParticiple: "gotten",
    presentParticiple: "getting",
  },
  give: {
    base: "give",
    thirdPerson: "gives",
    pastSimple: "gave",
    pastParticiple: "given",
    presentParticiple: "giving",
  },
  think: {
    base: "think",
    thirdPerson: "thinks",
    pastSimple: "thought",
    pastParticiple: "thought",
    presentParticiple: "thinking",
  },
  say: {
    base: "say",
    thirdPerson: "says",
    pastSimple: "said",
    pastParticiple: "said",
    presentParticiple: "saying",
  },
  tell: {
    base: "tell",
    thirdPerson: "tells",
    pastSimple: "told",
    pastParticiple: "told",
    presentParticiple: "telling",
  },
  find: {
    base: "find",
    thirdPerson: "finds",
    pastSimple: "found",
    pastParticiple: "found",
    presentParticiple: "finding",
  },
  leave: {
    base: "leave",
    thirdPerson: "leaves",
    pastSimple: "left",
    pastParticiple: "left",
    presentParticiple: "leaving",
  },
  feel: {
    base: "feel",
    thirdPerson: "feels",
    pastSimple: "felt",
    pastParticiple: "felt",
    presentParticiple: "feeling",
  },
  bring: {
    base: "bring",
    thirdPerson: "brings",
    pastSimple: "brought",
    pastParticiple: "brought",
    presentParticiple: "bringing",
  },
  begin: {
    base: "begin",
    thirdPerson: "begins",
    pastSimple: "began",
    pastParticiple: "begun",
    presentParticiple: "beginning",
  },
  run: {
    base: "run",
    thirdPerson: "runs",
    pastSimple: "ran",
    pastParticiple: "run",
    presentParticiple: "running",
  },
  write: {
    base: "write",
    thirdPerson: "writes",
    pastSimple: "wrote",
    pastParticiple: "written",
    presentParticiple: "writing",
  },
  read: {
    base: "read",
    thirdPerson: "reads",
    pastSimple: "read",
    pastParticiple: "read",
    presentParticiple: "reading",
  },
  eat: {
    base: "eat",
    thirdPerson: "eats",
    pastSimple: "ate",
    pastParticiple: "eaten",
    presentParticiple: "eating",
  },
  drink: {
    base: "drink",
    thirdPerson: "drinks",
    pastSimple: "drank",
    pastParticiple: "drunk",
    presentParticiple: "drinking",
  },
  speak: {
    base: "speak",
    thirdPerson: "speaks",
    pastSimple: "spoke",
    pastParticiple: "spoken",
    presentParticiple: "speaking",
  },
  break: {
    base: "break",
    thirdPerson: "breaks",
    pastSimple: "broke",
    pastParticiple: "broken",
    presentParticiple: "breaking",
  },
  understand: {
    base: "understand",
    thirdPerson: "understands",
    pastSimple: "understood",
    pastParticiple: "understood",
    presentParticiple: "understanding",
  },
  build: {
    base: "build",
    thirdPerson: "builds",
    pastSimple: "built",
    pastParticiple: "built",
    presentParticiple: "building",
  },
  buy: {
    base: "buy",
    thirdPerson: "buys",
    pastSimple: "bought",
    pastParticiple: "bought",
    presentParticiple: "buying",
  },
  catch: {
    base: "catch",
    thirdPerson: "catches",
    pastSimple: "caught",
    pastParticiple: "caught",
    presentParticiple: "catching",
  },
  choose: {
    base: "choose",
    thirdPerson: "chooses",
    pastSimple: "chose",
    pastParticiple: "chosen",
    presentParticiple: "choosing",
  },
  fall: {
    base: "fall",
    thirdPerson: "falls",
    pastSimple: "fell",
    pastParticiple: "fallen",
    presentParticiple: "falling",
  },
  fly: {
    base: "fly",
    thirdPerson: "flies",
    pastSimple: "flew",
    pastParticiple: "flown",
    presentParticiple: "flying",
  },
  forget: {
    base: "forget",
    thirdPerson: "forgets",
    pastSimple: "forgot",
    pastParticiple: "forgotten",
    presentParticiple: "forgetting",
  },
  grow: {
    base: "grow",
    thirdPerson: "grows",
    pastSimple: "grew",
    pastParticiple: "grown",
    presentParticiple: "growing",
  },
  hear: {
    base: "hear",
    thirdPerson: "hears",
    pastSimple: "heard",
    pastParticiple: "heard",
    presentParticiple: "hearing",
  },
  keep: {
    base: "keep",
    thirdPerson: "keeps",
    pastSimple: "kept",
    pastParticiple: "kept",
    presentParticiple: "keeping",
  },
  learn: {
    base: "learn",
    thirdPerson: "learns",
    pastSimple: "learned",
    pastParticiple: "learned",
    presentParticiple: "learning",
  },
  lose: {
    base: "lose",
    thirdPerson: "loses",
    pastSimple: "lost",
    pastParticiple: "lost",
    presentParticiple: "losing",
  },
  meet: {
    base: "meet",
    thirdPerson: "meets",
    pastSimple: "met",
    pastParticiple: "met",
    presentParticiple: "meeting",
  },
  pay: {
    base: "pay",
    thirdPerson: "pays",
    pastSimple: "paid",
    pastParticiple: "paid",
    presentParticiple: "paying",
  },
  put: {
    base: "put",
    thirdPerson: "puts",
    pastSimple: "put",
    pastParticiple: "put",
    presentParticiple: "putting",
  },
  sell: {
    base: "sell",
    thirdPerson: "sells",
    pastSimple: "sold",
    pastParticiple: "sold",
    presentParticiple: "selling",
  },
  send: {
    base: "send",
    thirdPerson: "sends",
    pastSimple: "sent",
    pastParticiple: "sent",
    presentParticiple: "sending",
  },
  sit: {
    base: "sit",
    thirdPerson: "sits",
    pastSimple: "sat",
    pastParticiple: "sat",
    presentParticiple: "sitting",
  },
  sleep: {
    base: "sleep",
    thirdPerson: "sleeps",
    pastSimple: "slept",
    pastParticiple: "slept",
    presentParticiple: "sleeping",
  },
  stand: {
    base: "stand",
    thirdPerson: "stands",
    pastSimple: "stood",
    pastParticiple: "stood",
    presentParticiple: "standing",
  },
  teach: {
    base: "teach",
    thirdPerson: "teaches",
    pastSimple: "taught",
    pastParticiple: "taught",
    presentParticiple: "teaching",
  },
  wear: {
    base: "wear",
    thirdPerson: "wears",
    pastSimple: "wore",
    pastParticiple: "worn",
    presentParticiple: "wearing",
  },
  win: {
    base: "win",
    thirdPerson: "wins",
    pastSimple: "won",
    pastParticiple: "won",
    presentParticiple: "winning",
  },
};

function getThirdPersonForm(verb: string): string {
  // Handle special cases
  if (verb.endsWith("o") || verb.endsWith("ch") || verb.endsWith("sh") || 
      verb.endsWith("ss") || verb.endsWith("x") || verb.endsWith("z")) {
    return verb + "es";
  }
  
  // Consonant + y -> ies
  if (verb.endsWith("y") && verb.length > 1) {
    const beforeY = verb[verb.length - 2];
    if (!"aeiou".includes(beforeY)) {
      return verb.slice(0, -1) + "ies";
    }
  }
  
  return verb + "s";
}

function getPastSimpleForm(verb: string): string {
  // Ends with 'e' -> add 'd'
  if (verb.endsWith("e")) {
    return verb + "d";
  }
  
  // Consonant + y -> ied
  if (verb.endsWith("y") && verb.length > 1) {
    const beforeY = verb[verb.length - 2];
    if (!"aeiou".includes(beforeY)) {
      return verb.slice(0, -1) + "ied";
    }
  }
  
  // CVC pattern (consonant-vowel-consonant) -> double last consonant + ed
  if (verb.length >= 3) {
    const last = verb[verb.length - 1];
    const secondLast = verb[verb.length - 2];
    const thirdLast = verb[verb.length - 3];
    
    if (!"aeiou".includes(last) && 
        "aeiou".includes(secondLast) && 
        !"aeiou".includes(thirdLast) &&
        last !== "w" && last !== "x" && last !== "y") {
      return verb + last + "ed";
    }
  }
  
  return verb + "ed";
}

function getPresentParticipleForm(verb: string): string {
  // Ends with 'ie' -> 'ying'
  if (verb.endsWith("ie")) {
    return verb.slice(0, -2) + "ying";
  }
  
  // Ends with 'e' (not 'ee', 'oe', 'ye') -> drop 'e' and add 'ing'
  if (verb.endsWith("e") && verb.length > 2 && 
      !verb.endsWith("ee") && !verb.endsWith("oe") && !verb.endsWith("ye")) {
    return verb.slice(0, -1) + "ing";
  }
  
  // CVC pattern -> double last consonant + ing
  if (verb.length >= 3) {
    const last = verb[verb.length - 1];
    const secondLast = verb[verb.length - 2];
    const thirdLast = verb[verb.length - 3];
    
    if (!"aeiou".includes(last) && 
        "aeiou".includes(secondLast) && 
        !"aeiou".includes(thirdLast) &&
        last !== "w" && last !== "x" && last !== "y") {
      return verb + last + "ing";
    }
  }
  
  return verb + "ing";
}

export function conjugateVerb(verb: string): VerbConjugation {
  const baseVerb = verb.toLowerCase().trim();
  const isIrregular = baseVerb in IRREGULAR_VERBS;
  
  let thirdPerson: string;
  let pastSimple: string;
  let pastParticiple: string;
  let presentParticiple: string;
  
  if (isIrregular) {
    const irregular = IRREGULAR_VERBS[baseVerb];
    thirdPerson = irregular.thirdPerson;
    pastSimple = irregular.pastSimple;
    pastParticiple = irregular.pastParticiple;
    presentParticiple = irregular.presentParticiple;
  } else {
    thirdPerson = getThirdPersonForm(baseVerb);
    pastSimple = getPastSimpleForm(baseVerb);
    pastParticiple = pastSimple; // For regular verbs, past participle = past simple
    presentParticiple = getPresentParticipleForm(baseVerb);
  }

  // Special handling for "be"
  const beConjugation = baseVerb === "be" ? {
    presentSimple: {
      i: "am",
      you: "are",
      heSheIt: "is",
      we: "are",
      they: "are",
    },
    pastSimple: {
      i: "was",
      you: "were",
      heSheIt: "was",
      we: "were",
      they: "were",
    },
  } : null;

  return {
    verb: baseVerb,
    isIrregular,
    conjugations: {
      presentSimple: beConjugation?.presentSimple || {
        i: baseVerb,
        you: baseVerb,
        heSheIt: thirdPerson,
        we: baseVerb,
        they: baseVerb,
      },
      presentContinuous: {
        i: `am ${presentParticiple}`,
        you: `are ${presentParticiple}`,
        heSheIt: `is ${presentParticiple}`,
        we: `are ${presentParticiple}`,
        they: `are ${presentParticiple}`,
      },
      pastSimple: beConjugation?.pastSimple || {
        i: pastSimple,
        you: pastSimple,
        heSheIt: pastSimple,
        we: pastSimple,
        they: pastSimple,
      },
      pastContinuous: {
        i: `was ${presentParticiple}`,
        you: `were ${presentParticiple}`,
        heSheIt: `was ${presentParticiple}`,
        we: `were ${presentParticiple}`,
        they: `were ${presentParticiple}`,
      },
      future: {
        i: `will ${baseVerb}`,
        you: `will ${baseVerb}`,
        heSheIt: `will ${baseVerb}`,
        we: `will ${baseVerb}`,
        they: `will ${baseVerb}`,
      },
      presentPerfect: {
        i: `have ${pastParticiple}`,
        you: `have ${pastParticiple}`,
        heSheIt: `has ${pastParticiple}`,
        we: `have ${pastParticiple}`,
        they: `have ${pastParticiple}`,
      },
      pastPerfect: {
        i: `had ${pastParticiple}`,
        you: `had ${pastParticiple}`,
        heSheIt: `had ${pastParticiple}`,
        we: `had ${pastParticiple}`,
        they: `had ${pastParticiple}`,
      },
      futurePerfect: {
        i: `will have ${pastParticiple}`,
        you: `will have ${pastParticiple}`,
        heSheIt: `will have ${pastParticiple}`,
        we: `will have ${pastParticiple}`,
        they: `will have ${pastParticiple}`,
      },
    },
  };
}
