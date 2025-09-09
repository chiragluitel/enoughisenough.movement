type NewPostTextProps = {
    value: string;
    onChange: (value: string) => void;
};

const NewPostText: React.FC<NewPostTextProps> = ({ value, onChange }) => {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 p-3 text-sm"
            placeholder="You're free to say anything here..."
            rows={4}
        />
    );
};

export default NewPostText;
