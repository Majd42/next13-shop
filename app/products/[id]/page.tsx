import ProductItemActions from "@/components/ProductItemActions";
import { BsArrowLeft } from "react-icons/bs";
import { getProductById } from "@/utils/products";
import Image from "next/image";
import BackButton from "@/components/UI/BackButton";

type PropsTypes = {
  params: any;
};

const ProductDetails = async ({ params }: PropsTypes) => {
  const product = await getProductById(parseInt(params.id));

  return (
    <div className="flex flex-col items-center py-5 md:pb-0 ">
      <div className="flex flex-col w-[90%] md:flex-row gap-5 ">
        <div className="   ">
          <BackButton />
          <Image
            src={product.image}
            width={400}
            height={400}
            className="w-full  object-cover"
            alt="product image"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 h-full md:w-[70%]">
          <h1 className="text-xl">
            <span className="text-secondary">Product Name:</span>{" "}
            {product.title}
          </h1>
          <p className="text-hint text-sm">Category: {product.category}</p>
          <p className="flex-1">
            <span className="text-secondary">Description</span> <br />
            {product.description}
          </p>

          <div className="mt-5">
            <ProductItemActions product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
