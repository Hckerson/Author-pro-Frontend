"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Tag, Eye, Save, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(100, {
      message: "Title must be less than 100 characters.",
    }),
  excerpt: z
    .string()
    .min(20, {
      message: "Excerpt must be at least 20 characters.",
    })
    .max(300, {
      message: "Excerpt must be less than 300 characters.",
    }),
  content: z.string().min(100, {
    message: "Content must be at least 100 characters.",
  }),
  tags: z.string().optional(),
  coverImage: z.string().url().optional().or(z.literal("")),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  status: z.enum(["draft", "published"]),
});

const categories = [
  "Writing Tips",
  "Fiction",
  "Non-Fiction",
  "Publishing",
  "Author Life",
  "Book Reviews",
  "Industry News",
  "Creative Process",
];

export default function CreateBlogPost() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      tags: "",
      coverImage: "",
      category: "",
      status: "draft",
    },
  });

  const addTag = () => {
    if (tagInput.trim() && !selectedTags.includes(tagInput.trim())) {
      setSelectedTags([...selectedTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real application, you would upload the file to your server/cloud storage
      // For now, we'll create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      form.setValue("coverImage", previewUrl);

      toast({
        title: "Image uploaded",
        description: "Cover image has been set successfully.",
      });
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Prepare the blog post data
      const blogPostData = {
        ...values,
        tags: selectedTags,
        slug: values.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
        readingTime: Math.ceil(values.content.split(" ").length / 200), // Estimate reading time
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };

      // TODO: Replace with actual API call to your backend
      console.log("Blog post data to be sent to API:", blogPostData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title:
          values.status === "published" ? "Post published!" : "Draft saved!",
        description:
          values.status === "published"
            ? "Your blog post has been published successfully."
            : "Your draft has been saved successfully.",
      });

      // Redirect to blog list or the new post
      if (values.status === "published") {
        router.push("/blog");
      } else {
        router.push("/blog");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save the blog post. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const watchedContent = form.watch("content");
  const wordCount = watchedContent
    ? watchedContent.split(" ").filter((word) => word.length > 0).length
    : 0;
  const estimatedReadingTime = Math.ceil(wordCount / 200);

  return (
    <div className="fade-in min-h-screen bg-muted/30">
      <div className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Create New Post</h1>
              <p className="text-muted-foreground">
                Share your thoughts with the world
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              {wordCount} words • {estimatedReadingTime} min read
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Form {...form}>
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Post Details</CardTitle>
                  <CardDescription>
                    Fill in the details for your new blog post
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Title */}
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your blog post title..."
                              className="text-lg"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            A compelling title that captures your reader's
                            attention
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Excerpt */}
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Excerpt</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write a brief summary of your post..."
                              className="min-h-20"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            A short description that appears in post previews
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Content */}
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your blog post content here..."
                              className="min-h-96 font-mono text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Write your full blog post content. You can use
                            Markdown formatting.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          form.setValue("status", "draft");
                          form.handleSubmit(onSubmit)();
                        }}
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save as Draft
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          form.setValue("status", "published");
                          form.handleSubmit(onSubmit)();
                        }}
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? "Publishing..." : "Publish Post"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Post Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Category */}
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <select
                            className="w-full p-2 border border-input rounded-md bg-background"
                            {...field}
                          >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Tags */}
                  <div>
                    <FormLabel>Tags</FormLabel>
                    <div className="flex gap-2 mt-2">
                      <Input
                        placeholder="Add a tag..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addTag}
                      >
                        <Tag className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => removeTag(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cover Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cover Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="coverImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter image URL..."
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                setImagePreview(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">or</p>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <span>
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Image
                          </span>
                        </Button>
                      </label>
                    </div>

                    {imagePreview && (
                      <div className="mt-4">
                        <img
                          src={imagePreview}
                          alt="Cover preview"
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Quick Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-sm line-clamp-2">
                        {form.watch("title") ||
                          "Your post title will appear here"}
                      </h3>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground line-clamp-3">
                        {form.watch("excerpt") ||
                          "Your post excerpt will appear here"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{wordCount} words</span>
                      <span>•</span>
                      <span>{estimatedReadingTime} min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
