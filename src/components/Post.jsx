import { Link } from 'react-router-dom';
import classes from './Post.module.css'

function Post({ id, author, description }) {
    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{description}</p>
            </Link>
        </li>
    );
}

export default Post;