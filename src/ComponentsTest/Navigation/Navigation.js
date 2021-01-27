import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Главная
      </NavLink>
      <NavLink to="/authors" className={s.link} activeClassName={s.activeLink}>
        Список имен покемонов
      </NavLink>
      <NavLink to="/books" className={s.link} activeClassName={s.activeLink}>
        Изображения покемонов
      </NavLink>
    </nav>
  );
}
