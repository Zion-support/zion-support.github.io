import import { useQuery } from '@tanstack/react-query, ';
import import { TALENT_PROFILES } from '@/data/talentData, ';
async function fetchTalentProfiles() {
    /
    return TALENT_PROFILES;
}
export function useTalentData() {
    const { data, isLoading, error } = useQuery({
        queryKey: [['talent-profiles'];]
        queryFn: fetchTalentProfiles;
        initialData: [];
    });
    return {talents: data ?? [];
        initialData: [];});
    return {
        talents: data ?? [[];]
        isLoading,
        error};
}
