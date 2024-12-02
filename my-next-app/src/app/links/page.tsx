// app/links/page.tsx


export default function LinksPage() {
  return (
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
            Сайты, которые я считаю полезными
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="p-6 bg-white rounded-lg border shadow-md border-gray-700"
            >
              <div className="flex justify-between items-center mb-5 text-gray-600">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <post.icon className="mr-1 w-3 h-3" />
                  {post.category}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {post.name}
              </h2>
              <p className="mb-5 font-light text-gray-500">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={post.link}
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  {post.name}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
  );
}

interface BlogPost {
  category: string;
  name: string;
  description: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const DrawBoard: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
       width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M3 4.92857C3 3.90506 3.80497 3 4.88889 3H19.1111C20.195 3 21 3.90506 21 4.92857V13h-3v-2c0-.5523-.4477-1-1-1h-4c-.5523 0-1 .4477-1 1v2H3V4.92857ZM3 15v1.0714C3 17.0949 3.80497 18 4.88889 18h3.47608L7.2318 19.3598c-.35356.4243-.29624 1.0548.12804 1.4084.42428.3536 1.05484.2962 1.40841-.128L10.9684 18h2.0632l2.2002 2.6402c.3535.4242.9841.4816 1.4084.128.4242-.3536.4816-.9841.128-1.4084L15.635 18h3.4761C20.195 18 21 17.0949 21 16.0714V15H3Z"/>
    <path d="M16 12v1h-2v-1h2Z"/>
  </svg>
);

const Resume: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
       width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd"
          d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
          clipRule="evenodd"/>
  </svg>
);

const blogPosts: BlogPost[] = [
  {
    category: "Доска Для Рисований",
    name: "Excalidraw",
    description:
      "Адекватная онлайн-рисовалка с совместным доступом для создания схем, мозговых штурмов и совместной работы в реальном времени.",
    link: "https://excalidraw.com/",
    icon: DrawBoard,
  },
  {
    category: "Резюме",
    name: "Rxresu.me",
    description:
      "Конструктор резюме.",
    link: "https://rxresu.me/",
    icon: Resume,
  },
];
