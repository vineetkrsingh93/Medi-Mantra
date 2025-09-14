import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Send, Bot, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const translations = {
  en: {
    placeholder: 'Ask me about your health...',
    listening: 'Listening...',
    send: 'Send',
    greeting: 'Hello! I\'m your AI health assistant. How can I help you today?',
  },
  hi: {
    placeholder: 'अपने स्वास्थ्य के बारे में पूछें...',
    listening: 'सुन रहा हूं...',
    send: 'भेजें',
    greeting: 'नमस्ते! मैं आपका AI स्वास्थ्य सहायक हूं। मैं आज आपकी कैसे मदद कर सकता हूं?',
  },
  or: {
    placeholder: 'ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ବିଷୟରେ ପଚାରନ୍ତୁ...',
    listening: 'ଶୁଣୁଛି...',
    send: 'ପଠାନ୍ତୁ',
    greeting: 'ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କର AI ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ। ଆଜି ମୁଁ ଆପଣଙ୍କୁ ଦଦିਮਟହ କଦਖ ସାହାଯ୍ୟ କରିପାରିବି?',
  },
};

interface ChatInterfaceProps {
  language: 'en' | 'hi' | 'or';
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ language }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: translations[language].greeting,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const newRecognition = new SpeechRecognition();
      newRecognition.continuous = false;
      newRecognition.interimResults = false;
      newRecognition.lang = language === 'hi' ? 'hi-IN' : language === 'or' ? 'or-IN' : 'en-US';
      setRecognition(newRecognition);
    }
  }, [language]);

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(input, language),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string, lang: 'en' | 'hi' | 'or'): string => {
    const responses = {
      en: [
        "That's a great question about your health. Let me help you with that.",
        "Based on current health guidelines, here's what I recommend...",
        "It's important to consult with a healthcare professional for personalized advice.",
        "I can provide general health information. For specific concerns, please visit a doctor.",
      ],
      hi: [
        "यह आपके स्वास्थ्य के बारे में एक बेहतरीन सवाल है। मैं इसमें आपकी मदद करता हूं।",
        "वर्तमान स्वास्थ्य दिशानिर्देशों के आधार पर, यहां मेरी सिफारिश है...",
        "व्यक्तिगत सलाह के लिए स्वास्थ्य पेशेवर से सलाह लेना महत्वपूर्ण है।",
        "मैं सामान्य स्वास्थ्य जानकारी प्रदान कर सकता हूं। विशिष्ट चिंताओं के लिए कृपया डॉक्टर से मिलें।",
      ],
      or: [
        "ଏହା ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ବିଷୟରେ ଏକ ଉତ୍କୃଷ୍ଟ ପ୍ରଶ୍ନ। ମୁଁ ଏଥିରେ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିବି।",
        "ବର୍ତ୍ତମାନ ସ୍ୱାସ୍ଥ୍ୟ ନିର୍ଦ୍ଦେଶାବଳୀ ଆଧାରରେ, ଏଠାରେ ମୋର ସୁପାରିଶ...",
        "ବ୍ୟକ୍ତିଗତ ପରାମର୍ଶ ପାଇଁ ସ୍ୱାସ୍ଥ୍ୟ ପେଶାଦାରଙ୍କ ସହିତ ପରାମର୍ଶ କରିବା ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।",
        "ମୁଁ ସାଧାରଣ ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ପ୍ରଦାନ କରିପାରିବି। ନିର୍ଦ୍ଦିଷ୍ଟ ଚିନ୍ତା ପାଇଁ ଦୟାକରି ଡାକ୍ତରଙ୍କୁ ଭେଟନ୍ତୁ।",
      ],
    };
    
    return responses[lang][Math.floor(Math.random() * responses[lang].length)];
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 shadow-card">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">AI Health Assistant</h3>
        </div>
        
        <ScrollArea className="h-80 w-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex gap-2 max-w-[80%] ${
                    message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {message.type === 'user' ? (
                      <User className="h-6 w-6 text-accent" />
                    ) : (
                      <Bot className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? t.listening : t.placeholder}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1"
            disabled={isListening}
          />
          
          <Button
            variant={isListening ? "destructive" : "outline"}
            size="icon"
            onClick={isListening ? stopListening : startListening}
            disabled={!recognition}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          
          <Button onClick={sendMessage} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};