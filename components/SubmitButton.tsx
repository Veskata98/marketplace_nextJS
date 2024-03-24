import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
    className?: string;
    children: React.ReactNode;
}

export const SubmitButton = ({ className, children }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className={className}>
            {children}
        </button>
    );
};
