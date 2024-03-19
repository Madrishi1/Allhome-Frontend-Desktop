import React from 'react';

type AdminLoginProps = {
    title: any;
  };
  
  const AdminLogin: React.FC<AdminLoginProps> = ({ title }) => {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#333]">
  <div className="flex w-[400px] flex-col rounded-lg border-2 border-white bg-[#333] p-8 text-white">
    <h1 className="pb-4 text-center text-2xl font-bold">Admin Portal</h1>
    <div className="mb-4">
      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        Email / Phone Number
      </label>
      <input
        id="email"
        className="w-full rounded-md border-2 border-white bg-transparent px-3 py-2 leading-tight text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Email / Phone Number"
        type="email"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="mb-2 block text-sm font-medium">
        Password
      </label>
      <input
        id="password"
        className="w-full rounded-md border-2 border-white bg-transparent px-3 py-2 leading-tight text-white placeholder-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Password"
        type="password"
      />
      <a href="#" className="mt-1 block text-sm text-right text-gray-300 hover:text-white">
        htmlForgot password?
      </a>
    </div>
    <button className="rounded-md bg-white px-4 py-2 font-bold text-black hover:bg-gray-200">Login</button>
  </div>
</div>
    );
}

export default AdminLogin;