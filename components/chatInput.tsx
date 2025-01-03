import { SendHorizonal } from "lucide-react"
import { Input } from "./ui/input"

interface ChatInputProps {
    input:string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    isLoading: boolean
}

export default function ChatInput({input, handleInputChange, handleSubmit, isLoading}: ChatInputProps){ 

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4 md:gap-2 w-full">
            <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message....."
                disabled={isLoading}
                
            />
            <button type="submit" disabled={isLoading} className="bg-gray-900 text-white p-2 rounded-[10px]">
                <SendHorizonal className="h-5 w-5" />
                <span className="sr-only"> Send Message</span>
            </button>
        </form>
    )
}