const DELAYS = ['delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

function WordLine({ text, startIndex }: { text: string; startIndex: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={word + i}
          className={`inline-block animate-word-pop ${DELAYS[(startIndex + i) % DELAYS.length]} mr-[0.28em] last:mr-0`}
        >
          {word}
        </span>
      ))}
    </>
  )
}

export default function WordPopHeading({ className = '' }: { className?: string }) {
  return (
    <h1 className={className}>
      <span className="block">
        <WordLine text="Everything" startIndex={0} />
      </span>
      <span className="block">
        <WordLine text="Your Pets Love" startIndex={1} />
      </span>
    </h1>
  )
}
