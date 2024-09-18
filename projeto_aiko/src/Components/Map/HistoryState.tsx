import MyContext from '../Context/Context';
import { useContext, useEffect, useState } from 'react';
import { FilterState } from '../../Interfaces/FilterState';
import AllHistories from '../../../public/teste-frontend-v4/data/equipmentStateHistory.json';
import { EquipmentStateHistory } from '../../Interfaces/EquipmentStateHistory';

function StateHistory(props: { itemId: string }) {
    const { itemId } = props;
    const { stateOptions } = useContext(MyContext) as FilterState;
    const [currentHistory, setCurrentHistory] = useState<EquipmentStateHistory>();

    useEffect(() => {
        if (currentHistory) return;

    const getHistory = () => {
        const itemHistory = AllHistories.find(
            (item) => item.equipmentId === itemId,
        );
        setCurrentHistory(itemHistory);
    };

        getHistory();
    }, []);

    return (
        <div>
        <p>Histórico do equipamento</p>
        {currentHistory?.states.map((item) => {
            const itemState = stateOptions.find(
            (opt) => opt.id === item.equipmentStateId,
            );
            return (
            <div key={item.date}>
                <p>Data: {item.date}</p>
                <p>
                O equipamento estava:
                {itemState?.name || 'erro ao buscar os dados'}
                </p>
            </div>
            );
        })}
        </div>
    );
}

export default StateHistory;