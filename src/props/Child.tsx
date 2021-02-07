// describe all different props we expect this component Child = () => {} tp receive
interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
};

// Defining a function component with typescript
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>;
};