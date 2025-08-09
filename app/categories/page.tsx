import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/blog-data';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover articles organized by topics that matter to you. From web development 
            to design principles, find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
                    <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-200">
                      {category.postCount} posts
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                    <span>Explore articles</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Most Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.slice(0, 2).map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Card className="group bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <BookOpen className="w-12 h-12 text-blue-600" />
                      <Badge className="bg-blue-600 text-white">
                        Featured
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {category.postCount} articles available
                      </span>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}