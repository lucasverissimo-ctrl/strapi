import Link from "next/link";

export default function ContentBlock({ component }: { component: any }) {
  const flip = component.flip_image_with_text
  return (
    <section className={`block-filled-card section-block relative lg:min-h-[36.5rem] custom animated${flip ? '' : ' bg-gray-light'}`}>
      <picture>
        <source
          media="(min-width: 768px)"
          sizes="(max-width: 1024px) 100vw, 50vw"
          srcSet={`http://localhost:1337${component.image.url}`}
          width="1920"
          height="1314"
        />
        <img
          alt="Image without alt"
          loading="lazy"
          width="1920"
          height="1314"
          decoding="async"
          sizes="(max-width: 1024px) 100vw, 50vw"
          srcSet={`http://localhost:1337${component.image.url}`}
          src={`http://localhost:1337${component.image.url}`}
          className={`top-0 w-full object-cover object-center md:absolute md:h-full md:w-1/2 ${flip ? 'right-0' : 'left-0'}`}
          style={{color: "transparent", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAA5ElEQVR4nAHZACb/AAAmPCFVcDxvi0d7lU5+lFSFolCAnE19mUBwjAM7UwAsXXNRgZhklKgiJjRYb36Et8qBssZ5prtxmrBUepEAY4uafqa0SUtXJQAAcXV7td7qstvmpcvYm77MgqW1AIWkrqHCyISUmlZFRr7W1979/9f2+dHs7sXf4ae/yAB+lZiTqrGhvcC+2Nq0yc692N7D2t6qxMqywsWMoqkAID1KQF9qUnF9aIeUdI+Wi6qxh6WsfpqkaoOOTmlyAAALGCM6QSpBTDlPWjlNVT9VYTlPWjVMVSpBTBAkLGU3a9nbKyLcAAAAAElFTkSuQmCC&quot;)"}}
        /></picture>
      <div className="container-small gap-5 py-10 md:py-16 lg:grid lg:min-h-[36.5rem] grid-cols-2">
        <div className={`flex items-center ${flip ? 'col-start-1 justify-start' : 'col-start-2 justify-end'}`}>
          <div className="flex max-w-[26.25rem] flex-col gap-6">
            {component.category && <p className="text-xs font-bold uppercase animation-content delay-0">{component.category}</p>}
            <h2 className="cms-title animation-content delay-0">{component.title}</h2>
            <div className="cms-rich-text animation-content delay-200">
              <p>
                <span style={{color:"rgb(13,13,56)"}}>{component.description}</span>
              </p>
            </div>
            <div className="animation-content delay-400">
              <Link className="cms-link group/link py-4" target="" href={component.button_URL}>
                <span className="group-hover/link:after:w-full">{component.button_label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 12 12" className="icon">
                  <path fill="currentColor" fillRule="evenodd" d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
