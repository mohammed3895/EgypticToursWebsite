import Image from "next/image";
import React from "react";

const Collection = () => {
  return (
    <div className="relative overflow-hidden px-4">
      <div className="pb-80 pt-16 px-4 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div data-aos="fade-right" className="sm:max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight title-color lg:text-4xl my-4 text-left">
              Awosome Places You will love
            </h2>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:ml-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-3.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-4.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-5.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-6.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-7.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-4.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          //   fill
                          width={100}
                          height={300}
                          src="/collection/col-3.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="/offers"
                className="inline-block rounded-md border border-transparent bg-[var(--main-color)] px-8 py-3 text-center font-medium text-white hover:opacity-90"
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
