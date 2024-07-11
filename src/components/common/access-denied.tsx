import Image from "next/image"
import Link from "next/link"
import AccessIllustration from "../icons/access-illustration"

export default function AccessDenied() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <AccessIllustration width={200} height={200} className="mx-auto" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Access Denied</h1>
        <p className="mt-4 text-muted-foreground">
          You do not have permission to access this page. Please contact your administrator for assistance.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="no-underline inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}