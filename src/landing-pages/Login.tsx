import React from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import Password from '../Components/Password';


type LoginProps = {
  title: string;
};

const Login: React.FC<LoginProps> = ({ title }) => {
    return (
        <div className="min-h-screen bg-[#111111A1] text-white ">
          <Header title={""} />
          
          <main className="py-12 ">
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              <div className='flex justify-start'>
              <div className='max-w-md p-2'>
                <h2 className="text-4xl font-bold mb-6"><FormattedMessage id="app.desLargeFont"/></h2>
                <p className="mb-4">
                  <FormattedMessage id="app.desSmallFont"/>
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 1
                  </li>
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 2
                  </li>
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 3
                  </li>
                  <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-sm text-[#FFFFFF] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
                  </svg>
                    Feature 4
                  </li>
                </ul>
              </div>
              </div>
              <div className=" bg-white shadow-lg p-6 mt-10 flex-auto w-full max-w-xs">
              <div dir="ltr" >
                <div className="flex space-x-1 border-b">
                  <div className="w-full py-2.5 text-center font-medium text-gray-600 border-b-2  border-blue-500">
                    <FormattedMessage id="app.signIn"/>
                  </div>
                  <div className="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-blue-500">
                    <Link to ="/Register"><FormattedMessage id="app.register"/></Link>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-y-4 mt-4">
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'><FormattedMessage id= "emailPhone"/></span>
                      <input
                        type="text"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Email Address / Phone Number"
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className='text-sm  font-bold mt- text-[#323031]'><FormattedMessage id="app.password"/></span>
                      <Password title=""/>
                    </div>
                    <div className="flex flex-col">
                      <Button title={<FormattedMessage id="app.process"/>}/>
                    </div>
                    </form>
                  </div>
            </div>
            </div>
            </div>
            </div>
          </main>
        </div>
    );
}

export default Login;