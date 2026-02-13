import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Scale, GraduationCap, Briefcase, Gavel } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const roles = [
    {
      title: 'Common Person',
      description: 'Learn how mediation can help resolve your disputes',
      icon: Users,
      path: '/role/common-person',
    },
    {
      title: 'Lawyer',
      description: 'Understand your role in supporting mediation',
      icon: Briefcase,
      path: '/role/lawyer',
    },
    {
      title: 'Mediator',
      description: 'Explore best practices and responsibilities',
      icon: Scale,
      path: '/role/mediator',
    },
    {
      title: 'Student',
      description: 'Discover mediation education and career paths',
      icon: GraduationCap,
      path: '/role/student',
    },
    {
      title: 'Judge',
      description: 'Learn about effective mediation referrals',
      icon: Gavel,
      path: '/role/judge',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mediation Made Simple – India
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium italic">
                "Not every dispute needs a courtroom"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A public legal awareness platform helping you understand mediation in India. 
                Whether you're facing a dispute, supporting clients, or facilitating resolution, 
                we provide clear, accessible guidance for every stakeholder.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate({ to: '/about' })}>
                  Learn About Mediation
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/guidance' })}>
                  Get Guidance
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-mediation.dim_1600x600.png"
                alt="Mediation illustration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Navigation */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Role
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your role to access tailored information about mediation in India
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.path}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-accent"
                onClick={() => navigate({ to: role.path })}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {role.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <h3 className="font-serif text-xl font-semibold">Understanding Mediation</h3>
              <p className="text-muted-foreground text-sm">
                Learn what mediation is, its evolution, and how it applies in India
              </p>
              <Button variant="link" onClick={() => navigate({ to: '/about' })} className="text-accent">
                Read More →
              </Button>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-serif text-xl font-semibold">Compare Options</h3>
              <p className="text-muted-foreground text-sm">
                See how mediation compares to litigation, arbitration, and negotiation
              </p>
              <Button variant="link" onClick={() => navigate({ to: '/comparison' })} className="text-accent">
                View Comparison →
              </Button>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-serif text-xl font-semibold">Get Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Use our interactive tool to understand if mediation suits your dispute
              </p>
              <Button variant="link" onClick={() => navigate({ to: '/guidance' })} className="text-accent">
                Try Tool →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
