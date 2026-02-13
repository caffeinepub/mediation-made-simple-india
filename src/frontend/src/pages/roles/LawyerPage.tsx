import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function LawyerPage() {
  const duties = [
    'Advise clients on the mediation process and their rights',
    'Help clients prepare for mediation sessions',
    'Support clients in understanding their interests and options',
    'Maintain client confidentiality',
    'Encourage constructive participation',
    'Assist in reviewing and understanding settlement agreements',
  ];

  const ethicalConsiderations = [
    'Maintain professional integrity and honesty',
    'Avoid undermining the mediation process',
    'Respect the mediator\'s neutral role',
    'Ensure client makes informed decisions',
    'Balance advocacy with facilitation',
    'Uphold confidentiality obligations',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            For Lawyers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your role in supporting clients through mediation
          </p>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">The Lawyer's Role in Mediation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              As a lawyer, your role in mediation differs from traditional litigation. Rather than being an 
              adversary, you serve as an advisor and supporter to your client. Your expertise helps clients 
              understand their legal rights, evaluate options, and make informed decisions during the mediation process.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You play a crucial role in preparing clients for mediation, helping them articulate their interests, 
              and ensuring they understand the implications of any proposed settlement. Your presence can provide 
              clients with confidence and security while they navigate the negotiation process.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Duties to Your Client</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {duties.map((duty, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{duty}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Ethical Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ethicalConsiderations.map((consideration, index) => (
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
            <CardTitle className="font-serif text-2xl">Preparing Clients for Mediation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Effective preparation is key to successful mediation. Help your client understand what to expect, 
              including the informal nature of the process and the mediator's role. Discuss their goals, interests, 
              and priorities, distinguishing between positions and underlying needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Encourage your client to approach mediation with an open mind and a willingness to listen to the 
              other party. Review relevant documents and legal issues, but also help your client think creatively 
              about possible solutions that might not be available through litigation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Constructive Participation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              During mediation, your role is to support your client while allowing them to speak for themselves. 
              Provide legal guidance when needed, but avoid dominating the conversation or creating an adversarial 
              atmosphere. Work collaboratively with the mediator and the other party's counsel to facilitate 
              productive dialogue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Remember that mediation offers opportunities for creative problem-solving that litigation cannot. 
              Help your client explore options that address their interests while also considering the other 
              party's needs. Your constructive participation can significantly increase the chances of reaching 
              a mutually beneficial agreement.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground italic">
              Lawyers who embrace mediation as a valuable tool for dispute resolution provide their clients 
              with more options and often achieve better outcomes than litigation alone can offer.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
