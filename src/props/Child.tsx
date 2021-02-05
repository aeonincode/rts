// describe all different props we expect this component Child = () => {} tp receive
interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
};