// app/page.tsx
'use client'


export default function HomePage() {

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Дмитрий Просвиркин
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                <span
                  className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">backend</span>
          <span
            className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">frontend</span>
          <span
            className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">python</span>
          <span
            className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">devops</span>
          <span
            className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-900 dark:text-gray-300">docker</span>
          <br/>
          <span
            className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">typescript</span>

          <span
            className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300">react</span>

          <span
            className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-teal-900 dark:text-teal-300">next.js</span>
          <span
            className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-900 dark:text-orange-300">go</span>
          <span
            className="bg-lime-100 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-lime-900 dark:text-lime-300">scala</span>
          <br/>
          <span
            className="bg-cyan-100 text-cyan-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-cyan-900 dark:text-cyan-300">postgresql</span>

          <span
            className="bg-emerald-100 text-emerald-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-emerald-900 dark:text-emerald-300">mongodb</span>
          <span
            className="bg-amber-100 text-amber-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-amber-900 dark:text-amber-300">ci/cd</span>
          <span
            className="bg-fuchsia-100 text-fuchsia-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-fuchsia-900 dark:text-fuchsia-300">linux</span>

        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
          <a
            href="/resume_Dmitrii_Prosvirkin.pdf"
            className="flex items-center gap-2 rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 20">
              <path
                d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
            </svg>
            <span>Резюме</span>
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
          <a
            href="https://github.com/Trunn5/"
            className="flex items-center gap-2 rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
          <a
            href="https://t.me/prosvirkin"
            className="flex items-center gap-2 rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"/>
            </svg>
            <span>Telegram Рабочий</span>
          </a>
        </div>
      </div>
    </>
  );
}
