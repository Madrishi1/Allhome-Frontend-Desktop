import React,{useState} from 'react';
import { FormattedMessage } from "react-intl";

type PasswordProps = {
    title: any;
  };
  
  const Password: React.FC<PasswordProps> = ({ title }) => {
    const [showPassword, setShowPassword] = useState(false);
  

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='space-y-2 relative  text-black'>
            <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Password"
                required
                type={showPassword ? 'text' : 'password'}
            />       
           
                <button
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                >
                    {showPassword ? (
                    <svg
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.071 4.929a2 2 0 010 2.828L5.757 19.071a2 2 0 01-2.828-2.828l13.314-13.314a2 2 0 012.828 0z"
                        />
                    </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                </button>  
        </div>
    );
}

export default Password;