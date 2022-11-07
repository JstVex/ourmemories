import { useMemoriesContext } from "../hooks/useMemoriesContext"

const MemoryDetails = ({ memory }) => {
    const { dispatch } = useMemoriesContext();

    const handleClick = async () => {
        const response = await fetch('/api/memories/' + memory._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_MEMORY', payload: json })
        }
    }

    return (
        <div className="memory-details">
            <div className="placing">
                <p>{memory.text}</p>
                <h4>~ {memory.note} ~</h4>
                <h4>( {memory.date} )</h4>
                <span className="x" onClick={handleClick}>X</span>
            </div>
            <img className="image" src={memory.image} alt="" />
        </div>
    );
}

export default MemoryDetails;