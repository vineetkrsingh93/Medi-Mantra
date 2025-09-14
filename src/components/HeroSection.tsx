import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Bot, Heart } from 'lucide-react';
import heroImage from '@/assets/healthcare-hero.jpg';

const translations = {
  en: {
    title: 'Your AI-Powered Health Companion',
    subtitle: 'Get instant health guidance, track your wellness journey, and stay informed about health alerts in your area.',
    cta: 'Start Chat',
    features: ['24/7 Available', 'Multi-language Support', 'Personalized Care'],
  },
  hi: {
    title: 'आपका AI-संचालित स्वास्थ्य साथी',
    subtitle: 'तुरंत स्वास्थ्य मार्गदर्शन प्राप्त करें, अपनी कल्याण यात्रा को ट्रैक करें, और अपने क्षेत्र में स्वास्थ्य अलर्ट के बारे में सूचित रहें।',
    cta: 'चैट शुरू करें',
    features: ['24/7 उपलब्ध', 'बहु-भाषा समर्थन', 'व्यक्तिगत देखभाल'],
  },
  or: {
    title: 'ଆପଣଙ୍କର AI-ଶକ୍ତିଶାଳୀ ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ',
    subtitle: 'ତୁରନ୍ତ ସ୍ୱାସ୍ଥ୍ୟ ନିର୍ଦ୍ଦେଶନା ପାଆନ୍ତୁ, ଆପଣଙ୍କର କଲ୍ୟାଣ ଯାତ୍ରାକୁ ଟ୍ରାକ କରନ୍ତୁ, ଏବଂ ଆପଣଙ୍କ ଅଞ୍ଚଳରେ ସ୍ୱାସ୍ଥ୍ୟ ଚେତାବନୀ ବିଷୟରେ ସୂଚିତ ରହନ୍ତୁ।',
    cta: 'ଚାଟ ଆରମ୍ଭ କରନ୍ତୁ',
    features: ['24/7 ଉପଲବ୍ଧ', 'ବହୁ-ଭାଷା ସମର୍ଥନ', 'ବ୍ୟକ୍ତିଗତ ଯତ୍ନ'],
  },
};

interface HeroSectionProps {
  language: 'en' | 'hi' | 'or';
  onStartChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language, onStartChat }) => {
  const t = translations[language];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.subtitle}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur rounded-full border"
                >
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={onStartChat}
                className="text-lg px-8 py-6"
              >
                <MessageCircle className="h-5 w-5" />
                {t.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Bot className="h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Healthcare AI Assistant"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};