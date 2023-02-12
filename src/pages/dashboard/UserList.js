import React from 'react';
import User from './User';
import { useUserContext } from '../../context/UserContext';

const UserList = () => {
  const {
    state: { error, loading, users },
    dispatch,
  } = useUserContext();

  let content;
  if (error) {
    content = 'Something went wrong!';
  }
  if (loading) {
    content = 'Loading...';
  }
  if (!error && !loading && users.length === 0) {
    content = 'Database is empty';
  }

  if (!error && !loading && users.length) {
    content = users.map((user) => (
      <User key={user._id} user={user} dispatch={dispatch} />
    ));
  }

  return (
    <section className="my-24 container px-4 mx-auto">
      <h3 className="font-bold -mx-4 md:mx-0 mb-12 text-4xl text-secondary-700">
        User List
      </h3>
      <div className="flex flex-col ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-secondary-400"
                    >
                      First Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-secondary-400"
                    >
                      Last name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-secondary-400"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-secondary-400"
                    >
                      Password
                    </th>
                  </tr>
                </thead>
                {content}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
