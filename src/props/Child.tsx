interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  const content = `I am ${color}`;
  return <div>{content}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  const content = `I am ${color}`;
  return <div> {content}</div>;
};

ChildAsFC.displayName = "Child"; // types of methods like this, proptypes etc are only in ChildAsFC component only
