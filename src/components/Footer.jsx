export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {year} Vibe Starter. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
