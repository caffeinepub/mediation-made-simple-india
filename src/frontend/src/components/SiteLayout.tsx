import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X, Scale } from 'lucide-react';
import { useState } from 'react';
import LoginButton from './auth/LoginButton';
import ProfileSetupDialog from './auth/ProfileSetupDialog';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useAuthz';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading } = useGetCallerUserProfile();
  const isAuthenticated = !!identity;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Mediation', path: '/about' },
    { label: 'Process', path: '/process' },
    { label: 'Comparison', path: '/comparison' },
    { label: 'Guidance Tool', path: '/guidance' },
    { label: 'Recent Developments', path: '/developments' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ProfileSetupDialog />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/assets/generated/mediation-logo.dim_512x512.png" 
                alt="Mediation Made Simple" 
                className="h-10 w-10"
              />
              <span className="font-serif text-xl font-semibold text-foreground hidden sm:inline">
                Mediation Made Simple
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate({ to: link.path })}
                  className="text-sm font-medium"
                >
                  {link.label}
                </Button>
              ))}
            </nav>

            {/* Auth Section */}
            <div className="flex items-center gap-3">
              {isAuthenticated && userProfile && !profileLoading && (
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  {userProfile.name}
                </span>
              )}
              <LoginButton />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border/40">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    variant="ghost"
                    onClick={() => {
                      navigate({ to: link.path });
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start text-sm font-medium"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Scale className="h-4 w-4 text-accent" />
              <span>© {new Date().getFullYear()} Mediation Made Simple – India</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
