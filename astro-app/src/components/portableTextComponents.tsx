// Add Tailwind classes to the Portable Text from Sanity

export const portableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-headline font-bold mt-8 mb-4 text-dark">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-headline font-semibold mt-6 mb-3 text-dark">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-headline font-medium mt-4 mb-2 text-dark">{children}</h3>,
      normal: ({ children }) => <p className="text-base text-muted mb-4 font-light font-body">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold text-dark">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => (
        <a href={value?.href} className="text-secondary underline hover:text-primary" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };
  