import { Truck } from './EquipmentModel';
import { EquipmentState } from './EquipmentState';

export interface FilterState {
    search: string;
    isLoading: boolean;
    equipmentModels: Truck[];
    setEquipmentModels: React.Dispatch<React.SetStateAction<Truck[]>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    filterByCurrentState: string;
    stateOptions: EquipmentState[];
    setStateOptions: React.Dispatch<React.SetStateAction<EquipmentState[]>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setFilterByCurrentState: React.Dispatch<React.SetStateAction<string>>;
}