/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function SearchColleges() {
    const [allColleges, setAllColleges] = useState([]);
    const [query, setQuery] = useState("");

    // fetch once
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/colleges`)
            .then((r) => r.json())
            .then(setAllColleges)
            .catch((e) => console.error("Failed to load colleges:", e));
    }, []);

    // compute matches on every keystroke (prefix match = “alphabet by alphabet”)
    const matches = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return [];
        return allColleges
            .filter((c) => (c?.name || "").toLowerCase().startsWith(q))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [query, allColleges]);

    return (
        <section className="py-6 bg-white">
            <div className="container mx-auto px-4">
                {/* Search field under navbar */}
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a college name…"
                        className="w-full max-w-2xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>

                {/* Results */}
                {query && (
                    <div className="mt-6">
                        {matches.length === 0 ? (
                            <p className="text-center text-gray-500">No colleges found</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {matches.map((college) => (
                                    <div
                                        key={college._id}
                                        className="bg-white dark:bg-gray-900 rounded-lg shadow border overflow-hidden"
                                    >
                                        <div className="h-40 bg-gray-100">
                                            <img
                                                src={college.image}
                                                alt={college.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">{college.name}</h3>
                                            {college.location && (
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {college.location}
                                                </p>
                                            )}
                                            <Link
                                                href={`/colleges/${college._id}`}
                                                className="inline-block mt-3 px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
