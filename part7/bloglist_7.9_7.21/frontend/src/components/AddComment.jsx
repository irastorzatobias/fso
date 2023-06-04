import { useDispatch } from 'react-redux';
import useField from '../hooks/useField';
import { commentBlog } from '../reducers/blogFoundedReducer';
import { useParams } from 'react-router-dom';

const AddComment = () => {
    const comment = useField('text');
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleComment = async () => {
        await dispatch(commentBlog({ id, content: comment.value }));
        comment.reset('');
    };

    return (
        <div className="flex justify-center items-center gap-1">
            <input className="px-0.5" {...comment} placeholder="Add a comment..." />
            <i className="ri-send-plane-fill bg-indigo-200 ri-lg p-0.5 cursor-pointer" onClick={handleComment}/>
        </div>
    );
};

export default AddComment;