import { useRef } from "react";

export type PickedMedia = {
    type: 'image' | 'video';
    file: File;
    previewUrl: string;
};

type NewPostMediaPickerProps = {
    onPick: (items: PickedMedia[]) => void;
};

const NewPostMediaPicker: React.FC<NewPostMediaPickerProps> = ({ onPick }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFiles = (files: FileList | null) => {
        if (!files) return;
        const items: PickedMedia[] = Array.from(files).map((file) => ({
            type: file.type.startsWith('video') ? 'video' : 'image',
            file,
            previewUrl: URL.createObjectURL(file),
        }));
        onPick(items);
    };

    return (
        <div className="flex items-center gap-3">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
            />
            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50"
            >
                Add photos/videos
            </button>
        </div>
    );
};

export default NewPostMediaPicker;
