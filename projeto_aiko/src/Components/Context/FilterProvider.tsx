import MyContext from './Context';
import React, { useState } from 'react';
import { EquipmentState } from '../../Interfaces/EquipmentState';
import { Truck } from '../../Interfaces/EquipmentModel';
import EquipModels from '../../../public/teste-frontend-v4/data/equipmentModel.json';

type ComponentWithChildren = React.FC<{ children: React.ReactNode }>;

const Provider: ComponentWithChildren = (props: {
    children: React.ReactNode;
}) => {
    const [search, setSearch] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [stateOptions, setStateOptions] = useState<EquipmentState[]>([]);
    const [filterByCurrentState, setFilterByCurrentState] = useState<string>('');
    const [equipmentModels, setEquipmentModels] = useState<Truck[]>(EquipModels);

    const contextValue = {
    search,
    setSearch,
    isLoading,
    setIsLoading,
    equipmentModels,
    setEquipmentModels,
    stateOptions,
    setStateOptions,
    filterByCurrentState,
    setFilterByCurrentState,
    };

    return (
        <MyContext.Provider value={contextValue}>
        {props.children}
        </MyContext.Provider>
    );
};

export default Provider;