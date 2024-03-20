import React from 'react';

function Rough() {
    return (
        <div className="min-h-screen bg-gray-100">
  <div className="flex flex-col md:flex-row">
    <nav className="w-full md:w-64 bg-white shadow-md">
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <div className="mt-8">
          <ul>
            <li className="flex items-center space-x-2 py-2 text-blue-600">
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
                className="text-blue-600"
              >
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 py-2">
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
                className="text-gray-600"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                <path d="M2 7h20"></path>
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
              </svg>
              <span>Vendor Management</span>
            </li>
            <li className="flex items-center space-x-2 py-2">
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
                className="text-gray-600"
              >
                <line x1="10" x2="21" y1="6" y2="6"></line>
                <line x1="10" x2="21" y1="12" y2="12"></line>
                <line x1="10" x2="21" y1="18" y2="18"></line>
                <path d="M4 6h1v4"></path>
                <path d="M4 10h2"></path>
                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
              </svg>
              <span>Orders &amp; Transactions</span>
            </li>
            <li className="flex items-center space-x-2 py-2">
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
                className="text-gray-600"
              >
                <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M6 12h.01M18 12h.01"></path>
              </svg>
              <span>Banking &amp; Approvals</span>
            </li>
            <li className="flex items-center space-x-2 py-2">
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
                className="text-gray-600"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
              <span>Log-out</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main className="flex-1 p-6">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Hello, Admin</h1>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 md:hidden">
          Menu
        </button>
      </header>
      <section className="mt-6">
        <p>Please review the following Vendors</p>
        <ul className="mt-2">
          <li>Zayn Furniture</li>
          <li>ABC Stores</li>
          <li>AZ Furnitures</li>
          <li className="text-blue-600">All more</li>
        </ul>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center p-4"
          data-v0-t="card"
        >
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
            className="text-blue-600"
          >
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
            <path d="M2 7h20"></path>
            <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
          </svg>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">234</h3>
            <p>Stores</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center p-4"
          data-v0-t="card"
        >
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
            className="text-gray-600"
          >
            <line x1="10" x2="21" y1="6" y2="6"></line>
            <line x1="10" x2="21" y1="12" y2="12"></line>
            <line x1="10" x2="21" y1="18" y2="18"></line>
            <path d="M4 6h1v4"></path>
            <path d="M4 10h2"></path>
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
          </svg>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">149</h3>
            <p>Orders</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center p-4"
          data-v0-t="card"
        >
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
            className="text-gray-600"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">14</h3>
            <p>Queries</p>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">RECENT ORDER</h2>
          <a className="text-blue-600" href="#">
            View All
          </a>
        </div>
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm mt-4">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Order ID
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Date
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Total
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#96459761</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-blue-600">IN PROGRESS</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Dec 30, 2019 05:18</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 1,500 (5 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#71676767</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">COMPLETED</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Feb 2, 2019 19:28</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 80 (1 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#95214562</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-red-600">CANCELLED</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Mar 20, 2019 23:14</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 160 (6 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#71676767</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">COMPLETED</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Feb 2, 2019 19:28</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 80 (1 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#57146585</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">COMPLETED</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Feb 2, 2019 19:28</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 2,300 (2 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#57146585</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-red-600">CANCELLED</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Dec 30, 2019 07:52</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 70 (1 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">#67397743</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">COMPLETED</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Dec 7, 2019 23:26</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">SAR 220 (0 Products)</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <a className="text-blue-600" href="#">
                    View Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</div>
    );
}

export default Rough;