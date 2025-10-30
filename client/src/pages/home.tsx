import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Sparkles, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { VerbConjugation } from "@shared/schema";
import heroImage from "@assets/generated_images/Colorful_language_learning_hero_d112ca8c.png";

const EXAMPLE_VERBS = ["be", "go", "have", "make", "take", "see", "come", "think", "give", "know"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVerb, setSelectedVerb] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { data: conjugation, isLoading, isError, error } = useQuery<VerbConjugation>({
    queryKey: ["/api/conjugate", selectedVerb],
    queryFn: async () => {
      const response = await fetch(`/api/conjugate/${selectedVerb}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch conjugation for "${selectedVerb}"`);
      }
      return response.json();
    },
    enabled: !!selectedVerb,
  });

  const handleSearch = (verb: string) => {
    const trimmedVerb = verb.trim().toLowerCase();
    if (trimmedVerb) {
      setSelectedVerb(trimmedVerb);
      setSearchQuery(trimmedVerb);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
  };

  const filteredSuggestions = EXAMPLE_VERBS.filter(verb =>
    verb.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Colorful abstract shapes representing language learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight font-display">
              VerbMaster
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Master English Verb Conjugations
          </p>
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Search any English verb and see all its conjugations across every tense instantly
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <Input
                type="text"
                placeholder="Enter a verb (e.g., run, think, be)..."
                value={searchQuery}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(searchQuery);
                  }
                }}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                className="h-14 pl-12 pr-4 text-base rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/50 focus-visible:border-primary shadow-lg"
                data-testid="input-verb-search"
              />
            </div>

            {/* Autocomplete Suggestions */}
            {showSuggestions && (filteredSuggestions.length > 0 || searchQuery.length > 0) && (
              <Card className="absolute top-full mt-2 w-full rounded-xl shadow-xl border-2 overflow-hidden z-20">
                <CardContent className="p-2">
                  {filteredSuggestions.length > 0 ? (
                    <div className="space-y-1">
                      {filteredSuggestions.slice(0, 5).map((verb) => (
                        <button
                          key={verb}
                          onClick={() => handleSearch(verb)}
                          className="w-full text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 transition-all text-sm font-medium"
                          data-testid={`suggestion-${verb}`}
                        >
                          {verb}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-3 text-sm text-muted-foreground">
                      Press Enter to search for "{searchQuery}"
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Example Verbs */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center items-center">
            <span className="text-sm text-white/70 font-medium">Popular verbs:</span>
            {EXAMPLE_VERBS.slice(0, 6).map((verb) => (
              <Button
                key={verb}
                variant="outline"
                size="sm"
                onClick={() => handleSearch(verb)}
                className="rounded-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                data-testid={`example-verb-${verb}`}
              >
                {verb}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {isLoading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card">
                <div className="w-6 h-6 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-lg font-medium text-foreground">Loading conjugations...</p>
              </div>
            </div>
          )}

          {isError && (
            <ErrorState verb={selectedVerb} error={error} onSelectVerb={handleSearch} />
          )}

          {!isLoading && !isError && conjugation && (
            <ConjugationDisplay conjugation={conjugation} />
          )}

          {!isLoading && !isError && !conjugation && !selectedVerb && (
            <EmptyState onSelectVerb={handleSearch} />
          )}
        </div>
      </section>
    </div>
  );
}

function ConjugationDisplay({ conjugation }: { conjugation: VerbConjugation }) {
  const tenses = [
    { name: "Present Simple", key: "presentSimple", color: "chart-1" },
    { name: "Present Continuous", key: "presentContinuous", color: "chart-2" },
    { name: "Past Simple", key: "pastSimple", color: "chart-3" },
    { name: "Past Continuous", key: "pastContinuous", color: "chart-4" },
    { name: "Future", key: "future", color: "chart-5" },
    { name: "Present Perfect", key: "presentPerfect", color: "chart-1" },
    { name: "Past Perfect", key: "pastPerfect", color: "chart-2" },
    { name: "Future Perfect", key: "futurePerfect", color: "chart-3" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      {/* Verb Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-verb-title">
            {conjugation.verb}
          </h2>
          {conjugation.isIrregular && (
            <Badge variant="secondary" className="text-sm font-semibold px-3 py-1" data-testid="badge-irregular">
              Irregular Verb
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-base">All conjugations across every tense</p>
      </div>

      {/* Conjugation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenses.map((tense, index) => (
          <TenseCard
            key={tense.key}
            tense={tense.name}
            conjugations={conjugation.conjugations[tense.key as keyof typeof conjugation.conjugations]}
            color={tense.color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface TenseCardProps {
  tense: string;
  conjugations: {
    i: string;
    you: string;
    heSheIt: string;
    we: string;
    they: string;
  };
  color: string;
  index: number;
}

function TenseCard({ tense, conjugations, color, index }: TenseCardProps) {
  const persons = [
    { label: "I", value: conjugations.i },
    { label: "You", value: conjugations.you },
    { label: "He/She/It", value: conjugations.heSheIt },
    { label: "We", value: conjugations.we },
    { label: "They", value: conjugations.they },
  ];

  return (
    <Card 
      className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-4 border-2"
      style={{ 
        animationDelay: `${index * 50}ms`,
        animationFillMode: "backwards"
      }}
      data-testid={`card-tense-${tense.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div 
            className="w-1 h-8 rounded-full" 
            style={{ backgroundColor: `hsl(var(--${color}))` }}
          />
          <CardTitle className="text-xl font-bold text-card-foreground">
            {tense}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {persons.map((person) => (
          <div 
            key={person.label} 
            className="flex items-baseline gap-3 group"
            data-testid={`conjugation-${tense.toLowerCase().replace(/\s+/g, '-')}-${person.label.toLowerCase().replace(/\//g, '-')}`}
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground min-w-[4rem]">
              {person.label}
            </span>
            <span className="text-lg font-semibold text-foreground flex-1">
              {person.value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ErrorState({ verb, error, onSelectVerb }: { verb: string; error: any; onSelectVerb: (verb: string) => void }) {
  return (
    <div className="text-center py-20 space-y-6 max-w-md mx-auto" data-testid="error-state">
      <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
        <Search className="w-10 h-10 text-destructive" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground">Verb Not Found</h3>
        <p className="text-muted-foreground text-base">
          We couldn't find conjugations for "<span className="font-semibold text-foreground">{verb}</span>".
          {error?.message && <span className="block mt-2 text-sm">{error.message}</span>}
        </p>
      </div>
      <div className="pt-4">
        <p className="text-sm font-medium text-muted-foreground mb-3">Try these popular verbs instead:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {EXAMPLE_VERBS.slice(0, 6).map((exampleVerb) => (
            <Badge 
              key={exampleVerb} 
              variant="outline" 
              className="cursor-pointer hover-elevate active-elevate-2 px-4 py-2 text-sm font-medium"
              onClick={() => onSelectVerb(exampleVerb)}
              data-testid={`error-example-${exampleVerb}`}
            >
              {exampleVerb}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onSelectVerb }: { onSelectVerb: (verb: string) => void }) {
  return (
    <div className="text-center py-20 space-y-6 max-w-md mx-auto">
      <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
        <Search className="w-10 h-10 text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground">Start Exploring Verbs</h3>
        <p className="text-muted-foreground text-base">
          Search for any English verb above to see all its conjugations across every tense
        </p>
      </div>
      <div className="pt-4">
        <p className="text-sm font-medium text-muted-foreground mb-3">Try these popular verbs:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {EXAMPLE_VERBS.map((verb) => (
            <Badge 
              key={verb} 
              variant="outline" 
              className="cursor-pointer hover-elevate active-elevate-2 px-4 py-2 text-sm font-medium"
              onClick={() => onSelectVerb(verb)}
              data-testid={`empty-example-${verb}`}
            >
              {verb}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
