import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export default function Permissions() {
    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* breadcrumbs */}
                <div>
                    {/* breadcrumbs sementara buat preview aja */}
                    <nav
                        className="flex justify-start pb-4"
                        aria-label="Breadcrumb"
                    >
                        <ol className="flex flex-wrap items-center space-y-1 space-x-2 md:space-x-3">
                            <li className="flex items-center">
                                <a
                                    href="/dashboard"
                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
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
                                        Roles & Permissions
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                    <a
                                        href="/permissions"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                                    >
                                        Permission Settings
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Set Your Permission</h1>
                    <span className="text-md text-gray-600/90">
                        Configure permissions for each role to control what
                        actions and features they can access.
                    </span>
                </div>

                {/* checkbox permission */}
                <div className="">
                    {/* garis pembatas */}
                    <div className="border-t border-gray-400/70 shadow" />

                    <div className="mt-3">
                        <Card className="p-5 md:p-6">
                            <div className="flex flex-col text-center">
                                <h1 className="text-xl font-bold">
                                    Choose Permissions for Admin Role
                                </h1>
                                <span className="text-sm text-muted-foreground md:mx-100">
                                    *Select the permissions for the Admin role
                                    to control what actions and features they
                                    can access within the application.
                                </span>
                            </div>

                            {/* header */}
                            <table>
                                <thead>
                                    <tr>
                                        <th className="w-1/3 border-b p-4 text-left">
                                            Menu Name
                                        </th>
                                        <th className="border-b p-4 text-left">
                                            Create
                                        </th>
                                        <th className="border-b p-4 text-left">
                                            Edit
                                        </th>
                                        <th className="border-b p-4 text-left">
                                            Delete
                                        </th>
                                        <th className="border-b p-4 text-left">
                                            View
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 pl-4 text-left">
                                            User Management
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>

                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pl-4 text-left">
                                            Role & Permission
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pl-4 text-left">
                                            Menu Management
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                        <td className="py-2 pl-4 text-left">
                                            <Checkbox />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* border */}
                            <div className="border-t border-gray-400/30" />

                            {/* button */}
                            <div className="flex justify-end gap-2">
                                {/* simpan */}
                                <Button className="">Save</Button>

                                {/* batal */}
                                <a href="/roles">
                                    <Button variant="outline" className="">
                                        Cancel
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

Permissions.layout = {
    breadcrumbs: [
        {
            title: 'Permissions',
            href: '/permissions',
        },
    ],
};
