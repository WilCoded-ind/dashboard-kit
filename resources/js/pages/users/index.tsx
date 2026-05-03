import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { router } from '@inertiajs/react';
import { Trash, Pen, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// datatable
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

// autocount total users, active users, inactive users
// total users


// total user aktif


// total user nonaktif

// search, filter, export, import, pagination, sorting, dll bisa pakai fitur bawaan datatable atau custom sesuai kebutuhan
// search
const handleSearch = (query: string) => {
    // implementasi search, bisa pakai debounce untuk performa lebih baik
    console.log('Searching for:', query);
};

// datatable
const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'name',
        header: 'Full Name',
    },
    {
        accessorKey: 'username',
        header: 'Username',
    },
    {
        accessorKey: 'role.name',
        header: 'Role',
    },
    {
        accessorKey: 'is_active',
        header: 'Status',
        cell: ({ row }) => (
            <Badge variant={row.original.is_active ? "outline" : "destructive"}>
                {row.original.is_active ? 'Active' : 'Inactive'}
            </Badge>
        ),
    },
    {
        accessorKey: 'email',
        header: 'Email Address',
        cell: ({ row }) => (
            <a href={`mailto:${row.original.email}`} className="text-blue-700 hover:underline">
                {row.original.email}
            </a>
        ),
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
            <div className="flex gap-2">
                <a href={`/users/${row.original.id}`}>
                    <Button variant="secondary" size="sm">
                        <Eye className="h-4 w-4" />
                    </Button>
                </a>
                <a href={`/users/${row.original.id}/edit`}>
                    <Button variant="outline" size="sm">
                        <Pen className="h-4 w-4" />
                    </Button>
                </a>
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                        if (confirm('Yakin mau hapus user ini?')) {
                            router.delete(`/users/${row.original.id}`);
                        }
                    }}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        ),
    },
];

export default function UserIndex({ users }: { users: any }) {
    const userRows = users?.data ?? [];

    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-2 md:px-6">
                {/* breadcrumbs */}
                <Breadcrumb className="pb-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">
                                Dashboard
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">
                                Administrator
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>User Management</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <span className="text-md text-gray-600/90">
                        Manage your application's users for better access
                        control and security.
                    </span>
                </div>

                {/* stat */}
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Card className="gap-1 p-4">
                        <h3 className="text-md font-semibold">Total Users</h3>
                        <span>123</span>
                    </Card>
                    <Card className="gap-1 p-4">
                        <h3 className="text-md font-semibold">Active Users</h3>
                        <span>987</span>
                    </Card>
                    <Card className="gap-1 p-4">
                        <h3 className="text-md font-semibold">
                            Inactive Users
                        </h3>
                        <span>247</span>
                    </Card>
                </div>

                {/* body */}
                <div className="mb-2 flex flex-wrap justify-start gap-2 md:justify-end">
                    {/* tombol header */}
                    {/* add */}
                    <a href="users/create">
                        <Button variant="secondary" size="sm">
                            Add New User
                        </Button>
                    </a>

                    {/* filter */}
                    <Button variant="secondary" size="sm">
                        Filter Data
                    </Button>

                    {/* export */}
                    <Button variant="secondary" size="sm">
                        Export Excel
                    </Button>

                    {/* import */}
                    <Button variant="secondary" size="sm">
                        Import Excel
                    </Button>
                </div>

                {/* garis pembatas */}
                <div className="border-t border-gray-400/70 shadow" />

                {/* datatable */}
                <div className="mt-3">
                    <DataTable columns={columns} data={userRows} />
                </div>
            </div>
        </>
    );
}

UserIndex.layout = {
    breadcrumbs: [
        {
            title: 'User Management',
            href: 'users/index',
        },
    ],
};
