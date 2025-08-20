// pages/login.js
import { useRouter } from "next/router";
import Nav from "../components/Nav";

export default function Login() {
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    // Fake login -> send to members dashboard
    router.push("/member");
  }

  return (
    <>
      <Nav />
      <main className="gf-container py-12">
        <h1 className="text-3xl font-extrabold mb-6">Log in</h1>
        <form onSubmit={onSubmit} className="max-w-md space-y-4">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-lg px-4 py-3 bg-neutral-900/60 border border-neutral-700"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-lg px-4 py-3 bg-neutral-900/60 border border-neutral-700"
          />
          <button className="btn-primary w-full">Continue</button>
        </form>
      </main>
    </>
  );
}
