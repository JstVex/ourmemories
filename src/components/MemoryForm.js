import { useState } from "react";
import { useMemoriesContext } from "../hooks/useMemoriesContext";

const MemoryForm = () => {
    const { dispatch } = useMemoriesContext();

    const [text, setText] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const memory = { text, note, date, image }

        const response = await fetch('/api/memories', {
            method: 'POST',
            body: JSON.stringify(memory),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setText('');
            setNote('');
            setDate('');
            setImage('');
            setError(null);
            setEmptyFields([]);
            console.log('new memory added ^^ :', json)
            dispatch({ type: 'CREATE_MEMORY', payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 className="form-title">Add a new memory boo boo :3</h3>

            <label>text text for our memory &#62;&#60; :</label>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className={emptyFields.includes('text') ? 'error' : ''}
            />

            <label>note note here UwU :</label>
            <input
                type="text"
                onChange={(e) => setNote(e.target.value)}
                value={note}
                className={emptyFields.includes('note') ? 'error' : ''}
            />

            <label>date date for our memory ^^ :</label>
            <input
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className={emptyFields.includes('date') ? 'error' : ''}
            />

            <label>only url works for pico :&#40; : </label>
            <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />

            <div className="button"> <button>Add our precious Memory ^^</button></div>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default MemoryForm;