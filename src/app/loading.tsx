import LoadingSkeleton from './LoadingSkeleton';

export default function Loading() {
  return (
    <>
      <LoadingSkeleton />
      <div className='mt-3'></div>
      <LoadingSkeleton />
      <div className='mt-3'></div>
      <LoadingSkeleton />
    </>
  );
}
