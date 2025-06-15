import {
  setUploadPreset,
  uploadImage,
  getImgUrl,
} from "@/app/services/cloudinary/connection";
import axios from "axios";
import prisma from "@/prisma/connections";

type Urls = {
  slug: string;
  status: "DRAFTED" | "PUBLISHED";
  featured: boolean;
};

const urls: Urls[] = [
  {
    slug: "retirement-planning-strategies",
    status: "DRAFTED",
    featured: true,
  },
  {
    slug: "tax-optimization-techniques",
    status: "PUBLISHED",
    featured: false,
  },
  {
    slug: "investment-strategies-market-volatility",
    status: "DRAFTED",
    featured: true,
  },
  {
    slug: "estate-planning-essentials",
    status: "PUBLISHED",
    featured: false,
  },
  {
    slug: "business-succession-planning",
    status: "DRAFTED",
    featured: true,
  },
  {
    slug: "understanding-risk-tolerance",
    status: "DRAFTED",
    featured: false,
  },
  {
    slug: "roth-vs-traditional-ira",
    status: "PUBLISHED",
    featured: false,
  },
  {
    slug: "financial-planning-young-professionals",
    status: "PUBLISHED",
    featured: true,
  },
];

export async function updatePost() {
  urls.map(async (url) => {
    const slug = url.slug;
    await prisma.post.update({
      where: {
        slug: slug,
      },
      data: {
        featured: url.featured,
        status: url.status,
      },
    });
    // axios.patch(
    //   `http://localhost:4000/posts/${slug}`,
    //   { slug: url.slug, status: url.status, featured: url.featured },
    //   { headers: { "Content-Type": "application/json" } }
    // );
  });
}

export async function setUpload() {
  const preset = { name: "coverImgs", categories: "img", folder: "authorPro" };
  await setUploadPreset(preset);
}

// export async function imgUpload() {
//   urls.map(async (url) => {
//     const { slug, img } = url;
//     const file_path = `${process.cwd()}/public/${img}`;
//     await uploadImage(slug, file_path);
//   });
// }

export async function fetchUrl() {
  urls.map(async (url) => {
    const public_id = `authorPro/${url.slug}`;
    const refinedUrl = await getImgUrl(public_id);
    console.log(`Slug: ${url.slug}, img: ${refinedUrl}`);
  });
}

export async function GET() {
  try {
    // await setUpload();
    // await imgUpload()
    // await fetchUrl();
    await updatePost();
    return Response.json({ message: `Database seeded successfully` });
  } catch (error) {
    console.error(`Error seeding posts: ${error}`);
    return Response.json({ error: error }, { status: 500 });
  }
}
