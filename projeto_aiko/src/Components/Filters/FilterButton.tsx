import React from 'react';

interface FilterButtonProps {
    active: boolean;
    currentId: string;
    currentChoice: string;
    children: React.ReactNode;
    setCurrentChoice: (value: string) => void;
}

function FilterButton({
    children,
    currentId,
    currentChoice,
    setCurrentChoice,
}: FilterButtonProps) {
    const updateStateFilter = (id: string) => {
        const cleanFilter = '';

    if (id === currentChoice) return setCurrentChoice(cleanFilter);
        return setCurrentChoice(id);
    };

    return (
        <button
        onClick={() => updateStateFilter(currentId)}
        className='button'
    >
        {children}
        </button>
    );
}

export default FilterButton;