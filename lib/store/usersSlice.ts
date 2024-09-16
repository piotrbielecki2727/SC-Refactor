import { FilterValues } from '@/UsersTable/components/FilterSection/types';
import { User } from '@/UsersTable/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
  users: User[];
  filteredUsers: User[];
  filterValues: FilterValues;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filterValues: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilterValues: (state, action: PayloadAction<FilterValues>) => {
      state.filterValues = action.payload;
    },
    resetFilterValues: (state) => {
      state.filterValues = initialState.filterValues;
    },
    filterUsers: (state) => {
      const { filterValues, users } = state;
      const isFilterApplied = Object.values(filterValues).some((value) => value);

      state.filteredUsers = isFilterApplied
        ? users.filter((user) =>
            Object.entries(filterValues).every(([key, value]) => {
              if (value) {
                const userValue = user[key as keyof User]?.toString().toLowerCase();
                return userValue?.includes(value.toLowerCase());
              }
              return true;
            })
          )
        : users;
    },
  },
});

export const { setUsers, setFilterValues, filterUsers, resetFilterValues } = usersSlice.actions;
export default usersSlice.reducer;
