import { GoogleGenAI } from "@google/genai";

// Environments
const ENV = {
  OPENROUTER_API_KEY: import.meta.env.VITE_OPENROUTER_API_KEY,
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
};

// Types
export type ContentType =
  | 'taglines'
  | 'blog-ideas'
  | 'social-posts'
  | 'news-feed'
  | 'marketing-angles'
  | 'content-outlines'
  | 'topic-ideas'
  | 'code-snippets'
  | 'api-integrations'
  | 'innovative-expansions';

export type ToolType =
  | 'code-refactor'
  | 'sql-query'
  | 'color-palette'
  | 'regex-generator'
  | 'image-generator'
  | 'resume-analyzer'
  | 'user-persona'
  | 'readme-generator'
  | 'unit-test-writer'
  | 'api-ideas';

/**
 * Primary: OpenRouter (DeepSeek R1)
 */
async function callOpenRouter(prompt: string, isJson: boolean = false): Promise<string> {
  if (!ENV.OPENROUTER_API_KEY) throw new Error("OpenRouter API Key missing");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${ENV.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin, // Required by OpenRouter
      "X-Title": "BySaad Portfolio",
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1:free", // Using free tier or user preferred model
      messages: [{ role: "user", content: prompt }],
      response_format: isJson ? { type: "json_object" } : undefined,
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenRouter Error ${response.status}: ${errorBody}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error("OpenRouter returned empty content");

  return content;
}

/**
 * Fallback: Google Gemini
 */
async function callGemini(prompt: string, isJson: boolean = false): Promise<string> {
  if (!ENV.GEMINI_API_KEY) throw new Error("Gemini API Key missing");

  const genAI = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });
  const model = "gemini-2.5-flash"; // Fast and reliable fallback

  const response = await genAI.models.generateContent({
    model,
    contents: { parts: [{ text: prompt }] }, // Correct format for @google/genai
    config: isJson ? { responseMimeType: "application/json" } : undefined,
  });

  const text = response.text(); // @google/genai syntax checks
  if (!text) throw new Error("Gemini returned empty content");

  return text;
}

/**
 * Core Orchestrator
 */
async function generateAIContent(prompt: string, isJson: boolean): Promise<string> {
  // 1. Try Primary (OpenRouter)
  try {
    console.log("🤖 Attempting Primary AI (OpenRouter)...");
    return await callOpenRouter(prompt, isJson);
  } catch (primaryError: any) {
    console.warn("⚠️ OpenRouter failed. Switching to Fallback...", primaryError.message);
  }

  // 2. Try Fallback (Gemini)
  try {
    console.log("🛡️ Attempting Fallback AI (Gemini)...");
    return await callGemini(prompt, isJson);
  } catch (fallbackError: any) {
    console.error("❌ All AI Providers failed.", fallbackError.message);
    throw new Error("AI Service Unavailable - Check API Key");
  }
}

// ============================================================================
// PUBLIC EXPORTS
// ============================================================================

export const generateMarketingContent = async (
  topic: string,
  industry: string,
  type: ContentType
): Promise<string[]> => {
  const basePrompt = `Act as a world-class content strategist for the "${industry}" industry, focusing on "${topic}".`;

  const prompts: Record<ContentType, string> = {
    'taglines': `${basePrompt} Generate 5 punchy, high-converting marketing taglines (max 10 words each). Return ONLY a raw JSON array of strings.`,
    'blog-ideas': `${basePrompt} Generate 5 engaging blog post titles that would drive SEO traffic. Return ONLY a raw JSON array of strings.`,
    'social-posts': `${basePrompt} Generate 5 viral-ready social media post ideas/captions. Return ONLY a raw JSON array of strings.`,
    'news-feed': `${basePrompt} Generate 5 trending news feed headline ideas hooks relevant to this niche. Return ONLY a raw JSON array of strings.`,
    'marketing-angles': `${basePrompt} Generate 5 unique marketing angles/hooks to sell products in this niche. Return ONLY a raw JSON array of strings.`,
    'content-outlines': `${basePrompt} Generate 5 high-level content outlines (e.g., "Intro -> Problem -> Solution"). Return ONLY a raw JSON array of strings.`,
    'topic-ideas': `${basePrompt} Generate 5 high-interest sub-topics within this niche. Return ONLY a raw JSON array of strings.`,
    'code-snippets': `${basePrompt} Generate 3 useful, short code snippets (Python, JS, SQL) solving a common problem. Return ONLY a raw JSON array of strings.`,
    'api-integrations': `${basePrompt} Generate 5 creative API integration ideas for this industry. Return ONLY a raw JSON array of strings.`,
    'innovative-expansions': `${basePrompt} Generate 5 innovative sub-services or trends. Return ONLY a raw JSON array of strings.`
  };

  try {
    const rawResult = await generateAIContent(prompts[type], true);
    return JSON.parse(rawResult);
  } catch (error) {
    console.error("Marketing Gen Error:", error);
    return ["AI Service Unavailable - Check API Key"];
  }
};

export const generateToolResult = async (type: ToolType, input: string): Promise<any> => {
  // Special Handling: Image Generation (Gemini Only for now as DeepSeek R1 is text-only usually)
  if (type === 'image-generator') {
    try {
      if (!ENV.GEMINI_API_KEY) return "Image Gen Unavailable: Check Gemini API Key";
      const genAI = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });
      // Note: @google/genai image models might behave differently versions
      const response = await genAI.models.generateContent({
        model: 'gemini-2.5-flash-image', // Ensure this model exists in your tier
        contents: { parts: [{ text: input }] }
      });
      // Mocking/Standardizing return execution for image logic specific to libraries
      // For safety in this generic orchestrator, strictly returning text unless verified image model SDK
      return "Image generation requires specific model config. Please use text tools.";
    } catch (e) {
      return "Image Generation Failed.";
    }
  }

  const prompts: Record<ToolType, { prompt: string; json: boolean }> = {
    'code-refactor': {
      prompt: `Act as a Senior Engineer. Refactor this code for efficiency/readability:\n${input}`,
      json: false
    },
    'sql-query': {
      prompt: `Act as a DBA. Write an optimized SQL query for: "${input}"`,
      json: false
    },
    'color-palette': {
      prompt: `Act as a UI Designer. Generate a 5-color palette for: "${input}". Return ONLY a raw JSON array of objects {hex, name, usage}.`,
      json: true
    },
    'regex-generator': {
      prompt: `Act as a Regex Expert. Create a regex for: "${input}". Explain it.`,
      json: false
    },
    'image-generator': { prompt: '', json: false },
    'resume-analyzer': {
      prompt: `Analyze this resume. Provide Markdown report (Strengths, Weaknesses):\n${input}`,
      json: false
    },
    'user-persona': {
      prompt: `Create 2 User Personas (Name, Bio, Needs) for: "${input}". Format Markdown.`,
      json: false
    },
    'readme-generator': {
      prompt: `Generate a GitHub README.md for: "${input}". Include Features, Install, Usage. Format Markdown.`,
      json: false
    },
    'unit-test-writer': {
      prompt: `Write unit tests (edge cases included) for this code:\n${input}`,
      json: false
    },
    'api-ideas': {
      prompt: `Suggest 5 API integrations for: "${input}". Explain function. Format Markdown.`,
      json: false
    }
  };

  const config = prompts[type];

  try {
    const rawResult = await generateAIContent(config.prompt, config.json);
    if (config.json) {
      // Clean markdown code blocks if AI wraps JSON in ```json ... ```
      const cleanJson = rawResult.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleanJson);
    }
    return rawResult;
  } catch (error) {
    console.error("Tool Gen Error:", error);
    return "AI Service Unavailable - Check API Key";
  }
};



