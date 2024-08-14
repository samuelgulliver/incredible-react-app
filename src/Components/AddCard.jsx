import { FaPlus } from 'react-icons/fa';

const AddCard = () => {
    return (
        <form className = 'addForm'>
            <label htmlFor = 'addCard'>Add Card</label>
            <input
                autoFocus
                id = 'addCard'
                type = 'text'
                placeholder = 'Add Card'
                required
            />
            <button
                type = 'submit'
                arie-label = 'Add Card'
            >
                <FaPlus/>
            </button>


        </form>
    )
}

export default AddCard