import { FaGithub } from 'react-icons/fa';
import { styles } from ''

export function SingInButton() {
    return (
        <button 
        type="button"
        className={styles}
        >
            <FaGithub />
            Sing in with Github  
        </button>
    )
}