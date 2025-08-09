import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import AuthorCard from '@/components/blog/author-card';
import CommentsSection from '@/components/blog/comments-section';
import Sidebar from '@/components/blog/sidebar';
import { getPostBySlug, blogPosts } from '@/data/blog-data';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((paragraph, index) => {
        if (paragraph.trim() === '') return null;
        
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
              {paragraph.replace('# ', '')}
            </h1>
          );
        }
        
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-5">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        
        if (paragraph.startsWith('```')) {
          return (
            <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
              <code>{paragraph.replace(/```\w*\n?/g, '').replace(/```$/g, '')}</code>
            </pre>
          );
        }
        
        if (paragraph.startsWith('- ')) {
          return (
            <li key={index} className="text-gray-700 leading-relaxed mb-2">
              {paragraph.replace('- ', '')}
            </li>
          );
        }
        
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <div className="mb-6">
              <Link href="/">
                <Button variant="ghost" className="hover:bg-gray-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Post Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Featured Image */}
              <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            <Separator className="mb-8" />

            {/* Post Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {formatContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag.toLowerCase()}`}>
                    <Badge variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Author Card */}
            <AuthorCard author={post.author} />

            {/* Comments */}
            <CommentsSection />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <div className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={300}
                          height={150}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}