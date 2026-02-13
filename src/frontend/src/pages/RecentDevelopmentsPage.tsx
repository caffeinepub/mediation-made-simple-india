import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Plus, ExternalLink, Calendar, AlertCircle, Edit } from 'lucide-react';
import { useGetAllDevelopments } from '../hooks/useRecentDevelopments';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsCallerAdmin } from '../hooks/useAuthz';
import RecentDevelopmentEditorDialog from '../components/RecentDevelopmentEditorDialog';
import type { RecentDevelopment } from '../backend';

export default function RecentDevelopmentsPage() {
  const { data: developments, isLoading, isError } = useGetAllDevelopments();
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsCallerAdmin();
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingDevelopment, setEditingDevelopment] = useState<RecentDevelopment | null>(null);

  const isAuthenticated = !!identity;
  const canEdit = isAuthenticated && isAdmin;

  const handleAdd = () => {
    setEditingDevelopment(null);
    setEditorOpen(true);
  };

  const handleEdit = (dev: RecentDevelopment) => {
    setEditingDevelopment(dev);
    setEditorOpen(true);
  };

  const sortedDevelopments = developments
    ? [...developments].sort((a, b) => Number(b.date - a.date))
    : [];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Recent Developments
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Latest updates in mediation law and practice in India
            </p>
          </div>
          {canEdit && (
            <Button onClick={handleAdd} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Update
            </Button>
          )}
        </div>

        <Separator />

        {/* Auth Prompt */}
        {!isAuthenticated && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Sign in to add or edit developments.
            </AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/4 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load developments. Please try again later.
            </AlertDescription>
          </Alert>
        )}

        {/* Developments List */}
        {!isLoading && !isError && sortedDevelopments.length === 0 && (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              No developments have been added yet.
            </CardContent>
          </Card>
        )}

        {!isLoading && !isError && sortedDevelopments.length > 0 && (
          <div className="space-y-6">
            {sortedDevelopments.map((dev) => (
              <Card key={Number(dev.id)} className="group hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{dev.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(Number(dev.date)).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    {canEdit && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(dev)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{dev.description}</p>
                  <a
                    href={dev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
                  >
                    Read more
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Editor Dialog */}
      <RecentDevelopmentEditorDialog
        open={editorOpen}
        onOpenChange={setEditorOpen}
        development={editingDevelopment}
      />
    </div>
  );
}
