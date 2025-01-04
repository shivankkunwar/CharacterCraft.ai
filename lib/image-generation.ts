import Together from "together-ai";
import { ImageContext } from "@/types/chat";
import { memorySystem } from "@/lib/memory";


const together =  new Together({
    apiKey: process.env.TOGETHER_API_KEY,
})


export async function generateImage(description: string, relatedContext: ImageContext[]=[]): Promise<string>{
    console.log(relatedContext)
    try{
        let prompt = description;
        if(relatedContext.length>0){
            prompt += '\nMaintain consistency with previous image:\n'+ relatedContext.map(context => `- ${context.description}`).join('\n');
        }

        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt,
            width: 1024,
            height: 768,
            steps: 1,
            n: 1,
            response_format: "base64",
          })

        if(!response.data?.[0]?.b64_json){
            throw new Error("Failed to generate image");
        }

        const imageUrl = `data:image/jpeg;base64,${response.data[0].b64_json}`;
     
        return imageUrl

          
      
    }catch(error){
        console.error("Error generating image", error);
        throw new Error('FAiled to generate image');
    }
}

