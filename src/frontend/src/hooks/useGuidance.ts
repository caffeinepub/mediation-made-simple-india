import { useQuery, useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { DisputeCategory, GuidanceResult, categoryTypeEnum } from '../backend';

export function useGetAllCategories() {
  const { actor, isFetching } = useActor();

  return useQuery<DisputeCategory[]>({
    queryKey: ['disputeCategories'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGuidanceByCategory() {
  const { actor } = useActor();

  return useMutation<GuidanceResult | null, Error, categoryTypeEnum>({
    mutationFn: async (categoryType: categoryTypeEnum) => {
      if (!actor) throw new Error('Actor not available');
      return actor.getGuidanceByCategory(categoryType);
    },
  });
}
