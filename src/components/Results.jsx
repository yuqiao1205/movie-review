import Card from './Card';

export default function Results({ results }) {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6'>
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </section>
  );
}
