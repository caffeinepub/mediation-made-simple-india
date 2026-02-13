import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function CommonPersonPage() {
  const expectations = [
    'Be open to dialogue and willing to listen',
    'Come prepared with relevant documents',
    'Respect the other party and the process',
    'Be honest about your needs and concerns',
    'Consider creative solutions',
    'Maintain confidentiality',
  ];

  const rights = [
    'Right to participate voluntarily',
    'Right to withdraw at any time',
    'Right to confidentiality',
    'Right to consult a lawyer',
    'Right to be heard and respected',
    'Right to make your own decisions',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            For Common Persons
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding your role and rights in mediation
          </p>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Your Role as a Party</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              As a party in mediation, you are at the center of the process. Unlike in court where a judge 
              decides your case, in mediation you have the power to shape the outcome. Your active participation, 
              honesty, and willingness to find common ground are essential to reaching a resolution that works for you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The mediator is there to help you communicate effectively with the other party, but they won't 
              tell you what to do. You remain in control of your decisions throughout the process.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">What to Expect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expectations.map((expectation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{expectation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Your Rights in Mediation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {rights.map((right, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{right}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Preparing for Mediation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Before attending mediation, gather all relevant documents related to your dispute. Think about 
              what you want to achieve and what you're willing to compromise on. Consider the other party's 
              perspective and what might be important to them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns, don't hesitate to ask the mediator before the session begins. 
              You may also want to consult with a lawyer to understand your legal rights and options.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground italic">
              Remember: Mediation is your opportunity to be heard and to find a solution that works for you. 
              Approach it with an open mind and a willingness to communicate.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
