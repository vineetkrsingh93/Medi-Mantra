import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Syringe, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const translations = {
  en: {
    title: 'Vaccination Schedule',
    upcoming: 'Upcoming',
    completed: 'Completed',
    overdue: 'Overdue',
    bookAppointment: 'Book Appointment',
    reschedule: 'Reschedule',
    markComplete: 'Mark Complete',
    age: 'Age',
    nextDue: 'Next Due',
    location: 'Location',
  },
  hi: {
    title: 'टीकाकरण अनुसूची',
    upcoming: 'आगामी',
    completed: 'पूर्ण',
    overdue: 'देर से',
    bookAppointment: 'अपॉइंटमेंट बुक करें',
    reschedule: 'पुनर्निर्धारण',
    markComplete: 'पूर्ण चिह्नित करें',
    age: 'उम्र',
    nextDue: 'अगली नियत तारीख',
    location: 'स्थान',
  },
  or: {
    title: 'ଟିକାକରଣ କାର୍ଯ୍ୟସୂଚୀ',
    upcoming: 'ଆଗାମୀ',
    completed: 'ସମ୍ପୂର୍ଣ୍ଣ',
    overdue: 'ବିଳମ୍ବିତ',
    bookAppointment: 'ଆପଏଣ୍ଟମେଣ୍ଟ ବୁକ କରନ୍ତୁ',
    reschedule: 'ପୁନଃନିର୍ଧାରଣ',
    markComplete: 'ସମ୍ପୂର୍ଣ୍ଣ ଚିହ୍ନିତ କରନ୍ତୁ',
    age: 'ବୟସ',
    nextDue: 'ପରବର୍ତ୍ତୀ ନିୟତ ତାରିଖ',
    location: 'ସ୍ଥାନ',
  },
};

interface VaccinationScheduleProps {
  language: 'en' | 'hi' | 'or';
}

const vaccinationData = [
  {
    id: 1,
    vaccine: 'COVID-19 Booster',
    ageGroup: 'Adult',
    dueDate: '2024-02-15',
    status: 'upcoming',
    location: 'City Health Center',
    description: 'Annual booster dose for continued protection'
  },
  {
    id: 2,
    vaccine: 'Influenza (Flu)',
    ageGroup: 'Adult',
    dueDate: '2024-01-20',
    status: 'overdue',
    location: 'Community Clinic',
    description: 'Seasonal flu vaccination'
  },
  {
    id: 3,
    vaccine: 'Hepatitis B',
    ageGroup: 'Adult',
    dueDate: '2023-12-10',
    status: 'completed',
    location: 'Government Hospital',
    description: 'Hepatitis B protection series'
  },
  {
    id: 4,
    vaccine: 'Tetanus (Td)',
    ageGroup: 'Adult',
    dueDate: '2024-06-30',
    status: 'upcoming',
    location: 'Primary Health Center',
    description: '10-year tetanus booster'
  }
];

export const VaccinationSchedule: React.FC<VaccinationScheduleProps> = ({ language }) => {
  const t = translations[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'upcoming': return 'default';
      case 'overdue': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'upcoming': return Clock;
      case 'overdue': return AlertCircle;
      default: return Clock;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return t.completed;
      case 'upcoming': return t.upcoming;
      case 'overdue': return t.overdue;
      default: return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'or' ? 'or-IN' : 'en-US');
  };

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Syringe className="h-5 w-5 text-secondary" />
          {t.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {vaccinationData.map((vaccination) => {
            const StatusIcon = getStatusIcon(vaccination.status);
            return (
              <div
                key={vaccination.id}
                className="p-4 border rounded-lg hover:shadow-soft transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      {vaccination.vaccine}
                      <Badge variant={getStatusColor(vaccination.status) as any} className="text-xs">
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {getStatusText(vaccination.status)}
                      </Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {vaccination.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{t.nextDue}: {formatDate(vaccination.dueDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{t.age}: {vaccination.ageGroup}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span>{t.location}: {vaccination.location}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    {vaccination.status === 'upcoming' && (
                      <Button variant="outline" size="sm">
                        {t.bookAppointment}
                      </Button>
                    )}
                    {vaccination.status === 'overdue' && (
                      <>
                        <Button variant="outline" size="sm">
                          {t.reschedule}
                        </Button>
                        <Button variant="success" size="sm">
                          {t.markComplete}
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};