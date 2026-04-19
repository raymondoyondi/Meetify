# Meetify 🎥 - The Enterprise-Ready Video Infrastructure for Modern Teams.

<img width="1484" height="715" alt="Screenshot 2026-04-18 8 43 49 PM" src="https://github.com/user-attachments/assets/499eb00e-78ec-498d-af2a-8992b39bce97" />

Meetify is a modern, enterprise-ready video conferencing application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. It leverages the **Stream Video SDK** to provide a scalable, low-latency, and high-quality communication experience.

## 🚀 Features

* **Secure Authentication:** Robust user login and registration via Clerk.
* **Instant Meetings:** Create a new meeting and share the link in seconds.
* **Scheduled Meetings:** Plan ahead by scheduling future sessions with a built-in calendar view.
* **Meeting Recordings:** Record your sessions and access them later from your personal dashboard.
* **Real-time Interaction:** Features include screen sharing, participant lists, and integrated chat.
* **Personal Room:** A dedicated, permanent link for your recurring meetings.
* **Responsive Design:** Optimized for desktop, tablet, and mobile viewing.

## 🛠️ Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, Shadcn UI
* **Video Infrastructure:** Stream Video SDK
* **Auth:** Clerk
* **Deployment:** Vercel (Recommended)

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (Latest LTS)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/raymondoyondi/Meetify.git](https://github.com/raymondoyondi/Meetify.git)
   cd Meetify

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory and add your credentials from Clerk and GetStream:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=
   ```

4. **Run the development server:**
   ```
   npm run dev
   # or
   yarn dev
   ```

5. **Open the app:**
Open `http://localhost:3000` in your browser to see the result.

## Project Structure

This project uses the [Next.js App Router](https://nextjs.org) structure with a clear separation of concerns to maintain organization and scalability.
```
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI components
├── constants/        # Configuration and static data
├── hooks/            # Custom React hooks (Meeting logic)
├── lib/              # Utility functions and Stream actions
├── providers/        # Context providers (Stream, Clerk)
└── public/           # Static assets (Icons, Images)
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the **MIT License**. See `LICENSE` for more information.
