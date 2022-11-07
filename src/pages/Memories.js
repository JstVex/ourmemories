import { useEffect } from "react";
import { useMemoriesContext } from "../hooks/useMemoriesContext";

//components
import MemoryDetails from '../components/MemoryDetails'
import MemoryForm from "../components/MemoryForm";

const Home = () => {
    const { memories, dispatch } = useMemoriesContext();

    useEffect(() => {
        const fetchMemories = async () => {
            const response = await fetch("/api/memories")
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_MEMORIES', payload: json })
            }
        }
        fetchMemories()
    }, [dispatch])

    return (
        <div className="home">
            <div className="memories">
                {memories && memories.map((memory) => {
                    return <MemoryDetails key={memory._id} memory={memory} />
                })}
            </div>
            <MemoryForm />
        </div>
    );
}

export default Home;