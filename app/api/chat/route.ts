import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { characterPersona, functionSchema } from "@/lib/character";
import { generateImage } from "@/lib/image-generation";
import { memorySystem } from "@/lib/memory";
import { Message } from "@/types/chat";
import { z } from 'zod'
export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const recentContexts = memorySystem.getRecentContexts();
        const contextPrompt = recentContexts.length > 0 ? 
            `\nRecent image context:\n${memorySystem.serializeContexts()}` : "";

        const result = streamText({
            model: google('gemini-1.5-flash'),
            messages: [
                {
                    role: 'system',
                    content: characterPersona + contextPrompt
                },
                ...messages
            ],
            tools: {
                generateImage: {
                    description: 'Generate an image based on the current context and maintain consistency with previous images',
                    parameters: z.object({
                        description: z.string().describe('Detailed description of the image to generate'),
                        style: z.string().optional().describe('Visual style to maintain consistency'),
                        characters: z.array(z.string()).optional().describe('Characters present in the image'),
                        location: z.string().optional().describe('Location where the image takes place')
                    }),
                    execute: async ({ description, style, characters, location }) => {
                        try {
                            console.log('Generating image with:', { description, style, characters, location });

                            const imageUrl = await generateImage(description, []);
                           

                            // Store the new image context
                            memorySystem.addContext({
                                id: Math.random().toString(36).substring(7),
                                description,
                                url: imageUrl,
                                metadata: {
                                    style: style || 'photorealistic',
                                    characters: characters || ['Rancho'],
                                    location: location || 'college',
                                    timestamp: Date.now()
                                }
                            });

                            return {
                                content: "Here's the image you requested:",
                                images: [imageUrl]
                            };
                        } catch (error) {
                            console.error('Image generation error:', error);
                            return {
                                content: "I apologize, but I couldn't generate the image at this moment. Let's continue our conversation."
                            };
                        }
                    }
                }
            },
            temperature: 0.7,
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error('API Error:', error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
