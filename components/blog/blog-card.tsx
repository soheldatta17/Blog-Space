import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClass = featured 
    ? "group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:-translate-y-1"
    : "group bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200";

  return (
    <article className={cardClass}>
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <Image
            src={post.image}
            alt={post.title}
            width={featured ? 800 : 400}
            height={featured ? 400 : 200}
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {post.featured && (
            <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
              Featured
            </Badge>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mt-3 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            </div>
          </div>

          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}