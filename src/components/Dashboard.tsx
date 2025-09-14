import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, MapPin, Phone, Clock, Navigation } from 'lucide-react';

const translations = {
  en: {
    outbreaksTitle: 'Current Outbreak Alerts',
    phcTitle: 'Nearby Health Centers',
    level: 'Level',
    distance: 'Distance',
    contact: 'Contact',
    hours: 'Hours',
    navigate: 'Navigate',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    open: '24/7 Open',
    limited: 'Limited Hours',
  },
  hi: {
    outbreaksTitle: 'वर्तमान प्रकोप अलर्ट',
    phcTitle: 'आस-पास के स्वास्थ्य केंद्र',
    level: 'स्तर',
    distance: 'दूरी',
    contact: 'संपर्क',
    hours: 'घंटे',
    navigate: 'नेविगेट',
    high: 'उच्च',
    medium: 'मध्यम',
    low: 'कम',
    open: '24/7 खुला',
    limited: 'सीमित घंटे',
  },
  or: {
    outbreaksTitle: 'ବର୍ତ୍ତମାନ ରୋଗ ବିସ୍ତାର ଚେତାବନୀ',
    phcTitle: 'ନିକଟସ୍ଥ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର',
    level: 'ସ୍ତର',
    distance: 'ଦୂରତା',
    contact: 'ଯୋଗାଯୋଗ',
    hours: 'ଘଣ୍ଟା',
    navigate: 'ନାଭିଗେଟ',
    high: 'ଉଚ୍ଚ',
    medium: 'ମଧ୍ୟମ',
    low: 'କମ',
    open: '24/7 ଖୋଲା',
    limited: 'ସୀମିତ ଘଣ୍ଟା',
  },
};

interface DashboardProps {
  language: 'en' | 'hi' | 'or';
}

const outbreakData = [
  {
    id: 1,
    disease: 'Dengue',
    location: 'Central District',
    level: 'high',
    cases: 45,
    trend: 'increasing'
  },
  {
    id: 2,
    disease: 'Common Cold',
    location: 'Northern Areas',
    level: 'medium',
    cases: 128,
    trend: 'stable'
  },
  {
    id: 3,
    disease: 'Food Poisoning',
    location: 'Market Area',
    level: 'low',
    cases: 12,
    trend: 'decreasing'
  }
];

const phcData = [
  {
    id: 1,
    name: 'City Primary Health Center',
    distance: '0.8 km',
    contact: '+91 98765 43210',
    hours: 'open',
    services: ['General Medicine', 'Vaccination', 'Emergency']
  },
  {
    id: 2,
    name: 'Community Health Clinic',
    distance: '1.2 km',
    contact: '+91 98765 43211',
    hours: 'limited',
    services: ['Pediatrics', 'Women Health', 'Lab Tests']
  },
  {
    id: 3,
    name: 'Government Hospital',
    distance: '2.1 km',
    contact: '+91 98765 43212',
    hours: 'open',
    services: ['All Specialties', 'ICU', 'Surgery']
  }
];

export const Dashboard: React.FC<DashboardProps> = ({ language }) => {
  const t = translations[language];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'high': return t.high;
      case 'medium': return t.medium;
      case 'low': return t.low;
      default: return level;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Outbreak Alerts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            {t.outbreaksTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {outbreakData.map((outbreak) => (
              <div
                key={outbreak.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-shadow"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{outbreak.disease}</h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {outbreak.location} • {outbreak.cases} cases
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getLevelColor(outbreak.level) as any}>
                    {t.level}: {getLevelText(outbreak.level)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nearby PHCs */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-secondary" />
            {t.phcTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-1">
            {phcData.map((phc) => (
              <div
                key={phc.id}
                className="p-4 border rounded-lg hover:shadow-soft transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-foreground">{phc.name}</h4>
                  <Badge variant={phc.hours === 'open' ? 'success' : 'warning'}>
                    <Clock className="h-3 w-3 mr-1" />
                    {phc.hours === 'open' ? t.open : t.limited}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-3 w-3" />
                    <span>{t.distance}: {phc.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    <span>{t.contact}: {phc.contact}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {phc.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};