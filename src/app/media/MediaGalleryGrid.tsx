"use client"
import React, { useEffect, useMemo, useState } from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import { Media } from "../../../lib/types";
import SearchBar from "../components/SearchBar";

interface MediaGalleryGridProps {
  items: Media[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [viewer, setViewer] = useState<{ src: string; title: string } | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (viewer) {
      const t = requestAnimationFrame(() => setAnimateIn(true));
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeViewer();
      };
      document.addEventListener("keydown", onKey);
      return () => {
        cancelAnimationFrame(t);
        document.removeEventListener("keydown", onKey);
      };
    } else {
      setAnimateIn(false);
    }
  }, [viewer]);

  const openViewer = (src: string, title: string) => setViewer({ src, title });
  const closeViewer = () => setViewer(null);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.fields.title.toLowerCase().includes(q));
  }, [items, query]);

  if(items.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">No media items found</h1>
      </div>
    )
  }
  return (
    <>
      <SearchBar
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        onSearch={() => {}}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, idx) => {
          const imageSrc = `https:${item.fields.img.fields.file.url}`;
          return (
            <MediaGalleryCard
              key={idx}
              image={imageSrc}
              title={item.fields.title}
              isVideo={item.fields.img.isVideo}
              onClick={() => openViewer(imageSrc, item.fields.title)}
            />
          );
        })}
      </div>
      {viewer && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
            animateIn ? "opacity-100" : "opacity-0"
          }`}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeViewer}
          />
          <div
            className={`relative z-10 max-w-5xl w-[92%] md:w-auto shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-200 ${
              animateIn ? "scale-100" : "scale-95"
            }`}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeViewer}
              aria-label="Close image viewer"
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md"
            >
              ✕
            </button>
            {/* Image */}
            <img
              src={viewer.src}
              alt={viewer.title}
              className="max-h-[80vh] max-w-full object-contain bg-black"
            />
            {/* Caption */}
            <div className="bg-white px-4 py-3 text-sm text-gray-700">{viewer.title}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGalleryGrid;