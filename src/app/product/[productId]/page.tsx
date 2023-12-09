import AddToCartButton from "@/components/AddToCartButton";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Separator } from "@/components/ui/separator";
import { PRODUCT_CATEGORIES } from "@/config";
import { getPayloadClient } from "@/get-payload";
import { formatPrice } from "@/lib/utils";
import {
  Check,
  Clock3,
  Locate,
  LocateFixed,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    productId: string;
  };
}

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const payload = await getPayloadClient();

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  const [product] = products;

  if (!product) return notFound();

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.destination
  )?.label;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  const exclude =
    product.exclude?.length !== undefined && product.exclude.length > 0;
  const include =
    product.include?.length !== undefined && product.include.length > 0;

  return (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl w-full px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          {/* Product Details */}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={breadcrumb.href}
                      className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <section className="mt-4">
              <div className="mt-4">
                {/* Product images */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                  <div className="aspect-square rounded-lg">
                    <ImageSlider urls={validUrls} />
                  </div>
                </div>

                {/* add to cart part */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                  <div>
                    <div className="mt-10">
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                </div>

                <h1 className="mt-4 text-2xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                  {product.name}
                </h1>
              </div>
              <Separator className="my-6" />
              <div className="flex items-center mt-2">
                <p className="font-medium text-primary">
                  {formatPrice(product.price)}
                </p>

                <div className="flex items-center gap-2 ml-4 border-l capitalize text-muted-foreground border-gray-300 pl-4">
                  <LocateFixed className="w-4 h-4 text-primary" />
                  {product.destination}
                </div>

                <div className="flex items-center gap-2 ml-4 border-l capitalize text-muted-foreground border-gray-300 pl-4">
                  <Users className="w-4 h-4 text-primary" />
                  {product.adults} {product.adults === 1 ? "Guest" : "Guests"}
                </div>

                <div className="flex items-center gap-2 ml-4 border-l capitalize text-muted-foreground border-gray-300 pl-4">
                  <Clock3 className="w-4 h-4 text-primary" />
                  {product.days}
                  {product.days === 1 ? " Day" : " Days"}
                </div>
              </div>

              {/* <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                  {product.days}
                </p>
              </div> */}

              <Separator className="my-6" />
            </section>

            <div className="flex flex-col items-start  gap-8">
              {include ? (
                <div className="flex flex-col items-start">
                  <h2 className="text-base text-primary uppercase font-bold">
                    what&apos;s Include
                  </h2>
                  {product.include?.map((item) => (
                    <div key={item.id} className="flex flex-col items-start">
                      <span className="block mt-4 text-sm  tracking-wide font-normal text-muted-foreground">
                        {"- "}
                        {item.included}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              {exclude ? (
                <div className="flex flex-col items-start">
                  <h2 className="text-base text-primary uppercase font-bold">
                    what&apos;s Exclude
                  </h2>
                  {product.exclude?.map((item) => (
                    <div key={item.id} className="flex flex-col items-start">
                      <span className="block mt-4 text-sm  tracking-wide font-normal text-muted-foreground">
                        {"- "}
                        {item.excluded}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* <ProductReel
        href="/products"
        query={{ category: product.destination, limit: 4 }}
        title={`Similar ${label}`}
        subtitle={`Browse similar high-quality ${label} just like '${product.name}'`}
      /> */}
    </MaxWidthWrapper>
  );
};

export default Page;
