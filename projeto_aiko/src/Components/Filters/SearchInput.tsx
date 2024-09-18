import { useContext } from 'react';
import MyContext from '../../Components/Context/Context';
import { FilterState } from '../../Interfaces/FilterState';

function SearchInput() {
    const { setSearch } = useContext(MyContext) as FilterState;

    return (
        <div className='input-div'>
        <input
            type="text"
            placeholder="Pesquise um modelo específico"
            onChange={(e) => setSearch(e.target.value)}
            className='input'
        />
        </div>
    );
}

export default SearchInput;