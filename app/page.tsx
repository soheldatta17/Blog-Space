import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/blog/blog-card";
import Sidebar from "@/components/blog/sidebar";
import { getFeaturedPosts, getRecentPosts, categories } from "@/data/blog-data";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Amazing
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Stories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Explore cutting-edge web development tutorials, best practices,
              and insights from industry experts. Stay ahead of the curve with
              our curated content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                Start Reading
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <>
              <style>
                {`
      @keyframes glowMove {
        0% { background-position: 0% 0%; }
        50% { background-position: 0% 100%; }
        100% { background-position: 0% 0%; }
      }
    `}
              </style>

              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">1M+</h3>
                  <p
                    className="text-gray-600"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,1) 50%, rgba(59,130,246,0.2) 100%)",
                      backgroundSize: "100% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "glowMove 2.5s ease-in-out infinite",
                    }}
                  >
                    Monthly Readers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    500+
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,1) 50%, rgba(34,197,94,0.2) 100%)",
                      backgroundSize: "100% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "glowMove 2.5s ease-in-out infinite",
                    }}
                  >
                    Quality Articles
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                  <p
                    className="text-gray-600"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(168,85,247,0.2) 0%, rgba(168,85,247,1) 50%, rgba(168,85,247,0.2) 100%)",
                      backgroundSize: "100% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "glowMove 2.5s ease-in-out infinite",
                    }}
                  >
                    Expert Authors
                  </p>
                </CardContent>
              </Card>
            </>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Posts
              </h2>
              <p className="text-gray-600 text-lg">
                Hand-picked articles you shouldn't miss
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="hidden md:flex">
                View All Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>

          <div className="text-center lg:hidden">
            <Link href="/blog">
              <Button variant="outline">
                View All Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts & Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.slice(0, 4).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dive deep into your favorite topics and discover new areas of
              interest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {category.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-200"
                      >
                        {category.postCount}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles and insights delivered straight to your
            inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
