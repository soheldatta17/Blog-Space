import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Author } from '@/types/blog';
import { Card, CardContent } from '@/components/ui/card';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Image
            src={author.avatar}
            alt={author.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {author.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {author.bio}
            </p>
            <div className="flex space-x-3">
              {author.social.twitter && (
                <Link
                  href={author.social.twitter}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              )}
              {author.social.linkedin && (
                <Link
                  href={author.social.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              )}
              {author.social.github && (
                <Link
                  href={author.social.github}
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}