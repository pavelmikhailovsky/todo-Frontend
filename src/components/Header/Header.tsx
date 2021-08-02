import style from './Header.module.css';

// @ts-ignore
const Header = (props) => {
    return (
        <header className={style.main}>
            <div className={style.profile_info}>
                <img src="https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg" />
                <span className={style.user_name}>
                    {/* TODO регулирование длины имени, превышение заменяет невлезающие символы на "..." */}
                    User namess...
                </span>
            </div>
        </header>
    );
}

export default Header;