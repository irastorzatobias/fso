const User = ({ name, username, blogs }) => {
    return (
        <div className="flex flex-col gap-2">
            <h1>name: {name}</h1>
            <h1>username: {username}</h1>
            <ul>
                {blogs &&
          blogs.map((blog) => {
              <li>{blog.name}</li>;
          })}
            </ul>
        </div>
    );
};


export default User;