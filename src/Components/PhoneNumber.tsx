import React from 'react';

type PhoneNumberProps = {
    title: any;
  };
  
  const PhoneNumber: React.FC<PhoneNumberProps> = ({ title }) => {
    return (
        <div className='flex'>
            <select className=" h-10 rounded-md border border-input bg-background px-4 text-black text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option>+971</option>
                <option>+91</option>
                <option>+67</option>
            </select>
            <input
                type="text"
                className=" h-10 w-full rounded-md border border-input bg-background px-4 text-black text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
            />
        </div>
    );
}

export default PhoneNumber;