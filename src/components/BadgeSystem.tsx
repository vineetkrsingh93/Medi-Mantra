import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Award, Shield, Heart, Star, Zap, Users } from 'lucide-react';

const translations = {
  en: {
    title: 'Your Achievements',
    progress: 'Overall Progress',
    earned: 'Earned',
    locked: 'Locked',
    badges: {
      'health-champion': 'Health Champion',
      'prevention-master': 'Prevention Master',
      'wellness-warrior': 'Wellness Warrior',
      'knowledge-seeker': 'Knowledge Seeker',
      'community-helper': 'Community Helper',
      'streak-keeper': 'Streak Keeper',
    },
    descriptions: {
      'health-champion': 'Completed 10 health assessments',
      'prevention-master': 'Learned about disease prevention',
      'wellness-warrior': 'Maintained healthy habits for 30 days',
      'knowledge-seeker': 'Completed all educational modules',
      'community-helper': 'Shared health tips with friends',
      'streak-keeper': 'Used the app daily for 7 days',
    },
  },
  hi: {
    title: 'आपकी उपलब्धियां',
    progress: 'समग्र प्रगति',
    earned: 'अर्जित',
    locked: 'बंद',
    badges: {
      'health-champion': 'स्वास्थ्य चैंपियन',
      'prevention-master': 'रोकथाम मास्टर',
      'wellness-warrior': 'कल्याण योद्धा',
      'knowledge-seeker': 'ज्ञान खोजी',
      'community-helper': 'समुदायिक सहायक',
      'streak-keeper': 'निरंतरता रक्षक',
    },
    descriptions: {
      'health-champion': '10 स्वास्थ्य मूल्यांकन पूरे किए',
      'prevention-master': 'रोग रोकथाम के बारे में सीखा',
      'wellness-warrior': '30 दिनों तक स्वस्थ आदतें बनाए रखीं',
      'knowledge-seeker': 'सभी शैक्षिक मॉड्यूल पूरे किए',
      'community-helper': 'दोस्तों के साथ स्वास्थ्य सुझाव साझा किए',
      'streak-keeper': '7 दिनों तक रोजाना ऐप का उपयोग किया',
    },
  },
  or: {
    title: 'ଆପଣଙ୍କର ସଫଳତା',
    progress: 'ସାମଗ୍ରିକ ପ୍ରଗତି',
    earned: 'ଅର୍ଜିତ',
    locked: 'ବନ୍ଦ',
    badges: {
      'health-champion': 'ସ୍ୱାସ୍ଥ୍ୟ ଚାମ୍ପିୟନ',
      'prevention-master': 'ପ୍ରତିରୋଧ ମାଷ୍ଟର',
      'wellness-warrior': 'କଲ୍ୟାଣ ଯୋଦ୍ଧା',
      'knowledge-seeker': 'ଜ୍ଞାନ ଅନ୍ୱେଷକ',
      'community-helper': 'ସମୁଦାୟ ସହାୟକ',
      'streak-keeper': 'ଧାରାବାହିକତା ରକ୍ଷକ',
    },
    descriptions: {
      'health-champion': '10ଟି ସ୍ୱାସ୍ଥ୍ୟ ମୂଲ୍ୟାଙ୍କନ ସମ୍ପୂର୍ଣ୍ଣ କଲେ',
      'prevention-master': 'ରୋଗ ପ୍ରତିରୋଧ ବିଷୟରେ ଶିଖିଲେ',
      'wellness-warrior': '30 ଦିନ ପାଇଁ ସୁସ୍ଥ ଅଭ୍ୟାସ ବଜାୟ ରଖିଲେ',
      'knowledge-seeker': 'ସମସ୍ତ ଶିକ୍ଷାଗତ ମଡ୍ୟୁଲ ସମ୍ପୂର୍ଣ୍ଣ କଲେ',
      'community-helper': 'ବନ୍ଧୁଙ୍କ ସହିତ ସ୍ୱାସ୍ଥ୍ୟ ଟିପ୍ସ ଅଂଶୀଦାର କଲେ',
      'streak-keeper': '7 ଦିନ ନିତିଦିନ ଆପ ବ୍ୟବହାର କଲେ',
    },
  },
};

interface BadgeSystemProps {
  language: 'en' | 'hi' | 'or';
}

const badgeData = [
  { id: 'health-champion', icon: Award, earned: true, color: 'bg-yellow-500' },
  { id: 'prevention-master', icon: Shield, earned: true, color: 'bg-blue-500' },
  { id: 'wellness-warrior', icon: Heart, earned: true, color: 'bg-red-500' },
  { id: 'knowledge-seeker', icon: Star, earned: false, color: 'bg-purple-500' },
  { id: 'community-helper', icon: Users, earned: false, color: 'bg-green-500' },
  { id: 'streak-keeper', icon: Zap, earned: false, color: 'bg-orange-500' },
];

export const BadgeSystem: React.FC<BadgeSystemProps> = ({ language }) => {
  const t = translations[language];
  const earnedBadges = badgeData.filter(badge => badge.earned);
  const progressPercentage = (earnedBadges.length / badgeData.length) * 100;

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          {t.title}
        </CardTitle>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{t.progress}</span>
            <span>{earnedBadges.length}/{badgeData.length}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badgeData.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={badge.id}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 ${
                  badge.earned
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border bg-muted/30 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    badge.earned ? badge.color : 'bg-muted'
                  }`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-sm text-center mb-1">
                  {t.badges[badge.id as keyof typeof t.badges]}
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  {t.descriptions[badge.id as keyof typeof t.descriptions]}
                </p>
                <Badge
                  variant={badge.earned ? "default" : "secondary"}
                  className="mt-2 text-xs"
                >
                  {badge.earned ? t.earned : t.locked}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};