"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X } from "lucide-react";

type Message = {
  text: string;
  isBot: boolean;
};

const initialMessages: Message[] = [
  {
    text: "Bonjour! Je suis l'assistant virtuel de Haussmann Sols Résine. Comment puis-je vous aider aujourd'hui?",
    isBot: true,
  },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse1 = {
        text: "Je vous remercie pour votre message. Un membre de notre équipe vous contactera dans les plus brefs délais. Pour une réponse immédiate, n'hésitez pas à nous contacter par téléphone ou WhatsApp.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse1]);
      
      setTimeout(() => {
        const botResponse2 = {
          text: "Actuellement, tous nos opérateurs sont occupés. Vous pouvez nous appeler au : 06 49 93 36 45 ou nous contacter sur WhatsApp.",
          isBot: true,
        };
        setMessages((prev) => [...prev, botResponse2]);
        setLoading(false);
      }, 1500);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0 bg-[#A31115] hover:bg-[#8a0f13] shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-[350px] h-[500px] flex flex-col shadow-xl">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-[#A31115]" />
          <h3 className="font-semibold">Assistant Haussmann</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.isBot
                    ? "bg-gray-100 text-gray-900"
                    : "bg-[#A31115] text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-lg px-4 py-2 max-w-[80%] bg-gray-100 text-gray-900 animate-pulse">
                ...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Écrivez votre message..."
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-[#A31115] hover:bg-[#8a0f13]">
            Envoyer
          </Button>
        </div>
      </div>
    </Card>
  );
}
