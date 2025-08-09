import Link from 'next/link';
import { Search, Calendar, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, getRecentPosts } from '@/data/blog-data';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const recentPosts = getRecentPosts(5);
  const popularTags = ['React', 'JavaScript', 'Next.js', 'TypeScript', 'CSS', 'Node.js', 'UI/UX', 'DevOps'];

  return (
    <aside className={`space-y-6 ${className}`}>
      {/* Search Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Search className="w-5 h-5" />
            Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search posts..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <h4 className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug">
                  {post.title}
                </h4>
              </Link>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {category.name}
              </span>
              <Badge variant="secondary" className="text-xs">
                {category.postCount}
              </Badge>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="w-5 h-5" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link key={tag} href={`/tags/${tag.toLowerCase()}`}>
                <Badge variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg text-blue-900">Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-700 mb-4">
            Get the latest posts delivered right to your inbox.
          </p>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-blue-200 focus:border-blue-400"
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}