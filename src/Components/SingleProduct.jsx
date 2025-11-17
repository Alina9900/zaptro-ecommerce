import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { IoStar, IoStarOutline, IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const StarRating = ({ rate }) => {
    const fullStars = Math.floor(rate);
    const half = rate - fullStars >= 0.5;
    return (
        <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) =>
                i < fullStars ? (
                    <IoStar key={i} />
                ) : half && i === fullStars ? (
                    <IoStar key={i} style={{ opacity: 0.9 }} />
                ) : (
                    <IoStarOutline key={i} className="text-yellow-300" />
                )
            )}
            <span className="text-sm text-gray-600 ml-2">{rate?.toFixed(1)}</span>
        </div>
    );
};

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [qty, setQty] = useState(1);
    const [mainImage, setMainImage] = useState(null);
  
    const {addToCart,cartItem}=useCart()
console.log(cartItem)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(res.data);
                setMainImage(res.data.image);
                // fetch related products by category (limit 4, exclude current)
                if (res.data?.category) {
                    const rel = await axios.get(
                        `https://fakestoreapi.com/products/category/${encodeURIComponent(
                            res.data.category
                        )}`
                    );
                    setRelated(rel.data.filter((p) => p.id !== res.data.id).slice(0, 4));
                } else {
                    setRelated([]);
                }
            } catch (err) {
                console.error(err);
                setError("Could not load product. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [id]);

    // const addToCart = () => {
    //     // placeholder action: replace with your cart logic
    //     console.log("Add to cart:", { productId: product.id, qty });
    //     alert(`${product.title} (x${qty}) added to cart — replace with real cart logic.`);
    // };

    if (loading) {
        return (
            <div className="p-8 flex items-center justify-center min-h-[60vh]">
                <div className="animate-pulse w-full max-w-6xl">
                    <div className="h-96 bg-gray-200 rounded-lg mb-6" />
                    <div className="h-6 bg-gray-200 rounded mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-center">
                <p className="text-red-600 mb-3">{error}</p>
                <Link to="/products" className="text-blue-600 underline">
                    Back to products
                </Link>
            </div>
        );
    }

    if (!product) return null;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left: Images */}
                <div className="md:col-span-6">
                    <div className="bg-white rounded-xl shadow p-4">
                        <div className="h-[420px] flex items-center justify-center border rounded-md overflow-hidden bg-gray-50">
                            <img
                                src={mainImage}
                                alt={product.title}
                                className="max-h-full object-contain"
                            />
                        </div>

                        {/* thumbnails */}
                        <div className="flex gap-3 mt-4 overflow-x-auto">
                            {/* fake store API provides only one image; we still create small thumbnail list showing same image for nicer UI */}
                            {[product.image, product.image, product.image].map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className="h-20 w-20 flex items-center justify-center border rounded-lg overflow-hidden bg-white hover:scale-105 transition"
                                >
                                    <img src={img} alt={`${product.title}-${idx}`} className="h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-6 flex flex-col gap-4">
                    <div className="bg-white rounded-xl shadow p-6">
                        <h1 className="text-2xl font-semibold">{product.title}</h1>

                        <div className="flex items-center justify-between mt-2">
                            <StarRating rate={product.rating?.rate || 0} />
                            <div className="text-sm text-gray-500">({product.rating?.count} reviews)</div>
                        </div>

                        <p className="text-3xl font-bold text-red-600 mt-4">${product.price}</p>

                        <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

                        {/* quantity + add to cart */}
                        <div className="mt-6 flex items-center gap-4">
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                                    className="px-3 py-2 hover:bg-gray-100"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <div className="px-4 py-2 w-12 text-center">{qty}</div>
                                <button
                                    onClick={() => setQty((q) => q + 1)}
                                    className="px-3 py-2 hover:bg-gray-100"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={()=>addToCart(product)}
                                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                <IoCartOutline size={20} />
                                Add to cart
                            </button>
                        </div>

                        {/* meta */}
                        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-gray-600">
                            <div>
                                <span className="font-semibold">Category:</span>{" "}
                                <span className="capitalize">{product.category}</span>
                            </div>
                            <div>
                                <span className="font-semibold">Stock:</span>{" "}
                                <span>{Math.max(0, 20 - (product.rating?.count || 0)) || 1} available</span>
                            </div>
                        </div>
                    </div>

                    {/* Related products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Related products</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {related.length === 0 ? (
                                <div className="text-gray-500 col-span-2">No related products</div>
                            ) : (
                                related.map((p) => (
                                    <Link
                                        to={`/product/${p.id}`}
                                        key={p.id}
                                        className="block bg-white rounded-lg p-3 border hover:shadow-md transition"
                                    >
                                        <div className="h-28 flex items-center justify-center">
                                            <img src={p.image} alt={p.title} className="h-full object-contain" />
                                        </div>
                                        <div className="mt-2 text-sm font-medium line-clamp-2">{p.title}</div>
                                        <div className="mt-1 text-sm text-red-600 font-semibold">${p.price}</div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
