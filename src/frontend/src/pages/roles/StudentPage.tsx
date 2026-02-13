import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function StudentPage() {
  const learningOpportunities = [
    'Mediation training courses and workshops',
    'Internships with mediation centers',
    'Observing mediation sessions (with consent)',
    'Academic research on dispute resolution',
    'Participation in moot mediation competitions',
    'Volunteering with community mediation programs',
  ];

  const careerPaths = [
    'Professional mediator in private practice',
    'Court-annexed mediation center mediator',
    'Corporate or organizational mediator',
    'Family mediation specialist',
    'Community mediation facilitator',
    'Mediation trainer or educator',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            For Students
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring mediation education and career opportunities
          </p>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Why Study Mediation?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Mediation is a growing field in India, offering exciting opportunities for students interested 
              in law, conflict resolution, psychology, social work, and related disciplines. As the legal 
              system increasingly recognizes the value of alternative dispute resolution, the demand for 
              skilled mediators continues to grow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Studying mediation equips you with valuable skills in communication, negotiation, problem-solving, 
              and conflict management—skills that are useful in any career path. Whether you plan to become a 
              professional mediator or simply want to enhance your ability to resolve conflicts constructively, 
              mediation education offers significant benefits.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Learning Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {learningOpportunities.map((opportunity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{opportunity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Understanding Mediation Roles</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              To understand mediation fully, it's important to learn about the different roles involved:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>
                <strong>Parties:</strong> The individuals or organizations in dispute who participate voluntarily 
                and make their own decisions about resolution.
              </li>
              <li>
                <strong>Mediator:</strong> The neutral facilitator who helps parties communicate and negotiate 
                but does not impose decisions.
              </li>
              <li>
                <strong>Lawyers:</strong> Legal advisors who support parties in understanding their rights and 
                evaluating options.
              </li>
              <li>
                <strong>Referral Judges:</strong> Judges who identify suitable cases for mediation and refer 
                them to mediation centers.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Career Pathways</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {careerPaths.map((path, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{path}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              If you're interested in pursuing mediation, start by taking courses or workshops on conflict 
              resolution and mediation. Many law schools and universities now offer specialized programs in 
              alternative dispute resolution. Look for opportunities to observe mediations or intern with 
              mediation centers to gain practical experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Consider joining student organizations focused on mediation or participating in moot mediation 
              competitions. These experiences will help you develop your skills and build a network in the field. 
              Remember that becoming an effective mediator requires both theoretical knowledge and practical 
              experience, so seek out diverse learning opportunities.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground italic">
              The future of dispute resolution in India is bright, and students who invest in learning 
              mediation skills today will be well-positioned to contribute to a more collaborative and 
              effective justice system tomorrow.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
