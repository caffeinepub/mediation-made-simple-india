import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Loader2, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { useGetGuidanceByCategory } from '../hooks/useGuidance';
import { DISPUTE_CATEGORY_LABELS, DISPUTE_CATEGORIES } from '../lib/disputeCategories';
import type { categoryTypeEnum } from '../backend';

export default function DisputeCategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState<categoryTypeEnum | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const getGuidance = useGetGuidanceByCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) return;
    setSubmitted(true);
    getGuidance.mutate(selectedCategory);
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSubmitted(false);
    getGuidance.reset();
  };

  const result = getGuidance.data;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Select Your Dispute Category</CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <RadioGroup value={selectedCategory || ''} onValueChange={(v) => setSelectedCategory(v as categoryTypeEnum)}>
                <div className="space-y-3">
                  {DISPUTE_CATEGORIES.map((category) => (
                    <div key={category.value} className="flex items-start space-x-3 space-y-0">
                      <RadioGroupItem value={category.value} id={category.value} />
                      <Label htmlFor={category.value} className="font-normal cursor-pointer flex-1">
                        <div className="font-medium">{category.label}</div>
                        <div className="text-sm text-muted-foreground">{category.description}</div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              <Button type="submit" disabled={!selectedCategory || getGuidance.isPending} className="w-full">
                {getGuidance.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading Guidance...
                  </>
                ) : (
                  'Get Guidance'
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium">Selected Category:</p>
                <p className="text-muted-foreground">{selectedCategory && DISPUTE_CATEGORY_LABELS[selectedCategory]}</p>
              </div>
              <Button variant="outline" onClick={handleReset} className="w-full">
                Select Different Category
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {getGuidance.isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to load guidance. Please try again.
          </AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="space-y-6">
          {/* Examples Section */}
          {result.fullDispute.contextSpecificExamples.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside">
                  {result.fullDispute.contextSpecificExamples.map((example, index) => (
                    <li key={index} className="text-muted-foreground">
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Mediation Suitability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                {result.category.isMediationSuitable ? (
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-muted-foreground" />
                )}
                Is Mediation Suitable?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">
                  {result.category.isMediationSuitable ? (
                    <span className="text-accent font-medium">Yes, mediation may be suitable for this dispute.</span>
                  ) : (
                    <span>Mediation may not be the best option for this type of dispute.</span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  {result.category.mediationReason}
                </p>
              </div>
              
              {result.fullDispute.mediationSuitabilityGuidance && (
                <>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Detailed Suitability Guidance</h4>
                    <p className="text-sm text-muted-foreground">
                      {result.fullDispute.mediationSuitabilityGuidance}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Next Steps */}
          {result.fullDispute.nextSteps.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {result.fullDispute.nextSteps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Do's and Don'ts */}
          {(result.fullDispute.dosAndDonts.dos.length > 0 || result.fullDispute.dosAndDonts.donts.length > 0) && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do's and Don'ts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {result.fullDispute.dosAndDonts.dos.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Do's
                    </h4>
                    <ul className="space-y-2">
                      {result.fullDispute.dosAndDonts.dos.map((item, index) => (
                        <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {result.fullDispute.dosAndDonts.donts.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-destructive" />
                      Don'ts
                    </h4>
                    <ul className="space-y-2">
                      {result.fullDispute.dosAndDonts.donts.map((item, index) => (
                        <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-destructive mt-0.5">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Legal Information */}
          {result.fullDispute.legalInformation && (
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg">Legal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {result.fullDispute.legalInformation}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Additional Legal Advice from Category */}
          {result.category.legalAdvice && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">When to Seek Legal Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {result.category.legalAdvice}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
