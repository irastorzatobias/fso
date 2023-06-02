const User = ({ name, username, blogs }) => {
    const buildBlogs = () => {
        return blogs.map((blog) => <li className="text-teal-500 rounded-sm" key={blog.id}>- {blog.title}</li>);
    };

    return (
        <div className="m-1 flex flex-col gap-2 border-green-700 border p-0.5 rounded-md">
            <div className='font-bold'>
                <h1>name: </h1>
                <h1>username: </h1>
            </div>
            <h1 className='bg-teal-500 text-white font-medium'>BLOGS</h1>
            <ul className="flex flex-col gap-1 text-white font-medium">....</ul>
        </div>
    );
};

export default User;
