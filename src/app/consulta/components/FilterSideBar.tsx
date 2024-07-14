import { ButtonStyled } from '@base/buttons';
import { Radio } from '@base/forms/Radio';
import { Text } from '@base/text';
import { BoxIcon } from '@components/box/BoxIcon';

const filters = [
  {
    title: 'Cargo do candidato:',
    group: 'Cargo_do_candidato',
    options: [
      { value: '1', label: 'Cargo do candidato' },
      { value: '2', label: 'Cargo do candidato' },
      { value: '3', label: 'Cargo do candidato' },
      { value: '4', label: 'Cargo do candidato' },
      { value: '5', label: 'Cargo do candidato' },
    ],
  },
  {
    title: 'Filtrar por gênero:',
    group: 'Filtrar_por_gênero',
    options: [
      { value: '1', label: 'Filtrar por gênero' },
      { value: '2', label: 'Filtrar por gênero' },
      { value: '3', label: 'Filtrar por gênero' },
    ],
  },
  {
    title: 'Estado do candidato:',
    group: 'Estado_do_candidato',
    options: [
      { value: '1', label: 'Estado do candidato' },
      { value: '2', label: 'Estado do candidato' },
      { value: '3', label: 'Estado do candidato' },
      { value: '4', label: 'Estado do candidato' },
      { value: '5', label: 'Estado do candidato' },
    ],
  },
  {
    title: 'Perfil do eleitor:',
    group: 'Perfil_do_eleitor',
    options: [
      { value: '1', label: 'Perfil do eleitor' },
      { value: '2', label: 'Perfil do eleitor' },
      { value: '3', label: 'Perfil do eleitor' },
      { value: '4', label: 'Perfil do eleitor' },
      { value: '5', label: 'Perfil do eleitor' },
    ],
  },
];

const FilterSidebar = () => {
  return (
    <div>
      <label htmlFor="toggle" className="flex items-center mb-8 cursor-pointer md:cursor-default">
        <BoxIcon icon="Filter" iconSize="lg" className="bg-white shadow-lg text-orange" />
        <Text className="font-bold ml-2 text-center">Filtros</Text>
      </label>
      <input type="checkbox" id="toggle" className="hidden" />
      <div className="hidden-button overflow-hidden opacity-0 md:opacity-100 transition-all duration-500 md:max-h-max max-h-0">
        {filters.map(({ title, options, group }, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="font-semibold mb-2">{title}</h3>
            {options.map(({ value, label }) => (
              <Radio key={value} id={`${group}-${value}`} name={group} value={value} label={label} />
            ))}
          </div>
        ))}

        <ButtonStyled style="outlinedOrange" className="!bg-transparent hover:!text-orangeLight2">
          <Text>Aplicar Filtro</Text>
        </ButtonStyled>
      </div>
    </div>
  );
};

export default FilterSidebar;
