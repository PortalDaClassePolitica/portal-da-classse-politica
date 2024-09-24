import { logError } from '@utils/logError';
import { redem } from '../redem';
import { AxiosError } from 'axios';

export const consultElections = async ({
  initialYear = 2020,
  finalYear = 2024,
  dimension = 0,
  unidadesEleitoraisIds = undefined,
  isElected = undefined,
  partidos = undefined,
  categoriasOcupacoes = undefined,
  cargosIds = undefined,
}: {
  initialYear?: number;
  finalYear?: number;
  dimension?: number;
  unidadesEleitoraisIds?: string[];
  isElected?: number;
  partidos?: string[];
  categoriasOcupacoes?: string[];
  cargosIds?: string[];
}) => {
  console.log('consultElections', {
    initialYear,
    finalYear,
    dimension,
    unidadesEleitoraisIds,
    isElected,
    partidos,
    categoriasOcupacoes,
    cargosIds,
  });

  try {
    const responses = await Promise.allSettled([
      redem.consult.getElectionsByLocation(Number(initialYear), Number(finalYear), 'PR'), // TODO - Waiting Backend Update
      redem.consult.getElectionsTopCandidates(Number(initialYear), Number(finalYear)),
      redem.consult.getElectionsCompetitionByYear(Number(initialYear), Number(finalYear)),
      redem.consult.getElectionsKpis(Number(initialYear), Number(finalYear)),
    ]);

    const result = [];
    for (const resp of responses) {
      if (resp.status === 'fulfilled') {
        result.push(resp.value.data);
      } else {
        logError('Failed to consultElections', resp.reason as AxiosError);
        result.push(resp.reason?.response?.data || { success: false });
      }
    }

    return result;
  } catch (error) {
    logError('Failed to consultElections', error as Error);
    return {};
  }
};
