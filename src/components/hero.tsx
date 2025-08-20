/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900" id="news">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          Why choose NeuraNews?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
          Everything you need to stay ahead in AI
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Mobile Friendly */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Mobile Friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Read the latest AI news anywhere with a seamless and
                  responsive mobile experience.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <img
                  alt="Mobile preview"
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="size-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Fast Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Get real-time updates with blazing-fast APIs powered by
                  trusted global sources.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 py-8">
                <img
                  alt="Performance"
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Trusted Sources
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  All news is verified from official media outlets and credible
                  sources — no fake news.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center py-6">
                <img
                  alt="Security"
                  src="https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-40 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Powerful APIs */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  Integrated with NewsAPI, GNews, and other leading platforms to
                  keep you always up-to-date.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow flex items-center justify-center">
                <img
                  alt="API Integration"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
