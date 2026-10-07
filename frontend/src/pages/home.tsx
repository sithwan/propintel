function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-emerald-400 text-sm font-medium mb-3">
          AI-POWERED REAL ESTATE INTELLIGENCE
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          Find Property.
          <br />
          Understand It Better.
        </h1>

        <p className="mt-5 text-slate-400 max-w-xl mx-auto">
          Discover, analyze, compare, and understand properties with
          AI-powered intelligence.
        </p>

        <button className="mt-8 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition">
          Explore Properties
        </button>
      </div>
    </main>
  )
}

export default Home