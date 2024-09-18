import Equipments from '../../public/teste-frontend-v4/data/equipment.json';
import { PositionProps } from '../Interfaces/EquipmentPosition'

export const formatEquipmentsData = (
    search: string,
    equipmentsState: { equipmentId: string; currentState: string }[],
    equipmentsPosition: {
        equipmentId: string;
        currentPosition: PositionProps;
}[],
) => {
    const currentEquipments = Equipments.map((item) => {
        const currentState = equipmentsState.find(
        (machine) => machine.equipmentId === item.id,
        )?.currentState;

        const currentPosition = equipmentsPosition.find(
        (info) => info.equipmentId === item.id,
        )?.currentPosition;

    return { ...item, currentState, currentPosition };
    });

    const equipmentsData = currentEquipments.filter((item) =>
        item.name.includes(search.toUpperCase()),
    );

    return equipmentsData;
};