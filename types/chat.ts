export interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    images?: string[]
    timestamp: string
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
      timestamp: string
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
  
  