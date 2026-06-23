export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Maison Salih
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Créations artisanales & parfums d'exception
        </p>
        <a 
          href="https://instagram.com/maisonsalih" 
          target="_blank"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
        >
          Nous suivre sur Instagram
        </a>
      </div>
    </main>
  )
}
