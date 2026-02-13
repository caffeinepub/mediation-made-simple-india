import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import DisputeCategorySelector from '../components/DisputeCategorySelector';

export default function DisputeGuidancePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            My Dispute – What Should I Do?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance on whether mediation is suitable for your dispute
          </p>
        </div>

        <Separator />

        {/* Disclaimer */}
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Important:</strong> This tool provides general informational guidance only and does not 
              constitute legal advice. For specific legal matters, please consult a qualified lawyer.
            </p>
          </CardContent>
        </Card>

        {/* Category Selector */}
        <DisputeCategorySelector />
      </div>
    </div>
  );
}
