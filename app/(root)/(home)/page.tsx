import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-dark-2 text-white font-poppins">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-24 text-center md:py-32">
        <p className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-sky-1">
          Fast • Secure • Reliable Meetings
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          Meet smarter with <span className="text-blue-1">Meetify</span>
        </h1>

        <p className="max-w-3xl text-base text-sky-1 md:text-xl">
          Launch instant calls, schedule team sessions, and keep every recording in one place.
          Meetify helps your team collaborate from anywhere with enterprise-grade video quality.
        </p>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <SignedOut>
            <Link
              href="/sign-up"
              className="rounded-lg bg-blue-1 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-2"
            >
              Get Started Free
            </Link>
            <Link
              href="/sign-in"
              className="rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Sign In
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-1 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-2"
            >
              Go to Dashboard
            </Link>
          </SignedIn>
        </div>

        <div className="mt-8 grid w-full gap-4 text-left md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-dark-1 p-6">
            <h2 className="mb-2 text-xl font-bold">One-click meetings</h2>
            <p className="text-sm text-sky-1">Start or join calls instantly with clean controls and minimal setup.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-dark-1 p-6">
            <h2 className="mb-2 text-xl font-bold">Built for teams</h2>
            <p className="text-sm text-sky-1">Schedule sessions, manage personal rooms, and keep communication flowing.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-dark-1 p-6">
            <h2 className="mb-2 text-xl font-bold">Reliable recordings</h2>
            <p className="text-sm text-sky-1">Capture important discussions and revisit them whenever needed.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
