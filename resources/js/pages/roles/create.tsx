import { Head } from '@inertiajs/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';

export default function CreateRole() {
    return (
        <>
            <Head title="Create Role" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* breadcrumbs */}
                <div>
                    {/* breadcrumbs sementara buat preview aja */}
                    <nav
                        className="flex flex-wrap justify-start pb-4"
                        aria-label="Breadcrumb"
                    >
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a
                                    href="/dashboard"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                    <a
                                        href="/roles"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                                    >
                                        Role & Permissions
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                    <a
                                        href="/roles/create"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                                    >
                                        Add New Role
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* header */}
                <div className="">
                    <div>
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">
                                Add your new role
                            </h1>
                            <span className="text-md text-gray-600/90">
                                Create and manage your application's roles for better access control and security.
                            </span>
                        </div>
                    </div>

                    <div>
                        {/* garis pembatas */}
                        <div className="border-t border-gray-400/70 shadow" />

                        <div className="mt-3">
                            <Card className="md:w-1/2 p-5 md:p-6">
                                <div className="flex flex-col text-left">
                                    <h1 className="text-xl font-bold">
                                        Form New Role
                                    </h1>
                                    <span className="text-sm text-muted-foreground">
                                        Fields marked with <span className='text-destructive'>*</span> are required
                                    </span>
                                </div>

                                <div className="pt-6">
                                    {/* form */}
                                    <div className="flex flex-col gap-4">
                                        {/* nama role */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                            <Label>
                                                Role Name
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter role name"
                                                className="w-full col-span-2"
                                            />
                                        </div>

                                        {/* initials */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                            <Label>
                                                Initials
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter initials (e.g., admin, editor)"
                                                className="w-full col-span-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* border */}
                                <div className="border-t border-gray-400/30" />

                                {/* button */}
                                <div className='flex justify-end gap-2'>
                                    {/* simpan */}
                                    <Button className=''>
                                        Save
                                    </Button>

                                    {/* batal */}
                                    <a href="/roles">
                                        <Button variant="outline" className=''>
                                            Cancel
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* body */}
            </div>
        </>
    );
}

// CreateUser.layout = {
//     breadcrumbs: [
//         {
//             title: 'Create User',
//             href: '#',
//         },
//     ],
// };
