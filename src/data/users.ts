export interface User {
  id: number;
  fullName: string;
  status: 'active' | 'inactive' | 'banned';
  accountBalance: number;
  registrationDate: Date;
  lastLogin: Date;
}

export const users: User[] = [
  {
    id: 1,
    fullName: 'aziz alsaffar',
    status: 'active',
    accountBalance: 10540.7683,
    registrationDate: new Date('2021-08-04T09:24:00'),
    lastLogin: new Date(), // today
  },
  {
    id: 2,
    fullName: 'aya alsakkaf',
    status: 'inactive',
    accountBalance: 520.23,
    registrationDate: new Date('2023-02-14T15:45:00'),
    lastLogin: new Date(new Date().setDate(new Date().getDate() - 10)), // 10 days ago
  },
  {
    id: 3,
    fullName: 'tariq bazadough',
    status: 'banned',
    accountBalance: 0,
    registrationDate: new Date('2022-01-01T08:00:00'),
    lastLogin: new Date('2024-01-15T10:30:00'), // many months ago
  },
];
