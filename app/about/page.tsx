import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Twitter, Linkedin, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { authors } from '@/data/blog-data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            We're passionate about sharing knowledge and helping developers grow. 
            Our mission is to create high-quality content that inspires and educates.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div
  className="prose prose-lg max-w-none relative"
  style={{
    position: 'relative',
    fontFamily: '"Playfair Display", Georgia, serif',
    color: 'rgba(55, 65, 81, 0.85)', // soft gray
    lineHeight: '1.75',
    letterSpacing: '0.3px'
  }}
>
  {/* Fade overlay */}
  <div
    style={{
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '6rem',
      background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)',
      pointerEvents: 'none'
    }}
  />

  <p className="text-xl mb-6">
    BlogSpace was born from a simple idea: make complex web development concepts 
    accessible to everyone. Whether you're just starting your coding journey or 
    you're a seasoned developer looking to stay current with the latest trends, 
    we're here to help.
  </p>

  <p className="mb-6">
    Founded in 2025, we've grown from a small personal blog to a comprehensive 
    resource trusted by developers worldwide. Our team of experienced writers 
    and industry experts work tirelessly to bring you practical tutorials, 
    in-depth guides, and insights that you can apply immediately in your projects.
  </p>

  <p className="mb-6">
    We believe that learning should be engaging, practical, and fun. That's why 
    every article we publish goes through a rigorous review process to ensure 
    it meets our high standards for quality, accuracy, and usefulness.
  </p>
</div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-gray-600 text-lg">
              Here's what we've accomplished together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">1M+</h3>
                <p className="text-gray-600 text-lg">Developers Helped</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600 text-lg">Articles Published</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600 text-lg">Industry Awards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our diverse team of writers, developers, and designers work together 
              to create content that makes a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author) => (
              <Card key={author.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={120}
                    height={120}
                    className="w-30 h-30 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {author.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {author.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {author.social.twitter && (
                      <Link href={author.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                        <Twitter className="w-5 h-5" />
                      </Link>
                    )}
                    {author.social.linkedin && (
                      <Link href={author.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    )}
                    {author.social.github && (
                      <Link href={author.social.github} className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            To democratize web development education by providing accessible, 
            high-quality content that empowers developers at every stage of their journey. 
            We believe everyone should have the opportunity to learn, grow, and build 
            amazing things on the web.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get in Touch
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
