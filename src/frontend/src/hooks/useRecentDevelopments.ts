import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { RecentDevelopment, RecentDevelopmentInput } from '../backend';

export function useGetAllDevelopments() {
  const { actor, isFetching } = useActor();

  return useQuery<RecentDevelopment[]>({
    queryKey: ['recentDevelopments'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDevelopments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddDevelopment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: RecentDevelopmentInput) => {
      if (!actor) throw new Error('Actor not available');
      return actor.addDevelopment(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recentDevelopments'] });
    },
  });
}

export function useEditDevelopment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, input }: { id: bigint; input: RecentDevelopmentInput }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.editDevelopment(id, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recentDevelopments'] });
    },
  });
}
