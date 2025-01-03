'use client'
import { useChat } from "@ai-sdk/react"
import ChatInput from "@/components/chatInput";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4   ">
      <Card className="max-h-fit  max-w-4xl mx-auto ">
        <CardHeader className="border-b-2">
          <CardTitle>Chat with Rancho</CardTitle>
        </CardHeader>
        <CardContent className="h-[70vh]"></CardContent>
        <CardFooter className="border-t p-4"><ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} isLoading={false} /></CardFooter>
      </Card>
    </div>
  );
}
