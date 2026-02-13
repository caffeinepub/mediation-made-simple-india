import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function JudgePage() {
  const referralConsiderations = [
    'Nature of the dispute and relationship between parties',
    'Willingness of parties to participate in mediation',
    'Complexity of legal issues involved',
    'Stage of litigation proceedings',
    'Potential for preserving ongoing relationships',
    'Time and cost considerations for parties',
  ];

  const benefits = [
    'Reduces court backlog and pendency',
    'Provides parties with faster resolution',
    'Preserves relationships between parties',
    'Offers flexible and creative solutions',
    'Reduces litigation costs for parties',
    'Increases party satisfaction with outcomes',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            For Judges
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Effective mediation referrals and court-connected processes
          </p>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">The Referral Judge's Role</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              As a referral judge, you play a crucial role in identifying cases suitable for mediation and 
              encouraging parties to consider this alternative dispute resolution method. Your endorsement of 
              mediation can significantly influence parties' willingness to participate and their perception 
              of the process.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Under Section 89 of the Code of Civil Procedure and the Mediation Act, 2023, courts have the 
              power to refer disputes to mediation at various stages of litigation. Your thoughtful exercise 
              of this power can help parties achieve faster, more satisfactory resolutions while reducing the 
              burden on the judicial system.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Referral Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {referralConsiderations.map((consideration, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{consideration}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Encouraging Mediation Appropriately</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              When referring cases to mediation, it's important to explain the process and its benefits to 
              parties in a balanced manner. Emphasize that mediation is voluntary and that parties retain 
              control over the outcome. Avoid creating the impression that mediation is mandatory or that 
              parties will be penalized for not participating.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Highlight the potential advantages of mediation, such as faster resolution, cost savings, 
              confidentiality, and the opportunity to craft creative solutions. At the same time, ensure 
              parties understand that they can return to court if mediation does not result in an agreement.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Court-Connected Mediation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Court-annexed mediation centers provide a structured framework for mediation within the judicial 
              system. When referring cases to these centers, ensure that parties understand the process, 
              timelines, and what to expect. Coordinate with mediation centers to ensure smooth referrals and 
              timely reporting of outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If parties reach an agreement through mediation, the settlement can be recorded as a consent 
              decree or order, making it enforceable. If mediation does not result in settlement, the case 
              returns to your court for adjudication, and the litigation process continues without prejudice 
              to either party.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Benefits of Mediation Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Supporting the Mediation Ecosystem</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Your support for mediation extends beyond individual case referrals. By consistently encouraging 
              mediation where appropriate, you help build a culture of collaborative dispute resolution within 
              the legal system. This benefits not only the parties in individual cases but also contributes to 
              a more efficient and accessible justice system overall.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Consider participating in training programs for mediators, speaking at mediation awareness events, 
              and sharing your experiences with mediation referrals with fellow judges. Your leadership in 
              promoting mediation can have a lasting impact on how disputes are resolved in your jurisdiction.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground italic">
              Judges who actively support mediation help create a justice system that offers parties 
              meaningful choices in how their disputes are resolved, ultimately serving the interests 
              of justice more effectively.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
