const Header = ({ user, handleLogout }) => {
  return (
    <div className="bg-teal-500 flex flex-row justify-between items-center px-2  py-1 mb-3">
      <h2 className="font-bold text-2xl text-white text-center">
        RAGE BLOG
      </h2>
      {user && (
        <div className="flex flex-col">
          <p>logged in as {user.name}</p>
          <button
            onClick={handleLogout}
            className="p-1 border-1 bg-red-500 rounded-md text-white"
          >
            log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
