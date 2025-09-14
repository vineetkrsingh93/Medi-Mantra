import React, { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ChatInterface } from '@/components/ChatInterface';
import { BadgeSystem } from '@/components/BadgeSystem';
import { Dashboard } from '@/components/Dashboard';
import { VaccinationSchedule } from '@/components/VaccinationSchedule';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'hi' | 'or'>('en');
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        <HeroSection language={language} onStartChat={scrollToChat} />
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={chatRef} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {language === 'en' ? 'Chat with Your AI Health Assistant' :
                   language === 'hi' ? 'अपने AI स्वास्थ्य सहायक से चैट करें' :
                   'ଆପଣଙ୍କର AI ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକଙ୍କ ସହିତ ଚାଟ କରନ୍ତୁ'}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {language === 'en' ? 'Get instant answers to your health questions with voice and text support in multiple languages.' :
                   language === 'hi' ? 'कई भाषाओं में आवाज और टेक्स्ट समर्थन के साथ अपने स्वास्थ्य प्रश्नों के तुरंत उत्तर प्राप्त करें।' :
                   'ଏକାଧିକ ଭାଷାରେ ଧ୍ୱନି ଏବଂ ପାଠ ସମର୍ଥନ ସହିତ ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନଗୁଡ଼ିକର ତୁରନ୍ତ ଉତ୍ତର ପାଆନ୍ତୁ।'}
                </p>
              </div>
              <ChatInterface language={language} />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <BadgeSystem language={language} />
              <VaccinationSchedule language={language} />
            </div>
            
            <Dashboard language={language} />
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {language === 'en' ? 'HealthBot AI' :
                 language === 'hi' ? 'हेल्थबॉट AI' :
                 'ହେଲ୍ଥବଟ AI'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'en' ? 'Your trusted AI companion for better health and wellness.' :
                 language === 'hi' ? 'बेहतर स्वास्थ्य और कल्याण के लिए आपका विश्वसनीय AI साथी।' :
                 'ଉନ୍ନତ ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ କଲ୍ୟାଣ ପାଇଁ ଆପଣଙ୍କର ବିଶ୍ୱସ୍ତ AI ସାଥୀ।'}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                {language === 'en' ? 'Quick Links' :
                 language === 'hi' ? 'त्वरित लिंक' :
                 'ଦ୍ରୁତ ଲିଙ୍କ'}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">
                  {language === 'en' ? 'Health Tips' :
                   language === 'hi' ? 'स्वास्थ्य सुझाव' :
                   'ସ୍ୱାସ୍ଥ୍ୟ ଟିପ୍ସ'}
                </a></li>
                <li><a href="#" className="hover:text-primary">
                  {language === 'en' ? 'Emergency Contacts' :
                   language === 'hi' ? 'आपातकालीन संपर्क' :
                   'ଜରୁରୀକାଳୀନ ଯୋଗାଯୋଗ'}
                </a></li>
                <li><a href="#" className="hover:text-primary">
                  {language === 'en' ? 'Privacy Policy' :
                   language === 'hi' ? 'गोपनीयता नीति' :
                   'ଗୋପନୀୟତା ନୀତି'}
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                {language === 'en' ? 'Contact' :
                 language === 'hi' ? 'संपर्क' :
                 'ଯୋଗାଯୋଗ'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Emergency: 108' :
                 language === 'hi' ? 'आपातकाल: 108' :
                 'ଜରୁରୀକାଳୀନ: 108'}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Health Helpline: 1075' :
                 language === 'hi' ? 'स्वास्थ्य हेल्पलाइन: 1075' :
                 'ସ୍ୱାସ୍ଥ୍ୟ ହେଲ୍ପଲାଇନ: 1075'}
              </p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 HealthBot AI. {language === 'en' ? 'All rights reserved.' :
               language === 'hi' ? 'सभी अधिकार सुरक्षित।' :
               'ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
