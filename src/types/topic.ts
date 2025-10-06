export interface Topic {
  id: string;
  title: string;
  description: string;
  level: "basic" | "intermediate" | "advanced";
  category: string;
  tags: string[];
  story: string;
  steps: {
    question: string;
    hint: string;
  }[];
  formula: string;
  interactive: {
    type: string;
    params: string[];
  };
}

declare global {
  interface Window {
    MathJax?: {
      typesetPromise: () => Promise<void>;
    };
  }
}
