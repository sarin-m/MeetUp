import {Link} from 'react-router-dom';
import classes from  './MainNavigation.module.css';
function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetup</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}   
export default MainNavigation;