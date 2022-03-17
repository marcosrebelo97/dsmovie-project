import { ReactComponent as Star0 } from 'assets/img/Star0.svg';
import { ReactComponent as Star1 } from 'assets/img/Star1.svg';
import { ReactComponent as Star2 } from 'assets/img/Star2.svg';
import './styles.css';

function MovieStars () {
    return (
        <div className="dsmovie-stars-container">
            <Star1 />
            <Star1 />
            <Star1 />
            <Star2 />
            <Star0 />
        </div>
    );
}

export default MovieStars;