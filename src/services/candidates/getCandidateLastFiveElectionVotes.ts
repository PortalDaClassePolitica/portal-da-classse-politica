import { redem } from '../redem';

export const getCandidateLastFiveElectionVotes = async (id: string) => {
  try {
    const response = await redem.candidate.getCandidateLastFiveElectionVotes(id);
    console.info('getCandidateLastFiveElectionVotes', response?.data);

    return response?.data?.data || [];
  } catch (error) {
    console.error('Failed to getCandidateLastFiveElectionVotes', error);
    return [];
  }
};
