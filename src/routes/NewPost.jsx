import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';

function NewPost() {
    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name="description" />
                </p>
                <p className={classes.actions}>
                    <Link type="button" to="..">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return redirect('/')
}