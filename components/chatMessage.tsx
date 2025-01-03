import { Message } from "@/types/chat"

type ChatMessageProps={
    message: Message
}
export default function chatMessage({message}: ChatMessageProps){
    const isUser = message.role === 'user'

    return (

        <div className="flex">
            
        </div>
    )
}