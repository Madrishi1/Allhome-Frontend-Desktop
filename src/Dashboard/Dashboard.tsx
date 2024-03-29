import React from 'react';
import Header from '../Components/Header';

type DashboardProps = {
    title: any;
  };
  
  const Dashboard: React.FC<DashboardProps> = ({ title }) => {
    return (
        <div>
            <Header title=''/>
            <div className=" min-h-screen">
              <div className=" py-4 px-8  border-b bg-[#F2F4F5]">
                  <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              <div className="flex flex-col md:flex-row">
                <aside className=" bg-white h-1/2 p-6 border-r shadow-lg">
                  <nav className="space-y-1">
                    <a href="#" className="flex items-center text-white bg-[#0F30A5] p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      <span className='ml-2'>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                        <path d="M2 7h20"></path>
                        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                      </svg>
                      <span>Vendor Management</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <line x1="10" x2="21" y1="6" y2="6"></line>
                        <line x1="10" x2="21" y1="12" y2="12"></line>
                        <line x1="10" x2="21" y1="18" y2="18"></line>
                        <path d="M4 6h1v4"></path>
                        <path d="M4 10h2"></path>
                        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
                      </svg>
                      <span>Orders &amp; Transactions</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                      </svg>
                      <span>Banking &amp; Approvals</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                      </svg>
                      <span>Log-out</span>
                    </a>
                  </nav>
                </aside>
                <main className="flex-1 p-6 bg-white">
                  <div className="  mb-6">
                    <div>
                      <h2 className="text-sm font-bold mb-1">Hello, Admin</h2>
                      <p className="text-sm text-gray-600 font-semibold">Please review the following Vendors</p>
                      <p className="text-sm text-blue-600 font-semibold list-disc">
                        <p>ABC Stores</p>
                        <p>Zayn Furnitures</p>
                        <p>AI more</p>
                      </p>
                    </div>
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className=" flex flex-row border bg-card text-card-foreground shadow-sm col-span-1" data-v0-t="card">
                        <svg className="w-8 h-8 text-gray-800 my-8 mx-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.648 9.636c.25 0 .498-.064.717-.186a1 1 0 1 1 .979 1.745 3.475 3.475 0 1 1 .185-5.955 1 1 0 1 1-1.082 1.681 1.475 1.475 0 1 0-.799 2.715Zm6.186 0c.252 0 .5-.063.72-.187a1 1 0 1 1 .974 1.746 3.475 3.475 0 1 1 .188-5.955 1 1 0 0 1-1.084 1.681 1.475 1.475 0 1 0-.8 2.715h.002Z"/>
                        </svg>
                          <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">234</h3>
                            <p className="text-sm text-muted-foreground">Stores</p>
                          </div>
                        </div>
                        <div className=" flex flex-row border bg-card text-card-foreground shadow-sm col-span-1" data-v0-t="card">
                        <svg className="w-8 h-8 text-gray-800 my-8 mx-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.648 9.636c.25 0 .498-.064.717-.186a1 1 0 1 1 .979 1.745 3.475 3.475 0 1 1 .185-5.955 1 1 0 1 1-1.082 1.681 1.475 1.475 0 1 0-.799 2.715Zm6.186 0c.252 0 .5-.063.72-.187a1 1 0 1 1 .974 1.746 3.475 3.475 0 1 1 .188-5.955 1 1 0 0 1-1.084 1.681 1.475 1.475 0 1 0-.8 2.715h.002Z"/>
                        </svg>
                          <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">149</h3>
                            <p className="text-sm text-muted-foreground">Orders</p>
                          </div>
                        </div>
                        <div className=" flex flex-row border bg-card text-card-foreground shadow-sm col-span-1" data-v0-t="card">
                        <svg className="w-8 h-8 text-gray-800 my-8 mx-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.648 9.636c.25 0 .498-.064.717-.186a1 1 0 1 1 .979 1.745 3.475 3.475 0 1 1 .185-5.955 1 1 0 1 1-1.082 1.681 1.475 1.475 0 1 0-.799 2.715Zm6.186 0c.252 0 .5-.063.72-.187a1 1 0 1 1 .974 1.746 3.475 3.475 0 1 1 .188-5.955 1 1 0 0 1-1.084 1.681 1.475 1.475 0 1 0-.8 2.715h.002Z"/>
                        </svg>
                          <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">14</h3>
                            <p className="text-sm text-muted-foreground">Queries</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="bg-white p-6  shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-semibold">RECENT ORDER</h3>
                      <a href="#" className="text-[#FA8232] font-semibold  text-sm">
                        View All →
                      </a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead className='bg-[#F2F4F5] mt'>
                          <tr className="text-left text-gray-600">
                            <th className="py-2">Order ID</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Total</th>
                            <th className="py-2">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-left border-b">
                            <td className="py-4">#96459761</td>
                            <td className="py-4 text-[#FA8232] font-semibold ">IN PROCESS</td>
                            <td className="py-4">Dec 30, 2019 05:18</td>
                            <td className="py-4">SAR 1,500 (5 Products)</td>
                            <td className="py-4">
                              <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr className="text-left border-b">
                            <td className="py-4">#96459761</td>
                            <td className="py-4 text-[#2DB224] font-semibold ">COMPLETED</td>
                            <td className="py-4">Dec 30, 2019 05:18</td>
                            <td className="py-4">SAR 1,500 (5 Products)</td>
                            <td className="py-4">
                              <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr className=" text-left border-b">
                            <td className="py-4">#96459761</td>
                            <td className="py-4 text-[#EE5858] font-semibold ">CANCELED</td>
                            <td className="py-4">Dec 30, 2019 05:18</td>
                            <td className="py-4">SAR 1,500 (5 Products)</td>
                            <td className="py-4">
                              <a href="#" className="text-blue-600 font-semibold">
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              </div>
            </div>
        </div>
    );
}

export default Dashboard;