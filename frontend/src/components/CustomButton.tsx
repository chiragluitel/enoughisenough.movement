interface CustomButtonProps {
    label: string;
    onClick: (e : React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                className="group bg-black text-white px-8 py-4 cursor-pointer rounded-xl font-semibold text-xs shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
                <span>{label}</span>
            </button>
        </>
    );
}

export default CustomButton;
