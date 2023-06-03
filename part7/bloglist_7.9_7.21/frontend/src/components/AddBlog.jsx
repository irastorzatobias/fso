import { useDispatch, useSelector } from 'react-redux';
import useField from '../hooks/useField';
import { addBlog } from '../reducers/blogReducer';
import { toast } from 'react-toastify';
import { useState } from 'react';

const AddBlog = () => {
    const title = useField('text');
    const author = useField('text');
    const url = useField('text');
    const error = useSelector((state) => state.blog.error);

    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (error) {
            toast.error('Error adding blog, please reload');
        }

        dispatch(
            addBlog({
                title: title.value,
                author: author.value,
                url: url.value,
                likes: 0,
            })
        );

        title.reset('');
        author.reset('');
        url.reset('');
        setVisible(false);
    };

    return !visible ? (
        <button className="bg-green-200 text-green-700 p-0.5 rounded-md" onClick={() => setVisible(true)}>add blog</button>
    ) : (
        <form className="w-[40vw] mb-1 mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input className="p-2 rounded-md mb-2" {...title} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="author">Author</label>
                <input className="p-2 rounded-md mb-2" {...author} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="url">Url</label>
                <input className="p-2 rounded-md mb-2" {...url} />
            </div>
            <button
                className="bg-green-500 rounded-md p-0.5 w-full mt-2"
                type="submit"
            >
        add
            </button>
        </form>
    );
};

export default AddBlog;
