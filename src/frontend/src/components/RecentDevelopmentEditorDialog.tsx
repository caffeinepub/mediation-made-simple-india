import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useAddDevelopment, useEditDevelopment } from '../hooks/useRecentDevelopments';
import type { RecentDevelopment } from '../backend';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  development: RecentDevelopment | null;
}

export default function RecentDevelopmentEditorDialog({ open, onOpenChange, development }: Props) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const addMutation = useAddDevelopment();
  const editMutation = useEditDevelopment();

  const isEditing = !!development;
  const mutation = isEditing ? editMutation : addMutation;

  useEffect(() => {
    if (development) {
      setTitle(development.title);
      setDate(new Date(Number(development.date)).toISOString().split('T')[0]);
      setDescription(development.description);
      setUrl(development.url);
    } else {
      setTitle('');
      setDate(new Date().toISOString().split('T')[0]);
      setDescription('');
      setUrl('');
    }
    setError('');
  }, [development, open]);

  const validateUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !description.trim() || !url.trim() || !date) {
      setError('All fields are required');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    const dateTimestamp = BigInt(new Date(date).getTime());

    try {
      if (isEditing) {
        await editMutation.mutateAsync({
          id: development.id,
          input: {
            title: title.trim(),
            date: dateTimestamp,
            description: description.trim(),
            url: url.trim(),
          },
        });
      } else {
        await addMutation.mutateAsync({
          title: title.trim(),
          date: dateTimestamp,
          description: description.trim(),
          url: url.trim(),
        });
      }
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || 'Failed to save development');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Development' : 'Add New Development'}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Update the details of this development.'
              : 'Add a new development or update in mediation law and practice.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., New Mediation Rules Announced"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the development..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL *</Label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/article"
              required
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? 'Saving...' : isEditing ? 'Update' : 'Add'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
