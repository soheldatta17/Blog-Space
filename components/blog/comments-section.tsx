'use client';

import { useState } from 'react';
import { MessageCircle, Reply, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockComments = [
  {
    id: '1',
    author: 'Alex Thompson',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'Great article! The explanation of Server Components really helped me understand the concept better. Looking forward to implementing this in my next project.',
    date: '2024-01-16',
    likes: 5,
    replies: [
      {
        id: '2',
        author: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        content: 'Thanks Alex! I\'m glad it was helpful. Feel free to reach out if you have any questions while implementing.',
        date: '2024-01-16',
        likes: 2
      }
    ]
  },
  {
    id: '3',
    author: 'Maria Rodriguez',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'The performance improvements with the App Router are incredible. We migrated our production app and saw a 40% improvement in initial load times.',
    date: '2024-01-15',
    likes: 8,
    replies: []
  }
];

export default function CommentsSection() {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // In a real app, this would make an API call
      console.log('Submitting comment:', newComment);
      setNewComment('');
    }
  };

  const handleSubmitReply = (commentId: string) => {
    if (replyContent.trim()) {
      // In a real app, this would make an API call
      console.log('Submitting reply to:', commentId, replyContent);
      setReplyContent('');
      setReplyingTo(null);
    }
  };

  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Comments ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add Comment Form */}
        <div className="space-y-4">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
            Post Comment
          </Button>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              {/* Main Comment */}
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} alt={comment.author} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900">{comment.author}</h4>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                      <Heart className="w-4 h-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    >
                      <Reply className="w-4 h-4 mr-1" />
                      Reply
                    </Button>
                  </div>

                  {/* Reply Form */}
                  {replyingTo === comment.id && (
                    <div className="mt-4 space-y-3">
                      <Textarea
                        placeholder={`Reply to ${comment.author}...`}
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleSubmitReply(comment.id)}>
                          Reply
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setReplyingTo(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-12 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex gap-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={reply.avatar} alt={reply.author} />
                        <AvatarFallback className="text-xs">{reply.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <h5 className="font-medium text-gray-900 text-sm">{reply.author}</h5>
                          <span className="text-xs text-gray-500">
                            {new Date(reply.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500 text-xs">
                          <Heart className="w-3 h-3 mr-1" />
                          {reply.likes}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}