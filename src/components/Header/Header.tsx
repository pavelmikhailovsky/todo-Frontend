import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

// @ts-ignore
const Header = (props) => {
    return (
        <header>
            <div className={style.profile_info}>
                {/* <span className={style.name}>Todo list</span> */}
                <img src="https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg" />
                <span className={style.user_name}>
                    {/* TODO регулирование длины имени,заменяет невлезающие символы на "..." */}
                    User namess...
                </span>
                <span>
                    <button>
                        <NavLink to='/login'>Login</NavLink>
                    </button>
                </span>
                <span>
                    <button>
                        <NavLink to='/registration'>Registration</NavLink>
                    </button>
                </span>
            </div>
        </header>
    );
}

export default Header;