import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

export default function MediationProcessPage() {
  const [mode, setMode] = useState<'simple' | 'detailed'>('simple');

  const simpleSteps = [
    {
      title: '1. Introduction',
      content: 'The mediator welcomes everyone, explains the process, and sets ground rules for respectful communication.',
    },
    {
      title: '2. Sharing Perspectives',
      content: 'Each party gets a chance to explain their side of the story without interruption.',
    },
    {
      title: '3. Identifying Issues',
      content: 'The mediator helps identify the key issues that need to be resolved.',
    },
    {
      title: '4. Exploring Solutions',
      content: 'Parties brainstorm possible solutions together with the mediator\'s guidance.',
    },
    {
      title: '5. Reaching Agreement',
      content: 'If parties agree on a solution, it is written down and signed by everyone.',
    },
  ];

  const detailedSteps = [
    {
      title: '1. Pre-Mediation Phase',
      content: 'The mediator conducts preliminary meetings with parties to assess suitability for mediation, explain the process in detail, and address any concerns. Parties sign an agreement to mediate, which outlines confidentiality, voluntary participation, and the mediator\'s role. The mediator may also gather relevant documents and information.',
    },
    {
      title: '2. Opening Statement',
      content: 'The mediator formally opens the session by introducing themselves, explaining their neutral role, and outlining the mediation process. Ground rules are established, including confidentiality, respectful communication, and the voluntary nature of the process. The mediator emphasizes that they will not impose a decision but will facilitate dialogue.',
    },
    {
      title: '3. Uninterrupted Time',
      content: 'Each party is given uninterrupted time to present their perspective on the dispute. This allows parties to express their concerns, emotions, and desired outcomes. The mediator listens actively, takes notes, and may ask clarifying questions. This phase helps parties feel heard and understood.',
    },
    {
      title: '4. Issue Identification and Agenda Setting',
      content: 'The mediator works with parties to identify the key issues in dispute and prioritize them. This involves reframing positions into underlying interests and needs. An agenda is created that outlines the topics to be discussed, ensuring a structured approach to the mediation.',
    },
    {
      title: '5. Joint and Private Sessions',
      content: 'The mediator facilitates joint discussions where parties explore issues together. If needed, the mediator may conduct private sessions (caucuses) with each party separately to discuss sensitive matters, explore settlement options, or address power imbalances. Information shared in caucuses remains confidential unless the party authorizes disclosure.',
    },
    {
      title: '6. Negotiation and Problem-Solving',
      content: 'Parties engage in interest-based negotiation, exploring options that address the underlying needs of both sides. The mediator uses various techniques such as reality testing, reframing, and generating options to help parties move toward agreement. Creative solutions that may not be available in court are explored.',
    },
    {
      title: '7. Agreement and Closure',
      content: 'If parties reach an agreement, the mediator helps draft a written settlement agreement that clearly outlines the terms. Parties review and sign the agreement. If the mediation is court-referred, the agreement may be submitted to the court for recording. If no agreement is reached, parties retain their right to pursue other legal remedies. The mediator closes the session and may schedule follow-up if needed.',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            The Mediation Process
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding how mediation works, step by step
          </p>
        </div>

        <Separator />

        {/* Mode Toggle */}
        <Tabs value={mode} onValueChange={(v) => setMode(v as 'simple' | 'detailed')} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="simple">Simple Explanation</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Legal View</TabsTrigger>
          </TabsList>

          <TabsContent value="simple" className="space-y-6 mt-8">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-center">
                  This simplified explanation is designed for general understanding. 
                  The actual process may vary based on the specific case and mediator's approach.
                </p>
              </CardContent>
            </Card>

            {simpleSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6 mt-8">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-center">
                  This detailed explanation covers the formal mediation process as practiced in 
                  professional and court-annexed mediation settings in India.
                </p>
              </CardContent>
            </Card>

            {detailedSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
