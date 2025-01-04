import {ImageContext} from '@/types/chat';

class ImageMemorySystem {
    private contexts : ImageContext[] = [];
    private maxContexts: number =  50;

    addContext(context: ImageContext){
        this.contexts.push(context);
        if(this.contexts.length> this.maxContexts){
            this.contexts = this.contexts.slice(-this.maxContexts);
        }
    }

    findRelatedContexts(description: string): ImageContext[] {
        const searchTerms  = description.toLowerCase().split(' ');

        return this.contexts.filter(context =>{
            const contextTerms  = context.description.toLowerCase().split(' ');
            return searchTerms.some(term => contextTerms.some(contextTerm => contextTerm.includes(term)))
        }).sort((a,b)=> b?.metadata?.timestamp - a.metadata.timestamp)
    }

    getContextByLocation( location: string):ImageContext |undefined {
        return this.contexts.find(context => context.metadata.location.toLowerCase() === location.toLowerCase())
    }

    getRecentContexts(limit: number = 5 ): ImageContext[]{
        return [...this.contexts].sort((a,b)=> b.metadata.timestamp - a.metadata.timestamp).slice(0,limit);
    }

    serializeContexts():string{
        return this.contexts.map(context => `${context.description} (Style: ${context.metadata.style}, Location: ${context.metadata.location})`).join('\n');
    }

}

export const memorySystem = new ImageMemorySystem();