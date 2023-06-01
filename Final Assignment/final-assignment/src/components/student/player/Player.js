import React from "react";
import { Link } from "react-router-dom";

const Player = ({ video }) => {
  const { title, url, createdAt, views, duration, description } = video;
  return (
    <div>
      <div class="mx-auto max-w-7xl px-5 lg:px-0">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <iframe
              width="100%"
              class="aspect-video"
              src={url}
              title={title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div>
              <h1 class="text-lg font-semibold tracking-tight text-slate-100">
                {title}
              </h1>
              <h2 class=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                {createdAt}
              </h2>

              <div class="flex gap-4">
                <Link
                  href="#"
                  class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                >
                  এসাইনমেন্ট
                </Link>

                <a
                  href="./Quiz.html"
                  class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                >
                  কুইজে অংশগ্রহণ করুন
                </a>
              </div>
              <p class="mt-4 text-sm text-slate-400 leading-6">{description}</p>
            </div>
          </div>

          <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
            <div class="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>

              <div clas="flex flex-col w-full">
                <a href="title">
                  <p class="text-slate-50 text-sm font-medium">{title}</p>
                </a>
                <div>
                  <span class="text-gray-400 text-xs mt-1">{duration}</span>
                  <span class="text-gray-400 text-xs mt-1"> | </span>
                  <span class="text-gray-400 text-xs mt-1">{views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
