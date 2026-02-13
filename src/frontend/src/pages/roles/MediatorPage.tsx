import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function MediatorPage() {
  const responsibilities = [
    'Maintain strict neutrality and impartiality',
    'Create a safe and respectful environment',
    'Facilitate effective communication between parties',
    'Help parties identify and clarify issues',
    'Assist in generating and evaluating options',
    'Ensure confidentiality of the process',
    'Manage power imbalances appropriately',
    'Document agreements accurately',
  ];

  const skills = [
    'Active listening and empathy',
    'Effective questioning techniques',
    'Conflict management and de-escalation',
    'Cultural sensitivity and awareness',
    'Problem-solving and creativity',
    'Patience and emotional intelligence',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            For Mediators
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Best practices and responsibilities in mediation
          </p>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">The Mediator's Role</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              As a mediator, you serve as a neutral third party who facilitates communication and negotiation 
              between disputing parties. Your role is not to judge, decide, or impose solutions, but to create 
              an environment where parties can communicate effectively, understand each other's perspectives, 
              and work together toward a mutually acceptable resolution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your neutrality and impartiality are fundamental to the mediation process. Parties must trust 
              that you have no stake in the outcome and will treat both sides fairly. This trust is essential 
              for creating the open dialogue necessary for successful mediation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Key Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{responsibility}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Neutrality and Impartiality</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Neutrality means having no stake in the outcome of the dispute. Impartiality means treating both 
              parties fairly and without bias. As a mediator, you must continuously monitor your own reactions 
              and ensure that your personal views, values, or experiences do not influence how you conduct the 
              mediation or interact with the parties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have any conflict of interest or cannot maintain neutrality, you have an ethical obligation 
              to disclose this to the parties and, if necessary, decline to mediate the case.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Confidentiality</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Confidentiality is a cornerstone of mediation. Parties must feel safe to speak openly without 
              fear that their statements will be used against them later. As a mediator, you must maintain 
              strict confidentiality about everything discussed in mediation, subject only to legal exceptions 
              such as threats of harm or legal requirements to report certain information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Information shared in private sessions (caucuses) must remain confidential unless the party 
              explicitly authorizes you to share it with the other party.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Essential Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Process Management</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Effective process management is crucial to successful mediation. You must structure the session 
              to ensure both parties have equal opportunity to be heard, maintain a respectful atmosphere, and 
              guide the conversation toward productive problem-solving. This includes managing emotions, 
              addressing power imbalances, and keeping discussions focused on interests rather than positions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Be flexible in your approach, adapting your techniques to the specific needs of the parties and 
              the nature of the dispute. Use joint sessions for building understanding and private caucuses 
              when needed to explore sensitive issues or reality-test proposals.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground italic">
              Mediators serve as architects of dialogue, creating spaces where understanding can flourish 
              and parties can find their own path to resolution.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
