import React from 'react';
import { actiontypes } from '../../state/actiontypes';

const User = ({ user, dispatch }) => {
  const { firstname, lastname, email, password } = user;
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-secondary-700">
          {firstname}
        </td>
        <td className="px-4 py-4 text-sm font-medium text-secondary-700">
          {lastname}
        </td>
        <td className="px-4 py-4 text-sm font-medium text-secondary-700">
          {email}
        </td>

        <td className="px-4 py-4 text-sm font-medium text-secondary-700">
          {password}
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button
              onClick={() =>
                dispatch({ type: actiontypes.DELETE_USER, payload: user })
              }
              className="font-semibold text-red-600 duration-300 hover:text-red-400"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
