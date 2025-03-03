import { logError } from '@utils/logError';
import { redem } from '../redem';
import { AxiosError } from 'axios';
import { parseKpisResult } from './parseKpisResult';

export const consultCandidateProfile = async ({
  initialYear = 2020,
  finalYear = 2024,
  dimension = 0,
  unidadesEleitoraisIds = undefined,
  isElected = undefined,
  partidos = undefined,
  categoriasOcupacoes = undefined,
  cargosIds = undefined,
  round = undefined,
}: {
  initialYear?: number;
  finalYear?: number;
  dimension?: number;
  unidadesEleitoraisIds?: string[];
  isElected?: number;
  partidos?: string[];
  categoriasOcupacoes?: string[];
  cargosIds?: string[];
  round?: number;
}) => {
  console.info('consultCandidateProfile', {
    initialYear,
    finalYear,
    dimension,
    unidadesEleitoraisIds,
    isElected,
    partidos,
    categoriasOcupacoes,
    cargosIds,
    round,
  });

  try {
    const responses: any[] = await Promise.allSettled([
      parseKpisResult(() =>
        redem.consult.getCandidateProfileKpis(
          Number(initialYear),
          Number(finalYear),
          dimension,
          unidadesEleitoraisIds,
          isElected,
          round,
          partidos,
          categoriasOcupacoes,
          cargosIds,
        ),
      ),
      redem.consult.getCandidateProfileByGender(
        Number(initialYear),
        Number(finalYear),
        dimension,
        unidadesEleitoraisIds,
        isElected,
        round,
        partidos,
        categoriasOcupacoes,
        cargosIds,
      ),
      redem.consult.getCandidateProfileByOccupation(
        Number(initialYear),
        Number(finalYear),
        dimension,
        unidadesEleitoraisIds,
        isElected,
        round,
        partidos,
        categoriasOcupacoes,
        cargosIds,
      ),
      redem.consult.getCandidateProfileByYear(
        Number(initialYear),
        Number(finalYear),
        dimension,
        unidadesEleitoraisIds,
        isElected,
        round,
        partidos,
        categoriasOcupacoes,
        cargosIds,
      ),
    ]);

    const result = [];
    for (const resp of responses) {
      if (resp.status === 'fulfilled') {
        result.push({ ...resp.value.data, request: resp.value?.request?.path });
      } else {
        logError('Failed to consultCandidateProfile', resp.reason as AxiosError);
        const data = resp.reason?.response?.data || { success: false };
        result.push({ ...data, request: resp.reason?.request?.path });
      }
    }

    return result;
  } catch (error) {
    logError('Failed to consultCandidateProfile', error as Error);
    return {};
  }
};
