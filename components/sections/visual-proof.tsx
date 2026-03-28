import Image from "next/image";

const sampleListings = [
  {
    id: 1,
    location: "Molyko",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    location: "Bomaka",
    price: "35,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    location: "Mile 16",
    price: "60,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    location: "Molyko",
    price: "80,000",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=600",
  },
];

export function VisualProof() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-xl font-medium text-zinc-900 dark:text-zinc-50">
          What you see here is exactly what you&apos;ll meet.
        </p>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8">
          {sampleListings.map((listing) => (
            <div
              key={listing.id}
              className="relative flex-none w-[280px] sm:w-[320px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 snap-center shadow-sm overflow-hidden"
            >
              <div className="relative h-48 w-full bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={listing.image}
                  alt={`House in ${listing.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#006A4C]/90 text-white px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide flex items-center gap-1.5 backdrop-blur-sm">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Verified
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 text-lg">
                    {listing.location}
                  </h3>
                  <span className="font-bold text-zinc-900 dark:text-zinc-50">
                    {listing.price} <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">XAF/mo</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
