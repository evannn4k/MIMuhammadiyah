import { User } from '@/types/user';
import { route } from '@/routes';

type UserData = {
    name: string;
    email: string;
    role: string;
    status: string;
};

export interface UserService {
    getUsers: () => Promise<User[]>;
    getUser: (id: string) => Promise<User>;
    createUser: (UserData) => Promise<void>;
    updateUser: (id: string, UserData) => Promise<void>;
    deleteUser: (id: string) => Promise<void>;
}

// TODO(backend): replace with Inertia props
const mockUserService: UserService = {
    getUsers: async () => {
        const users = await import('@/pages/user/mock').then(
            (m) => m.mockUsers,
        );
        return users as User[];
    },

    getUser: async (id: string) => {
        const users = await import('@/pages/user/mock').then(
            (m) => m.mockUsers,
        );
        return users.find((u) => u.id === id);
    },

    createUser: async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log('Mock create user:', data);
    },

    updateUser: async (id, data) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log('Mock update user:', id, data);
    },

    deleteUser: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log('Mock delete user:', id);
    },
};

export const userService = mockUserService;
