import PositionHistory from '../../public/teste-frontend-v4/data/equipmentPositionHistory.json';

export const getEquipmentsCurrentPosition = () => {
    const equipmentPositionHistory = PositionHistory;

    const equipmentsPosition = equipmentPositionHistory.map(
    ({ equipmentId, positions }) => {
        const lastPosition = positions.length - 1;
        return { equipmentId, currentPosition: positions[lastPosition] };
    },
);

    return equipmentsPosition;
};