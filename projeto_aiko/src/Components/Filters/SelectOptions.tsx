import FilterButton from './FilterButton';
import MyContext from '../../Components/Context/Context';
import React, { useState, useEffect, useContext } from 'react';
import { FilterState } from '../../Interfaces/FilterState';
import { EquipmentState } from '../../Interfaces/EquipmentState';
import EquipmentStateData from '../../../public/teste-frontend-v4/data/equipmentState.json';

const SelectOptions: React.FC = () => {
    const [currentChoice, setCurrentChoice] = useState<string>('');
    const [stateOptions, setStateOptions] = useState<EquipmentState[]>([]);
    const { filterByCurrentState, setFilterByCurrentState } = useContext(
    MyContext,
    ) as FilterState;

    useEffect(() => {
        if (stateOptions.length) return;

        const data = EquipmentStateData;
        setStateOptions(data);
    }, []);

    useEffect(() => {
        if (filterByCurrentState === currentChoice) return;

    setFilterByCurrentState(currentChoice);
    }, [currentChoice]);

    const fixTitle = (title: string) => {
        if (title === 'Parado') return 'Parados';
        if (title === 'Manutenção') return 'Em Manutenção';
        return title;
    };

    return (
        <div className="title-div">
        <h1 className='title'>Desejo visualizar os equipamentos que estão:</h1>
        {stateOptions.map((option) => {
            const titleThatDoesntNeedFix = option.name === 'Operando';

            const currentOption = titleThatDoesntNeedFix
            ? option.name
            : fixTitle(option.name);

        return (
            <FilterButton
                key={option.id}
                currentId={option.id}
                currentChoice={currentChoice}
                setCurrentChoice={setCurrentChoice}
                active={currentChoice === option.id}
            >
                {currentOption}
            </FilterButton>
        );
    })}
    </div>
);
};

export default SelectOptions;