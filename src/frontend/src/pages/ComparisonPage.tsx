import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ComparisonPage() {
  const comparisonData = [
    {
      aspect: 'Nature',
      mediation: 'Voluntary, collaborative',
      litigation: 'Adversarial, imposed',
      arbitration: 'Adversarial, consensual',
      negotiation: 'Voluntary, direct',
    },
    {
      aspect: 'Decision Maker',
      mediation: 'Parties themselves',
      litigation: 'Judge',
      arbitration: 'Arbitrator',
      negotiation: 'Parties themselves',
    },
    {
      aspect: 'Formality',
      mediation: 'Informal, flexible',
      litigation: 'Highly formal',
      arbitration: 'Semi-formal',
      negotiation: 'Informal',
    },
    {
      aspect: 'Time Required',
      mediation: 'Days to weeks',
      litigation: 'Months to years',
      arbitration: 'Weeks to months',
      negotiation: 'Hours to days',
    },
    {
      aspect: 'Cost',
      mediation: 'Low to moderate',
      litigation: 'High',
      arbitration: 'Moderate to high',
      negotiation: 'Very low',
    },
    {
      aspect: 'Confidentiality',
      mediation: 'Confidential',
      litigation: 'Public record',
      arbitration: 'Generally confidential',
      negotiation: 'Confidential',
    },
    {
      aspect: 'Relationship Impact',
      mediation: 'Preserves relationships',
      litigation: 'Often damages relationships',
      arbitration: 'May strain relationships',
      negotiation: 'Can preserve relationships',
    },
    {
      aspect: 'Outcome Control',
      mediation: 'High (parties decide)',
      litigation: 'None (judge decides)',
      arbitration: 'None (arbitrator decides)',
      negotiation: 'High (parties decide)',
    },
    {
      aspect: 'Enforceability',
      mediation: 'Enforceable if recorded',
      litigation: 'Legally binding judgment',
      arbitration: 'Legally binding award',
      negotiation: 'Depends on agreement',
    },
    {
      aspect: 'Third Party Role',
      mediation: 'Facilitator (neutral)',
      litigation: 'Decision maker (judge)',
      arbitration: 'Decision maker (arbitrator)',
      negotiation: 'None',
    },
    {
      aspect: 'Flexibility',
      mediation: 'Very flexible',
      litigation: 'Rigid procedures',
      arbitration: 'Moderately flexible',
      negotiation: 'Very flexible',
    },
    {
      aspect: 'Best For',
      mediation: 'Ongoing relationships, complex interests',
      litigation: 'Legal precedent, rights enforcement',
      arbitration: 'Technical disputes, faster than court',
      negotiation: 'Simple disputes, willing parties',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Comparison of Dispute Resolution Methods
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the differences between mediation, litigation, arbitration, and negotiation
          </p>
        </div>

        <Separator />

        {/* Desktop Table */}
        <Card className="hidden md:block">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Detailed Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <div className="min-w-[800px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold w-[180px]">Aspect</TableHead>
                      <TableHead className="font-semibold">Mediation</TableHead>
                      <TableHead className="font-semibold">Litigation</TableHead>
                      <TableHead className="font-semibold">Arbitration</TableHead>
                      <TableHead className="font-semibold">Negotiation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.aspect}</TableCell>
                        <TableCell className="text-muted-foreground">{row.mediation}</TableCell>
                        <TableCell className="text-muted-foreground">{row.litigation}</TableCell>
                        <TableCell className="text-muted-foreground">{row.arbitration}</TableCell>
                        <TableCell className="text-muted-foreground">{row.negotiation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{row.aspect}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-accent mb-1">Mediation</div>
                  <div className="text-sm text-muted-foreground">{row.mediation}</div>
                </div>
                <Separator />
                <div>
                  <div className="text-sm font-medium text-accent mb-1">Litigation</div>
                  <div className="text-sm text-muted-foreground">{row.litigation}</div>
                </div>
                <Separator />
                <div>
                  <div className="text-sm font-medium text-accent mb-1">Arbitration</div>
                  <div className="text-sm text-muted-foreground">{row.arbitration}</div>
                </div>
                <Separator />
                <div>
                  <div className="text-sm font-medium text-accent mb-1">Negotiation</div>
                  <div className="text-sm text-muted-foreground">{row.negotiation}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Each method has its place in dispute resolution. Mediation offers a balanced approach 
              that combines flexibility, cost-effectiveness, and relationship preservation, making it 
              suitable for a wide range of disputes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
