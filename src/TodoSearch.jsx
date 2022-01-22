import './TodoSearch.css';

function TodoSearch() {
    const onSearchValueChange = (event) => {
        const [onSearchValue, setSearchValue] = useState('');
        console.log(event.target.value)
    }
    return (
        <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValueChange} />
    );
}

export { TodoSearch };