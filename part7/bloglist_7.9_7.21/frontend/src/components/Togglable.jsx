import { useState, useEffect } from 'react';

const Togglable = (props) => {
    const [visible, setVisible] = useState(false);

    const hideWhenVisible = { display: visible ? 'none' : '' };
    const showWhenVisible = { display: visible ? '' : 'none' };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        setVisible(false);
    }, [props.user]);

    return (
        <div className="p-1">
            {props.user && (
                <div style={hideWhenVisible}>
                    <button
                        className="bg-green-500 rounded-md p-0.5"
                        onClick={toggleVisibility}
                    >
                        {props.buttonLabel}
                    </button>
                </div>
            )}
            <div style={showWhenVisible}>
                {props.children}
                <button
                    className="bg-red-500 rounded-md p-0.5 w-full"
                    onClick={toggleVisibility}
                >
          cancel
                </button>
            </div>
        </div>
    );
};

export default Togglable;
