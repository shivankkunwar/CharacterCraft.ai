export interface Message {
    id: string
    role: "data" | "system" | "user" | "assistant"
    content: string
    images?: string[]
    timestamp?: string
    toolInvocations?: ToolInvocation[];
  }
  
  export interface ImageContext {
    id: string
    description: string
    url: string
    relatedTo?: string[]
    metadata: {
      style: string
      characters: string[]
      location: string
      timestamp: number
    }
  }
  
  export interface ChatState {
    messages: Message[]
    imageContexts: ImageContext[]
  }
  
  export interface GenerateImageParams {
    description: string
    relatedTo?: string[]
    style?: string
    characters?: string[]
    location?: string
  }
  
  export type ToolInvocation = {
    toolName: string; 
    parameters: Record<string, any>;
    result?: {
      content?: string; 
      images?: string[]; 
    };
  };