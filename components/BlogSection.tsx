import Image from "next/image";
import Link from "next/link";

const blogs = [
  { title: "The Power of Shirodhara", date: "May 10, 2024", category: "Therapies", img: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg?width=600" },
  { title: "Ayurvedic Diet for Summer", date: "May 05, 2024", category: "Nutrition", img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" },
  { title: "Understanding Your Dosha", date: "April 28, 2024", category: "Basics", img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" },
];

export default function BlogSection() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Knowledge Center</p>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a]">Latest Articles</h2>
          </div>
          <Link href="/blog" className="text-[0.9rem] font-medium border-b border-black/10 pb-1 hover:border-[#5d8a4f] transition-all">
            Browse all articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.title} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-[0.7rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-2">{blog.category} — {blog.date}</p>
              <h3 className="font-serif text-[1.5rem] text-[#1c1f1a] group-hover:text-[#5d8a4f] transition-colors">{blog.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
