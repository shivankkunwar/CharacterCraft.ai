import { Message } from "@/types/chat"
import Image from 'next/image'

type ChatMessageProps={
    message: Message
}
export default function chatMessage({message}: ChatMessageProps){
    const isUser = message.role === 'user'

    return (
        <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
             <div
        className={`flex flex-col gap-2 ${
          isUser ? 'items-end' : 'items-start'
        }`}
      >
            <div className={`rounded-lg p-4  ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
            {
                message.images && message.images.length > 0 && (
                    <div className="grid gap-2">
                            {message.images.map((image, index) => (
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