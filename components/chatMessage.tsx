import Image from 'next/image'
import { useChat } from "@ai-sdk/react";
type Message = ReturnType<typeof useChat>['messages'][number];
type ChatMessageProps={
    message: Message
}
export default function chatMessage({message}: ChatMessageProps){
    const isUser = message.role === 'user'
    const images = message?.toolInvocations?.flatMap(tool => 
        'result' in tool && tool.result?.images ? tool.result.images : []
      ) || [];
    return (
        <div className={`flex  items-start gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
             <div
        className={`flex flex-col gap-2 ${
          isUser ? 'items-end' : 'items-start'
        }`}
      >
            <div className={`rounded-lg p-4  max-w-[90%]  ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
            {
                images.length > 0 && (
                    <div className="grid gap-2">
                            {images.map((image, index) => (
                                <div key={index}>
                                    <Image
                                    src={image}
                                    alt="image"
                                    width={400}
                                    height={400}
                                    className=" max-w-52 max-h-52 sm:max-h-[400px] sm:max-w-[400px]"
                                    />

                                </div>
                            ))}
                    </div>
                )
            }
            </div>
        </div>
    )
}