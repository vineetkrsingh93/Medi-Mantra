import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Globe, LogIn, UserPlus } from 'lucide-react';

const translations = {
  en: {
    title: 'Medi Mitra',
    login: 'Login',
    signup: 'Sign Up',
    language: 'Language',
    loginTitle: 'Welcome Back',
    signupTitle: 'Create Account',
    email: 'Email',
    password: 'Password',
    name: 'Full Name',
    phone: 'Phone Number',
  },
  hi: {
    title: 'मेडी मित्रा',
    login: 'लॉगिन',
    signup: 'साइन अप',
    language: 'भाषा',
    loginTitle: 'वापसी में स्वागत',
    signupTitle: 'खाता बनाएं',
    email: 'ईमेल',
    password: 'पासवर्ड',
    name: 'पूरा नाम',
    phone: 'फोन नंबर',
  },
  or: {
    title: 'ମଧ୍ୟ ମିତ୍ର |',
    login: 'ଲଗଇନ',
    signup: 'ସାଇନ ଅପ',
    language: 'ଭାଷା',
    loginTitle: 'ସ୍ୱାଗତମ',
    signupTitle: 'ଖାତା ସୃଷ୍ଟି କରନ୍ତୁ',
    email: 'ଇମେଲ',
    password: 'ପାସୱର୍ଡ',
    name: 'ପୂର୍ଣ୍ଣ ନାମ',
    phone: 'ଫୋନ ନମ୍ବର',
  },
};

interface HeaderProps {
  language: 'en' | 'hi' | 'or';
  onLanguageChange: (lang: 'en' | 'hi' | 'or') => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow-md">
            <img
              src="/logo.png"
              alt="Medi Mantra Logo"
              className="h-8 w-8 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-foreground">{t.title}</h1>
        </div>

        {/* Language Selector + Buttons */}
        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-40">
              <Globe className="h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिंदी</SelectItem>
              <SelectItem value="or">ଓଡ଼ିଆ</SelectItem>
            </SelectContent>
          </Select>

          {/* Login Dialog */}
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <LogIn className="h-4 w-4" />
                {t.login}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t.loginTitle}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t.password}</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full" variant="hero">
                  {t.login}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Signup Dialog */}
          <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" size="sm">
                <UserPlus className="h-4 w-4" />
                {t.signup}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t.signupTitle}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name}</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">{t.email}</Label>
                  <Input id="signup-email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">{t.password}</Label>
                  <Input id="signup-password" type="password" />
                </div>
                <Button className="w-full" variant="hero">
                  {t.signup}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};
