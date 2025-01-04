'use client'
import { useChat } from "@ai-sdk/react"
import ChatInput from "@/components/chatInput";
import { Message } from "@/types/chat"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ChatMessage from "@/components/chatMessage";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const arr: Message[] = [
    {
      id: '1',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01',
      images:['/image1.jpg','/image2.jpg','/image3.jpg']
    },
    {
      id: '3',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '4',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    },
    {
      id: '5',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '6',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    },
    {
      id: '7',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '8',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    },
    {
      id: '9',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '10',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    },
    {
      id: '11',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '12',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    },
    {
      id: '13',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '14',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    },
    {
      id: '15',
      role: 'user',
      content: 'Hello',
      timestamp: '12:00'
    },
    {
      id: '16',
      role: 'assistant',
      content: 'Hello',
      timestamp: '12:01'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4   ">
      <Card className="max-h-fit  max-w-4xl mx-auto ">
        <CardHeader className="border-b-2">
          <CardTitle>Chat with Rancho</CardTitle>
        </CardHeader>
        <CardContent className="h-[70vh] overflow-y-auto p-4 space-y-4">
          {arr.map((mes: Message) => (
            <ChatMessage key={mes.id} message={mes} />
          ))}
        </CardContent>
        <CardFooter className="border-t p-4"><ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} isLoading={false} /></CardFooter>
      </Card>
    </div>
  );
}
