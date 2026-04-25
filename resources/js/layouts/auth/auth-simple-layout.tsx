import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
            <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-[60%_40%] overflow-hidden rounded-4xl border shadow-xl">
                {/* Grid kiri - background image */}
                <div className="relative hidden md:block">
                    <img src="/images/login-bg.png" alt="" className="p-18" />
                </div>

                {/* Grid kanan - form */}
                <div className="flex flex-col items-center justify-center gap-8 p-10">
                    <div className="flex flex-col items-center">
                        <div className="flex h-24 w-24 items-center justify-center">
                            <img src="/images/logo-new.png" alt="FahleviLabs" />
                        </div>
                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-bold text-muted-foreground">{title}</h1>
                            <p className="text-center text-sm text-muted-foreground">
                                {description}
                            </p>
                            <div className='text-left pt-4'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
