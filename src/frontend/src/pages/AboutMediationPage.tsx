import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function AboutMediationPage() {
  const benefits = [
    'Cost-effective compared to litigation',
    'Faster resolution of disputes',
    'Confidential and private process',
    'Preserves relationships between parties',
    'Flexible and customizable solutions',
    'Parties maintain control over outcomes',
    'Less adversarial than court proceedings',
    'Reduces burden on judicial system',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            About Mediation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding mediation as an effective alternative dispute resolution mechanism in India
          </p>
        </div>

        <Separator />

        {/* What is Mediation */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">What is Mediation?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Mediation is a voluntary and confidential process where a neutral third party, called a mediator, 
              helps disputing parties communicate and negotiate to reach a mutually acceptable solution. Unlike 
              a judge or arbitrator, the mediator does not impose a decision but facilitates dialogue and 
              understanding between the parties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The process is based on the principle that parties themselves are best positioned to understand 
              their needs and craft solutions that work for everyone involved. Mediation empowers parties to 
              take ownership of the resolution process and outcomes.
            </p>
          </CardContent>
        </Card>

        {/* Evolution */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Evolution of Mediation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Mediation has ancient roots in Indian culture, where community elders and panchayats traditionally 
              resolved disputes through dialogue and consensus. Modern mediation in India has evolved significantly, 
              particularly since the late 20th century, as the legal system recognized the need for alternative 
              dispute resolution mechanisms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Code of Civil Procedure was amended in 2002 to include Section 89, which empowers courts to 
              refer disputes to alternative dispute resolution methods including mediation. This marked a significant 
              shift toward institutionalizing mediation within the formal legal framework.
            </p>
          </CardContent>
        </Card>

        {/* Application in India */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Mediation in India Today</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              India has embraced mediation across various contexts. Court-annexed mediation centers operate in 
              many High Courts and district courts, offering parties an opportunity to resolve disputes before 
              or during litigation. The Mediation Act, 2023, provides a comprehensive legal framework for 
              mediation in India, covering both pre-litigation and court-referred mediation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mediation is now widely used in family disputes, commercial conflicts, consumer complaints, 
              workplace issues, and community disputes. Many organizations and institutions have established 
              mediation cells to provide accessible dispute resolution services to the public.
            </p>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Benefits of Mediation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Closing Note */}
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground italic">
              Mediation represents a shift from adversarial to collaborative problem-solving, 
              offering parties a dignified and effective path to resolution.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
