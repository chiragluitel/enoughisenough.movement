import { useState } from "react";
import NewPostText from "../components/Composer/NewPostText";
import NewPostMediaPicker from "../components/Composer/NewPostMediaPicker";
import type { PickedMedia } from "../components/Composer/NewPostMediaPicker";
import NewPostPreview from "../components/Composer/NewPostPreview";
import type { MediaItem } from "../types";

const NewPostPage = () => {
    const [text, setText] = useState("");
    const [picked, setPicked] = useState<PickedMedia[]>([]);

    const mediaItems: MediaItem[] = picked.map((p) => ({
        type: p.type,
        url: p.previewUrl,
        // optional: posterUrl could be set for videos
    })) as MediaItem[];

    const handlePick = (items: PickedMedia[]) => {
        setPicked((prev) => [...prev, ...items]);
    };

    const handleClearMedia = () => setPicked([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // placeholder: submit to API or state management
        alert("Post submitted (demo)");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 text-center pt-4"> New Post </h1>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-4">
                        <p> Add Content </p>
                        <NewPostText value={text} onChange={setText} />
                        <div className="flex items-center justify-between">
                            <NewPostMediaPicker onPick={handlePick} />
                            {picked.length > 0 && (
                                <button type="button" onClick={handleClearMedia} className="text-sm text-gray-600 hover:underline">Clear media</button>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-black">Post</button>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold text-gray-700 mb-2">Preview</h2>
                        <NewPostPreview text={text} media={mediaItems} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPostPage;
